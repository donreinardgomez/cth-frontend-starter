import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { RuleSetRule } from 'webpack';
import { TEnvironmentMode } from './models';

export function getRuleSass(env: TEnvironmentMode): RuleSetRule {
  const devMode = env === 'development';

  return {
    test: /\.s[ac]ss$/,
    use: [
      // Creates `style` nodes from JS strings
      devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      {
        loader: 'css-loader',
        options: {
          sourceMap: devMode,
          // 0 => no loaders (default);
          // 1 => postcss-loader;
          // 2 => postcss-loader, sass-loader
          importLoaders: 2,
          modules: {
            localIdentName: '[local]___[hash:base64:5]',
            exportLocalsConvention: 'dashes',
          },
        },
      },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: devMode,
        },
      },
    ],
    exclude: /node_modules/,
  };
}
