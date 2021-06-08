import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';
import webpack from 'webpack';
import { getBaseConfig } from './webpack.base.config';

const buildDir = path.join(__dirname, 'build');
const baseConfig = getBaseConfig('production');

const config: webpack.Configuration = {
  ...baseConfig,
  mode: 'production',
  output: {
    path: buildDir,
    filename: '[name].[contenthash].js',
    publicPath: '',
  },
  plugins: baseConfig?.plugins?.concat([
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      linkType: 'text/css',
      filename: '[name].[contenthash].css',
    }),
  ]),
};

export default config;
