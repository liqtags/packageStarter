"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  add: () => add,
  returnPackage: () => returnPackage,
  useCommander: () => useCommander
});
module.exports = __toCommonJS(src_exports);

// node_modules/@liqtags/eslint-config/package.json
var package_default = {
  name: "@repo/eslint-config",
  version: "0.0.0",
  private: true,
  files: [
    "library.js",
    "next.js",
    "react-internal.js"
  ],
  devDependencies: {
    "@vercel/style-guide": "^5.2.0",
    "eslint-config-turbo": "^2.0.0",
    "eslint-config-prettier": "^9.1.0",
    "eslint-plugin-only-warn": "^1.1.0",
    "@typescript-eslint/parser": "^7.1.0",
    "@typescript-eslint/eslint-plugin": "^7.1.0",
    typescript: "^5.3.3"
  }
};

// src/index.ts
var { program } = require("commander");
var returnPackage = () => {
  return package_default;
};
var add = (a, b) => a + b;
var commandOptions = [
  {
    name: "payer",
    description: "Specify the path to the secret key",
    command: "--payer <PATH_TO_SECRET>"
  },
  {
    name: "token_address",
    description: "Specify the token address",
    command: "--token_address <ADDRESS_TOKEN>"
  }
];
async function useCommander() {
  console.log("useCommander");
  program.version("0.0.1");
  commandOptions.forEach((option) => {
    program.option(option.command, option.description);
  });
  program.action((options) => {
    if (!options.payer) {
      console.error("Please specify the path to the secret key");
      process.exit(1);
    }
    console.log(options);
  });
  program.parse();
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  add,
  returnPackage,
  useCommander
});
