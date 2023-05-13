import { fileURLToPath, URL } from 'url';
import vue from '@vitejs/plugin-vue';
import autoImport from 'unplugin-auto-import/vite';
import vueMacros from 'unplugin-vue-macros/vite';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['es', 'cjs'],
      fileName: 'index',
    },
    rollupOptions: {
      // Externalize deps that shouldn't be bundled into the library.
      external: ['vue'],      
    },
    sourcemap: false,
    // Reduce bloat from legacy polyfills.
    target: 'esnext',
    // Leave minification up to applications.
    minify: false,
    assetsInlineLimit: 0,
  },
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },

  plugins: [
    vue(),
    
    dts({
      insertTypesEntry: true,
      entryRoot: 'src',
      outputDir: 'dist/types',
      copyDtsFiles: true,
    }),

    autoImport({
      imports: ['vue', 'vue/macros', '@vueuse/core'],
      eslintrc: {
        enabled: true,
        filepath: '.eslintrc-auto-import.json',
        globalsPropValue: true,
      },
      dirs: ['src/composables'],
      dts: true,
      vueTemplate: true,
    }),    
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
