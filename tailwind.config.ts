import forms from "@tailwindcss/forms";

import { withUt } from "uploadthing/tw";

export default withUt({
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./icons/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./node_modules/react-tailwindcss-select/dist/index.esm.js",
  ],
  plugins: [forms],
});
