const path = require("path")

module.exports = {
  entry: path.resolve(__dirname, "./src/index.js"),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
    alias: {
      react: path.resolve("./node_modules/react"),
    },
  },
  experiments: {
    outputModule: true,
  },
  externalsType: "module",
  externals: {
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "react",
      root: "React",
      module: "react",
    },
  },
  output: {
    filename: "main.mjs",
    path: `${__dirname}/dist`,
    library: {
      type: "module",
    },
    chunkFormat: "module",
  },
}