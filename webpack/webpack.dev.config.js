const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
// const HandleBarsLoader = require("handlebars-loader")

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "",
  },
  mode: "development",
  devServer: {
    port: 3001,
    static: {
      directory: path.resolve(__dirname, "./dist")
    },
    devMiddleware: {
      index: 'index.html',
      writeToDisk: true
    }
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 3 * 1024, // 3kb
          },
        },
      },
      {
        test: /\.txt/,
        type: "asset/source",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: "/node_modules/",
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env"],
            plugins: ["@babel/plugin-proposal-class-properties"]
          }
        }
      },{

        test:/\.hbs$/,
        use:['handlebars-loader']
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title:"Hello world",
      template:"src/index.hbs",
      description:"dev mode html",
    })
  ]
};
