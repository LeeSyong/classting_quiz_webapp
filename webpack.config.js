const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

module.exports = () => {
  const isDevelopment = process.env.NODE_ENV !== "production";

  return {
    mode: isDevelopment ? "development" : "production",
    devtool: isDevelopment ? "eval-source-map" : "source-map",
    entry: "./src/index.js",
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "./dist"),
      clean: true,
    },
    resolve: {
      extensions: [".js", ".jsx"],
    },
    devServer: {
      static: path.resolve(__dirname, "./dist"),
      open: true,
      compress: true,
      hot: true,
      port: 3000,
      historyApiFallback: true,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          include: path.resolve(__dirname, "./src"),
          exclude: /(node_modules)|(dist)/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        },
        {
          test: /\.(png|jpg)$/,
          use: ["file-loader"],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        favicon: false,
        template: path.resolve(__dirname, "./public/index.html"),
        minify: true,
      }),
      new CleanWebpackPlugin(),
    ],
  };
};
