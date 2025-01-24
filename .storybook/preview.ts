import type { Preview } from "@storybook/react";
//import "../src/index.css"

const preview: Preview = {
  parameters: {
    actions: {
      // больше не нужно argTypesRegex
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;