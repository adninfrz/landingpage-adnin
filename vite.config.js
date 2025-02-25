import { defineConfig } from 'vite'

export default defineConfig({
    // Konfigurasi dasar
    root: './',
    base: './',

    // Konfigurasi server
    server: {
        port: 3000,
        open: true, // Buka browser secara otomatis
        cors: true
    },

    // Konfigurasi build
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        minify: 'terser',
        sourcemap: false,
    },

    // Konfigurasi optimasi
    optimizeDeps: {
        include: ['alpinejs']
    },

    // Konfigurasi resolve
    resolve: {
        alias: {
            '@': '/src' // Memungkinkan import dari path @/components/...
        }
    }
})