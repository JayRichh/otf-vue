import { presetDaisy } from "unocss-preset-daisy";
import { presetAttributify, presetIcons, presetTypography, presetUno, transformerDirectives, transformerVariantGroup } from "unocss";
import { defineConfig } from "unocss/vite";
import presetEase from "unocss-preset-ease";

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetEase(),
    presetTypography(),
    presetIcons({
      scale: 1.5,
    }),
    presetDaisy({
      themes: true,
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  shortcuts: {
    "heading": "font-[\"Roboto\"] font-bold",
    "text": "font-[\"Roboto\"] text-gray-700",
    "strong": "font-bold",
    "italic": "italic",

    // Links
    "link": "text-blue-500 underline",
    "link-hover": "hover:text-blue-700",
    "link-visited": "visited:text-purple-500",

    // Cards
    "card": "bg-white shadow-md rounded-lg overflow-hidden",
    "card-header": "p-4 font-bold border-b border-gray-200",
    "card-body": "p-4",
    "card-title": "text-xl font-[\"Roboto\"] font-bold",
    "card-subtitle": "text-lg font-[\"Roboto\"] text-gray-500",
    "card-price": "text-lg font-[\"Roboto\"] font-bold text-green-500",

    // Code and preformatted text
    "code": "font-mono bg-gray-100 text-red-500 p-2 rounded",
    "pre": "font-mono bg-gray-100 overflow-auto p-4 rounded",

    // Buttons
    "btn": "px-4 py-2 rounded cursor-pointer font-bold text-center transition-colors",
    "btn-primary": "bg-blue-500 text-white hover:bg-blue-700",
    "btn-secondary": "bg-gray-500 text-white hover:bg-gray-700",

    // Responsive grid
    "grid-mobile": "grid grid-cols-1 gap-4",
    "grid-desktop": "md:grid-cols-3 lg:grid-cols-3",
  },
});
