// vite.config.ts
import { resolve } from "node:path";
import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import Inspect from "vite-plugin-inspect";
import { VitePWA } from "vite-plugin-pwa";
import VueDevTools from "vite-plugin-vue-devtools";
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";
import UnoCss from "unocss/vite";
import prerender from 'vite-plugin-prerender';
export default defineConfig({
  server: {
    host: "localhost",
    port: 8888,
    open: true,
    proxy: {},
  },
  plugins: [
    Vue({
      script: {
        propsDestructure: true,
        defineModel: true,
      },
    }),
    Icons({
      scale: 1.5,
      defaultStyle: "",
      defaultClass: "inline-block h-5 w-5 stroke-current md:h-6 md:w-6",
      compiler: "vue3",
      jsx: "react",
      autoInstall: true,
    }),
    AutoImport({
      imports: [
        "vue",
        "vue-router",
        "vue-i18n",
        "vue/macros",
        "@vueuse/head",
        "@vueuse/core",
      ],
      dts: "types/auto-imports.d.ts",
      dirs: [
        "src/composables",
        "src/store",
      ],
      vueTemplate: true,
    }),
    Components({
      extensions: ["vue"],
      include: [/\.vue$/, /\.vue\?vue/],
      dts: "types/components.d.ts",
      exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/],
      resolvers: [
        IconsResolver(),
      ],
    }),
    VueI18nPlugin({
      runtimeOnly: true,
      compositionOnly: true,
      fullInstall: true,
      include: [resolve(__dirname, "src/locales/**")],
    }),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico"],
      manifest: {
        name: "ayo",
        short_name: "ayo-vuieettt",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
    Inspect(),
    VueDevTools(),
    UnoCss(),
    prerender({
      staticDir: resolve(__dirname, 'dist'), // Specify the directory where static files are placed after build
      routes: ['/', '/about', '/contact'], // List the routes you want to prerender
    }),
  ],
  resolve: {
    alias: {
      "~/": `${resolve(__dirname, "src")}/`,
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "~/styles/variables.scss";
        `,
        javascriptEnabled: true,
      },
    },
  },
  test: {
    environment: "jsdom",
  },
});
