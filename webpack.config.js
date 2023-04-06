const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackLiveReload = require('html-webpack-live-reload-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: { main: './src/pages/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: '',
  },
  mode: 'development', // добавили режим разработчика

  devServer: {
    //static: path.resolve(__dirname, './dist'), // путь, куда "смотрит" режим разработчика
    static: './',
    open: true,
    compress: true,
    port: 8080,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: '/node_modules/',
      },

      {
        // регулярное выражение, которое ищет все файлы с такими расширениями
        test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
        type: 'asset/resource',
      },

      {
        // применять это правило только к CSS-файлам
        // test: /\.s[ac]ss$/i,
        test: /\.scss$/,
        // при обработке этих файлов нужно использовать
        // MiniCssExtractPlugin.loader и css-loader
        use: [
          // 'style-loader',
          // 'css-loader',
          // 'sass-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            // loader: 'css-loader',
            // loader: 'sass-loader',
            // options: {
            // 	importLoaders: 1,
            // },
            loader: 'sass-loader',
            options: {
              // implementation: require('sass'),
              // esModule: false,
            },
          },

          'postcss-loader',
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // путь к файлу index.html
    }),
    new HtmlWebpackLiveReload(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
  ],
};
