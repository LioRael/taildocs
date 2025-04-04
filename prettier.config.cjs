// @ts-check

/** @type {import("prettier").Config} */
module.exports = {
  endOfLine: "lf",
  semi: false,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  importOrderTypeScriptVersion: "5.8.2",
  importOrder: [
    "<BUILTIN_MODULES>",
    "",
    "<THIRD_PARTY_MODULES>",
    "",
    "^(@/components|@/lib)(/.*)$",
    "",
    "^[.]",
    "",
    "<TYPES>",
    "",
    "^(?!.*[.]css$)[./].*$",
    ".css$",
  ],
  plugins: [
    "prettier-plugin-tailwindcss",
    "prettier-plugin-packagejson",
    "@ianvs/prettier-plugin-sort-imports",
  ],
  tailwindFunctions: ["tv", "cn", "tw"],
}
