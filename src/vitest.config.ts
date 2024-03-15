import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react';
import { viteCommonjs } from '@originjs/vite-plugin-commonjs';


export default defineConfig({
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    plugins: [react(), viteCommonjs()],
    test: {
        globals: true,
        environment: 'jsdom',
    },
});