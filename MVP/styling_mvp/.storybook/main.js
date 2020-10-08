module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: [
    // the addon-essentials is zero config and covers a lot, install separately for better control
    '@storybook/preset-create-react-app',
    '@storybook/addon-essentials',
    '@storybook/addon-links',
  ],
};
