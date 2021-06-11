const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: ["babel-polyfill", path.resolve(__dirname, "./src/index.js")],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  output: {
    path: path.resolve(__dirname, "./public"),
    filename: "bundle.js",
    publicPath: "/",
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: path.resolve(__dirname, "./public"),
    hot: true,
    historyApiFallback: true,
  },
};
