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
  compiler: {
    styledComponents: true,
  },
  env: {
    EDEN_API_URL: 'https://api.eden.art',
  },
  ...withImages(redirects),

  // webpack(config) {
  //   return config
  // },

  webpack(config, { isServer }) {
    if (!isServer) {
      config.optimization.minimizer.forEach(plugin => {
        if (plugin.constructor.name === 'TerserPlugin') {
          plugin.options.terserOptions.compress.drop_console = false
        }
      })
    }
    return config
  },

  //extends: ['eslint:recommended', 'next'],
})
