// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        "@/assets/main.scss", 
        "remixicon/fonts/remixicon.css",
    ],
    modules: [
        "@nuxtjs/tailwindcss", 
        "@pinia/nuxt", 
        '@nuxtjs/google-fonts',
    ],
    googleFonts: {
        families: { 
            "Varela Round": true,
        },
        display: 'swap',
        prefetch: false,
        preconnect: false,
        preload: false,
        download: true,
        base64: false,
    },
  });
  