const path = require("path");

module.exports = {
  entry: {
    index: ["babel-polyfill", "./src/index.js"], //start process
    edit: ["babel-polyfill", "./src/edit.js"],
  },
  output: {
    filename: "[name]-bundle.js",
    path: path.resolve(__dirname, "public/scripts"),
  },
  module: {
    rules: [
      {
        test: /\.js$/, //before .js and afterfor $
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  devServer: {
    static: path.join(__dirname, "public/"),
    devMiddleware: {
      publicPath: "/scripts/",
    },
    port: 3000,
  },
  devtool: "source-map", // it converts babel code to our code in browser devtool
};
