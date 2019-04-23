const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require("webpack");
const path = require("path");
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: {
    index: "./src/app.js",
    "index.min": "./src/app.js"
  },
  stats: { warnings: false }, // Hide warnings
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "scripts/[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          loaders: {
            'scss': [
              'vue-style-loader',
              'css-loader',
              'sass-loader'
            ],
            'sass': [
              'vue-style-loader',
              'css-loader',
              'sass-loader?indentedSyntax'
            ]
          }
        }
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "env",
                {
                  targets: {
                    browsers: [
                      "Chrome >= 52",
                      "FireFox >= 44",
                      "Safari >= 7",
                      "Explorer 11",
                      "last 4 Edge versions"
                    ]
                  },
                  useBuiltIns: true
                }
              ],
              "stage-2"
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              options: { importLoaders: 1 }
            },
            {
              loader: "postcss-loader",
              options: {
                ident: 'postcss',
                plugins: [
                  require('autoprefixer')({
                    'browsers': ['> 1%', 'last 2 versions']
                  }),
                ]
              }
            },
          ]
        })
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: "postcss-loader",
            options: {
              ident: 'postcss',
              plugins: [
                require('autoprefixer')({
                  'browsers': ['> 1%', 'last 2 versions']
                }),
              ]
            }
          },
          'sass-loader'
        ],
      },
      {
        test: /\.sass$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: "postcss-loader",
            options: {
              ident: 'postcss',
              plugins: [
                require('autoprefixer')({
                  'browsers': ['> 1%', 'last 2 versions']
                }),
              ]
            }
          },
          'sass-loader?indentedSyntax'
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
        use: [
          {
            loader: 'file-loader?name=./wp-content/themes/foto-theme/src/fonts/[name].[ext]'
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js"
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      throttle: "lodash.throttle"
    }),
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.bundle\.js$/,
      minimize: true,
      ecma: 8
    }),
    new webpack.LoaderOptionsPlugin({ minimize: true }),
    new ExtractTextPlugin("styles.css")
  ]
};
