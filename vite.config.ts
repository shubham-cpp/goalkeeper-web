import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import eslintPlugin from '@nabla/vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslintPlugin(), tsconfigPaths()],
  server: { port: 3000 },
  build: {
    sourcemap: true,
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: './src/setupTests.ts',
    coverage: {
      reporter: ['html', 'lcov'],
    },
  },
})
