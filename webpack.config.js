const path = require("path")

module.exports = {
  entry: path.resolve(__dirname, "./src/index.js"),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
    // alias: {
    //   react: path.resolve(__dirname, "./node_modules/react"),
    // },
  },
  experiments: {
    outputModule: true,
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "main.js",
    library: {
      type: "module",
    },
  },
}
