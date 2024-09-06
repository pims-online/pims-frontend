import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path, { resolve } from 'path';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Vite import.meta.env is accessible only in the application code
const URL = process.env.VITE_APP_URL;

/** ----- BUILD STRUCTURE : dist/assets -----
 *
 * ├── App-BGM31teO.js
 * ├── dsfr.module.min-8s9HWIH0.js
 * ├── images
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
 * SVG files are converted into Data URIs by Vite when their size are < 4KB
 */

// Folders for images and medias
const assetsDir = 'assets';
const imagesDir = `${assetsDir}/images`;
const mediaDir = `${assetsDir}/media`;

// Extensions for each type of file
const imageExtensions = ['.png', '.svg', '.jpg', '.jpeg', '.gif'];
const mediaExtensions = ['.mp3', '.wav', '.ogg'];

export default defineConfig({
	publicDir: 'public',
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
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
		assetsInlineLimit(filePath) {
			// If return false => the file is not inlined, and forced to be considered as an asset
			// If return true => the file is forced to be converted into data URI
			// If return none, the default schema is applied : inline only if < 4KB

			// For DSFR svg, we ban Inline files to prevent build issues
			const isDSFRAsset = filePath.includes('react-dsfr/dsfr');
			if (isDSFRAsset) return false;
			return undefined;
		},
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
				widget: resolve(__dirname, './src/widget.tsx'),
			},
			output: {
				entryFileNames: (assetInfo) => {
					console.log('Entry : ', assetInfo?.name);
					return assetInfo.name === 'widget'
						? 'assets/js/[name].js'
						: 'assets/[name].js';
				},
				assetFileNames: (assetInfo) => {
					// Assets are static files (images, svg) greater than 4KB
					// They are optimized by Vite, and hashed for caching opt
					// Here, at build time, we organize images and media in subfolders
					// All other files (<4KB) are encoded as base64 data URIs
					const filename = assetInfo.name || '';
					console.log('Asset : ', filename);
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
