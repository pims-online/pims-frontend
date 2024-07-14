import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

const URL_CDN = 'https://pims-frontend.vercel.app/';
const URL_LOCALHOST = 'http://localhost:4173/';
const buildLocal = true;
const URL = buildLocal ? URL_LOCALHOST : URL_CDN;

export default defineConfig({
	plugins: [
		react(),
		cssInjectedByJsPlugin({
			styleId: 'vite-injected-css',
			jsAssetsFilterFunction: function customJsAssetsfilterFunction(
				outputChunk
			) {
				console.log('This is the output Chunk ; ', outputChunk.fileName);
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
			},
		},
	},
	experimental: {
		renderBuiltUrl(filename: string) {
			return URL + filename;
		},
	},
});
