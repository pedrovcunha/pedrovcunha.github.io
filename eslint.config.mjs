import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Add the Prettier plugin and config
  {
    plugins: ["prettier"],
    extends: ["eslint:recommended", "plugin:prettier/recommended"], // plugin:prettier/recommended adds the eslint-plugin-prettier and eslint-config-prettier
    rules: {
      "prettier/prettier": [
        "error",
        {
          semi: true,
          trailingComma: "es5",
          tabWidth: 4,
          useTabs: false,
          printWidth: 80,
          arrowParens: "always",
        },
      ],
      indent: ["warning", 4], // 4 space indentation
    },
  },
];

export default eslintConfig;
