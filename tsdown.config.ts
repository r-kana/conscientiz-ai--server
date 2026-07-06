import type { UserConfig as TsdownConfig } from 'tsdown'
import { defineConfig } from 'tsdown'

const defaultConfig = {
  outDir: 'dist',
  target: 'esnext',
  format: ['esm'],
  nodeProtocol: true,
  minify: true,
  sourcemap: true,
  shims: true,
  treeshake: true,
  deps: {
    onlyBundle: false,
    skipNodeModulesBundle: true,
  },
} as const satisfies TsdownConfig

export default defineConfig([
  {
    ...defaultConfig,
    entry: ['src/server.ts'],
    external: ['sqlite3'],
    clean: true,
  },
])