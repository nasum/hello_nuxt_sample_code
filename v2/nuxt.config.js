import path from 'path'

module.exports = {
  srcDir: path.join(__dirname, "./frontend"),
  plugins: ['~/plugins/element.js'],
  build: {
    splitChunks: {
      layouts: true,
      name: true,
      runtimeChunk: true
    },
    extend(config, options) {
      // console.log(config)
      console.log('options', options)
    }
  }
}
