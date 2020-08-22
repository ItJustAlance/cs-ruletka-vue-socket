const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const IfPlugin = require('if-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;

const src = path.resolve(__dirname, 'src/');
const dist = path.resolve(__dirname, 'dist/');

const ico = path.resolve(src, 'ico/');
const staticPath = path.resolve(src, 'static/');

const pug = path.resolve(src, 'pug/');
const pugGlobals = path.resolve(pug, 'data/global.json');

const createLintingRule = () => ({
  test: /\.(js|vue)$/,
  loader: 'eslint-loader',
  enforce: 'pre',
  include: [path.resolve('src')],
  options: {
    formatter: require('eslint-friendly-formatter'),
    emitWarning: false,
  }
})

module.exports = env => ({
  context: src,
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': src,
      'Js': path.resolve(src, 'js/'),
      'vue$': 'vue/dist/vue.esm.js',
    }
  },
  entry: {
    app: './',
    assets: './assets.js'
  },
  output: {
    filename: './js/[name].js',
    path: dist
  },
  module: {
    rules: [
      ...[createLintingRule()],
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.styl$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '/'
            }
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: [autoprefixer]
            }
          },
          {
            loader: 'stylus-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg|woff|eot|ttf|woff2)$/,
        exclude: ico,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: '[path][name].[ext]'
          }
        }]
      },
      {
        test: /\.svg$/,
        include: ico,
        use: ['svg-sprite-loader', 'svgo-loader']
      },
      {
        test: /\.pug$/,
        include: pug,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path]/[name].html',
              context: pug
            }
          },
          'extract-loader',
          {
            loader: 'html-loader',
            options: {
              attrs: ['']
            }
          },
          {
            loader: 'pug-html-loader',
            options: {
              pretty: true,
              exports: false,
              doctype: 'html',
              basedir: pug,
              data: {
                data: () => JSON.parse(fs.readFileSync(pugGlobals, 'utf8'))
              },
              filters: {
                // filter for include json data as empty string
                'json-watch': () => ''
              }
            }
          }
        ]
      },
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              transformAssetUrls: {
                video: '',
                source: '',
                img: '',
                image: ''
              }
            }
          }
        ]
      },
    ]
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true
      }),
      new OptimizeCSSAssetsPlugin({}),
      new ImageminPlugin({
        test: /\.(gif|png|jpe?g)$/
      })
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './css/app.css'
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new CopyWebpackPlugin([{
      from: staticPath,
      to: dist
    }]),
    new CleanWebpackPlugin(dist),
    new IfPlugin(
      env === 'server',
      new BrowserSyncPlugin({
        host: 'localhost',
        port: 3000,
        ghostMode: false,
        server: {
          baseDir: dist
        }
      }, {
        injectCss: true
      })
    )
  ]
});