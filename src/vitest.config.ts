import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react';
import { viteCommonjs } from '@originjs/vite-plugin-commonjs';


export default defineConfig({
    plugins: [react(), viteCommonjs()],
    test: {
        globals: true,
        environment: 'jsdom',
    },
});