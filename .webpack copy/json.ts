import { RuleSetRule } from 'webpack';

export const getRuleJson = (): RuleSetRule => ({
  test: /\.json$/,
  type: 'javascript/auto',
  use: {
    loader: 'json-loader',
  },
  exclude: /node_modules/,
});
