require("babel-polyfill");
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: ["babel-polyfill", "./src/main.js"],
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        use: 'html-loader'
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.sass$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader?indentedSyntax'
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this necessary.
            'scss': [
              'vue-style-loader',
              'css-loader',
              'sass-loader'
            ],
            'sass': [
              'vue-style-loader',
              'css-loader',
              'sass-loader?indentedSyntax'
            ],
            'js': 'babel-loader'
          },
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      }
      // {
      //   test: /\.tsx?$/,
      //   use: [
      //     {
      //       loader: "babel-loader",
      //       options: {
      //         cacheDirectory: true,
      //         presets: [["babel/preset-env", { targets: { node: "8" } }]]
      //       }
      //     },
      //     "ts-loader"
      //   ],
      //   exclude: /node_modules/
      // }
    ]
  },
  resolve: {
    extensions: ['*', '.ts','.js', '.vue', '.json'],
    // alias: {
    //   '@': path.resolve(__dirname, 'src')
    // }
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    // extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    // historyApiFallback: true,
    noInfo: true,
    // overlay: true,
    host: '0.0.0.0',
    port: 8091
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
