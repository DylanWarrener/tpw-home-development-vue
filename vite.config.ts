import vue from "@vitejs/plugin-vue";
import svgLoader from "vite-svg-loader";
import path from "node:path";

import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		rollupOptions: {
			input: "./src/main.ts",
		},
	},
	plugins: [vue(), svgLoader()],
	resolve: {
		alias: {
			"@src": path.resolve(__dirname, "./src"),
			"@assets": path.resolve(__dirname, "./src/assets"),
			"@components": path.resolve(__dirname, "./src/components"),
			"@interfaces": path.resolve(__dirname, "./src/interfaces"),
			"@locales": path.resolve(__dirname, "./src/locales"),
			"@pages": path.resolve(__dirname, "./src/pages"),
			"@plugins": path.resolve(__dirname, "./src/plugins"),
			"@stores": path.resolve(__dirname, "./src/stores"),
			"@themes": path.resolve(__dirname, "./src/themes"),
			"@utils": path.resolve(__dirname, "./src/utils"),
			"@types": path.resolve(__dirname, "./src/types"),
			"@enums": path.resolve(__dirname, "./src/enums"),
			"@styles": path.resolve(__dirname, "./src/styles"),
		},
	},
});
