import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, "src/Polyly.ts"),
            name: "polyly",
            fileName: "polyly",
        },
        rollupOptions: {
            external: [],
        },
    },
    plugins: [dts({ entryRoot: resolve(__dirname, "src") })],
    rollupOptions: {
        external: ["twgl.js"],
    },
});
