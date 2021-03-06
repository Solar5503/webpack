const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: 'svg-inline-loader',
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.s[ca]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.m?jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              ['@babel/preset-react', { runtime: 'automatic' }],
            ],
          },
        },
      },
      { test: /\.tsx?$/, use: 'ts-loader' },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle-[contenthash].js',
    clean: true,
    assetModuleFilename: '[name][ext]',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
    }),
    new BundleAnalyzerPlugin(),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '...'],
  },
  devtool: 'source-map',
};
