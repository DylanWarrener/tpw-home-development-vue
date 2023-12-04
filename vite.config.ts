// Plugins
import vue from "@vitejs/plugin-vue";
import svgLoader from "vite-svg-loader";
import vuei18n from "@intlify/unplugin-vue-i18n/vite";

// Node
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

// Vite
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		rollupOptions: {
			input: "./src/main.ts",
		},
	},
	plugins: [
		vue(),
		svgLoader(),
		vuei18n({
			include: resolve(dirname(fileURLToPath(import.meta.url)), "./src/locales/locales/**"),
		}),
	],
	resolve: {
		alias: {
			"@src": resolve(__dirname, "./src"),
			"@assets": resolve(__dirname, "./src/assets"),
			"@components": resolve(__dirname, "./src/components"),
			"@interfaces": resolve(__dirname, "./src/interfaces"),
			"@locales": resolve(__dirname, "./src/locales"),
			"@pages": resolve(__dirname, "./src/pages"),
			"@plugins": resolve(__dirname, "./src/plugins"),
			"@stores": resolve(__dirname, "./src/stores"),
			"@themes": resolve(__dirname, "./src/themes"),
			"@utils": resolve(__dirname, "./src/utils"),
			"@types": resolve(__dirname, "./src/types"),
			"@enums": resolve(__dirname, "./src/enums"),
			"@styles": resolve(__dirname, "./src/styles"),
		},
	},
});
