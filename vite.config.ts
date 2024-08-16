import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path, { resolve } from 'path';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

const URL_CDN = 'https://pims-frontend.vercel.app/';
const URL_LOCALHOST = 'http://localhost:4173/';
const buildLocal = true;
const URL = buildLocal ? URL_LOCALHOST : URL_CDN;

/** ----- BUILD STRUCTURE : dist/assets -----
 *
 * ├── App-BGM31teO.js
 * ├── dsfr.module.min-8s9HWIH0.js
 * ├── images
 * │	├── dirty-saip-guidelines-no-phone-B3ClGUxc.png
 * │	├── light-BcMY7tSa.svg
 * │	├── ...
 * │	└── system-BJKRkqTi.svg
 * ├── media
 * │	├── ...
 * │	└── ...
 * ├── js
 * │	└── widget.js
 * └── main.js
 *
 * SVG files might be incorporated in data:
 */

// Folders for images and medias
const assetsDir = 'assets';
const imagesDir = `${assetsDir}/images`;
const mediaDir = `${assetsDir}/media`;

// Extensions for each type of file
const imageExtensions = ['.png', '.svg', '.jpg', '.jpeg', '.gif'];
const mediaExtensions = ['.mp3', '.wav', '.ogg'];

export default defineConfig({
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@public': path.resolve(__dirname, './public'),
		},
	},
	plugins: [
		react(),
		cssInjectedByJsPlugin({
			styleId: 'vite-injected-css',
			jsAssetsFilterFunction: function customJsAssetsfilterFunction(
				outputChunk
			) {
				// Inject css in files (outputChunk) matching the following names
				return (
					outputChunk.fileName == 'assets/js/widget.js' ||
					outputChunk.fileName == 'assets/main.js'
				);
			},
		}),
	],
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
				widget: resolve(__dirname, './src/widget.tsx'),
			},
			output: {
				entryFileNames: (assetInfo) => {
					return assetInfo.name === 'widget'
						? 'assets/js/[name].js'
						: 'assets/[name].js';
				},
				assetFileNames: (assetInfo) => {
					// At build time, we organize images and media in subfolders
					// For caching optimization, we add a hash to each file
					const filename = assetInfo.name || '';
					const ext = path.extname(filename);
					if (imageExtensions.includes(ext)) {
						const finalPath = path.join(imagesDir, '[name]-[hash][extname]');
						return finalPath;
					}
					if (mediaExtensions.includes(ext)) {
						const finalPath = path.join(mediaDir, '[name]-[hash][extname]');
						return finalPath;
					}
					const finalPath = path.join(assetsDir, '[name]-[hash][extname]');
					return finalPath;
				},
			},
		},
	},
	experimental: {
		renderBuiltUrl(filename: string) {
			return URL + filename;
		},
	},
});
