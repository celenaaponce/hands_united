/** @type {import('next').NextConfig} */
module.exports = (phase, { defaultConfig }) => {
  return {
    ...defaultConfig,

    // ✅ Webpack config you already had
    webpack: (config) => {
      config.resolve = {
        ...config.resolve,
        fallback: {
          fs: false,
          path: false,
          os: false,
        },
      }
      return config
    },

    // ✅ Redirects MUST live here
    async redirects() {
      return [
        {
          source: '/ASL/Burmese',
          destination: '/learn-asl/burmese',
          permanent: true,
        },
        {
          source: '/kyr',
          destination: '/programs/immigration/know-your-rights',
          permanent: true,
        },
        {
          source: '/ayudar/donate',
          destination: '/donate',
          permanent: true,
        },
      ]
    },
  }
}
