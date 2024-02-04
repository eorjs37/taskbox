/** @type { import('@storybook/vue3').Preview } */

import { setup } from '@storybook/vue3';
import { createPinia } from 'pinia';
import '../src/index.css';

setup((app) => {
  app.use(createPinia());
});
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
