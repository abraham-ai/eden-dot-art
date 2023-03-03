const withAntdLess = require('next-plugin-antd-less')
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

module.exports = withAntdLess({
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  // optional: you can modify antd less variables directly here
  // modifyVars: { '@primary-color': '#04f' },
  // Or better still you can specify a path to a file
  // lessVarsFilePath: './styles/variables.less',
  // optional
  // lessVarsFilePathAppendToEndOfContent: false,
  // optional https://github.com/webpack-contrib/css-loader#object
  // cssLoaderOptions: {},

  // Other Config Here...
  output: 'standalone',
  // compiler: {
  //   styledComponents: true,
  // },
  images: {
    domains: ['minio.aws.abraham.fun'],
  },
  env: {
    EDEN_API_URL: 'https://api.eden.art',
    NEXT_PUBLIC_ABRAHAM_GATEWAY: 'https://gateway.prd.aws.abraham.fun',
  },
  ...withImages(redirects),

  webpack(config) {
    return config
  },
  extends: ['eslint:recommended', 'next'],
})
