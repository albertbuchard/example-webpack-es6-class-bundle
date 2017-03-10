// @flow

// import path from 'path'
// import webpack from 'webpack'

const libraryName = 'ebjs'
const outputFile = `${libraryName}.js`
// const plugins = [
//   new webpack.optimize.OccurrenceOrderPlugin(),
// ]
// const prodPlugins = plugins.concat(new webpack.optimize.UglifyJsPlugin())
// not really working
export default {
  entry: './index.js',
  target: 'web',
  // entry: './index.js',
  devtool: 'source-map',
  output: {
    path: `${__dirname}/lib`,
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  module: {
    loaders: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
      },
    ],
  },
}
