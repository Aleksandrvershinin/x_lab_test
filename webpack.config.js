const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


const path = require("path");
const outPathBuild = './dist/'
module.exports = (env) => ({
  entry: [
    'babel-polyfill',
    path.resolve(__dirname, "src/index.js"),
  ],
  output: {
    filename: 'main.[contenthash].js',
    path: path.resolve(__dirname, outPathBuild),
    publicPath: '/',
    clean: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '']
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.([tj]s|[tj]sx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            only: ["./src"],
            presets: ["@babel/preset-env", "@babel/preset-typescript", "@babel/preset-react"],
            plugins: ["@babel/plugin-syntax-dynamic-import", "@loadable/babel-plugin"]
          }
        }
      },
      {
        test: /\.(s[ac]ss|css)$/i,
        exclude: /node_modules/,
        use: [
          env.prod ? MiniCssExtractPlugin.loader : "style-loader",
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: {
                mode: (resourcePath) => {
                  if (/global.(s[ac]ss|css)$/i.test(resourcePath)) {
                    return "global";
                  }
                  return "local";
                },
                localIdentName: "[local]--[hash:base64:5]",
              },
            },
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      browsers: 'last 2 versions',
                      autoprefixer: { grid: true }
                    },
                  ],
                ],
              },
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            }
          },
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                path.resolve(__dirname, './src/assets/style/function.scss')
              ]
            },
          },
        ],
      },
      {
        test: /\.(ttf|woff|woff2)$/i,
        type: 'asset',
        generator: {
          filename: 'fonts/[name][hash][ext][query]'
        }
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        exclude: /node_modules/,
        type: 'asset',
        generator: {
          filename: 'images/[name][hash][ext][query]'
        }
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      // favicon: './src/assets/img/favicon.ico'
    }),
    new MiniCssExtractPlugin({
      filename: 'main.[contenthash].css',
    }),
  ],
  devServer: {
    hot: true,
    historyApiFallback: true,
  },
})