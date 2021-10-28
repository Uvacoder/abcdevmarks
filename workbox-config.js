module.exports = {
  globDirectory: "./dist/",
  globPatterns: [
    "**/*.{html,ico}"
  ],
  globIgnores: [
    "node_modules/**/*",
    "{.,_}*/**/*",
    "**/*.{md,txt}",
    "Gemfile*",
    "package*"
  ],
  runtimeCaching: [
    {
      urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
      handler: 'CacheFirst',
      options: {
        cacheName: 'images',
        expiration: {
          maxEntries: 10,
          maxAgeSeconds: 60 * 60 * 24 * 30, // 30 Days
        },
      },
    },
    {
      urlPattern: /\.(?:json)$/,
      handler: 'NetworkFirst',
      options: {
        cacheName: 'json',
        expiration: {
          maxEntries: 10,
          maxAgeSeconds: 60 * 60 * 24, //  24 hours
        },
      },
    }
  ],
  swDest: "./dist/sw.js",
  sourcemap: false
};