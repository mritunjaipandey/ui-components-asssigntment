import type { Preview } from "@storybook/react";
import "../src/index.css"; // 👈 apna TailwindCSS entry point (yaha global styles import kro)

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    layout: "centered", // 👈 sbhi stories by default center me dikhegi
  },
};

export default preview;
