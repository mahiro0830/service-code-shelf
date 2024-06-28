import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    build: {
        rollupOptions: {
            output: {
                entryFileNames: 'assets/[name].js',
                chunkFileNames: 'assets/[name].js',
                assetFileNames: 'assets/[name].[ext]'
            }
        }
    },
    plugins: [
        react(),
        laravel({
            input: [
                // 'resources/css/app.css',
                'resources/scss/app.scss',
                'resources/ts/index.tsx'
            ],
            refresh: true,
        }),
    ],
});
