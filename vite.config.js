import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, "src/Polyly.ts"),
            name: "Polyly",
            fileName: "polyly",
        },
        rollupOptions: {
            external: [],
        },
    },
});
