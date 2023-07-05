/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ["../src/pages/**/*.mdx", "../src/stories/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  core: {
    builder: "@storybook/builder-vite",
  },
  features: {
    "storyStoreV7": true
  },
  viteFinal: async (config) => {
    if (config.isProduction) {
      config.base = "/tractic-design-system/";
    }

    return config
  }
};
export default config;
