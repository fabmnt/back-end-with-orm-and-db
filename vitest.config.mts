import { defineConfig } from 'vitest/config'
import tsconfigpaths from 'vite-tsconfig-paths'

export default defineConfig({
  test: {
    // ... Specify options here.
  },
  plugins: [tsconfigpaths()]
})