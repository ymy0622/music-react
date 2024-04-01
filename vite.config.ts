import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'
import UnoCSS from 'unocss/vite'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), UnoCSS(), svgr()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: `true; @import (reference) "${path.resolve('src/assets/styles/variables.less')}";`, // 可以直接使用antdv预设的less字段
        },
        javascriptEnabled: true,
      },
    },
  },
})
