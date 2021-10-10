const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {

  mode: 'development',
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: "bundle",
          type: "css/mini-extract",
          // For webpack@4
          // test: /\.css$/,
          chunks: "all",
          enforce: true,
        },
      },
    },
  },

  
  module: {
    
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          minimize: false
        }
      },

      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {

          filename: 'static/[name][ext][query]',
 
        }


      },

      {
        test: /favicon\.png$/,
        type: 'asset/resource',
        generator: {

          filename: '[name][ext][query]',
 
        }
      },
      

      {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {

                  filename: 'static/fonts/[name][ext][query]',
         
                }
              },

      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {loader:MiniCssExtractPlugin.loader},
          "css-loader",
          {loader: "sass-loader",
          options: {
            sourceMap: true,
            sassOptions: {
                // https://github.com/sass/node-sass#outputstyle
                outputStyle: 'expanded'
            }
        }
        },
        ],
      }
    ]
  },


  entry: {

    index: './src/index.js',

    

  },
  // devtool: 'inline-source-map',
  devtool: false,
  devServer: {

    static: './dist',
    port: 3001

  },

  plugins: [

    new HtmlWebpackPlugin({

      
      template: './src/index.html',
      minify: false,
      // favicon: './src/favicon.ico'

    }),

    new MiniCssExtractPlugin(
      {filename: '[name].css'}
    )

  ],


  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '/',
    

  },
  
};