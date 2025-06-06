import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    base: '/justinekojo.github.io/', // 👈 Replace with your GitHub repo name
    plugins: [react()],
});