const withImages = require('next-images')

const redirects = {
  async redirects() {
    return [
      {
        source: '/dashboards',
        destination: '/dashboards/tasks',
        permanent: true,
      },
    ]
  },
}

module.exports = {
  experimental: {
    outputStandalone: true,
  },
  // compiler: {
  //   styledComponents: true,
  // },
  images: {
    domains: ['minio.aws.abraham.fun'],
  },
  env: {
    NEXT_PUBLIC_ABRAHAM_GATEWAY: 'https://gateway.prd.aws.abraham.fun',
  },
  ...withImages(redirects),
}
