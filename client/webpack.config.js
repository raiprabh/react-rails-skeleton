module.exports = {
  context: __dirname,
  entry: "./app/StartUp.js",
  output: {
    path: __dirname + "/../app/assets/javascripts",
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: "babel-loader", exclude: /node_modules/, query: {
        plugins: ['transform-runtime'],
        presets: ['es2015', 'stage-0', 'react'],
      } },
    ]
  },
};
