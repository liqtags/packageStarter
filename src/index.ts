const { program } = require("commander");

import thing from "@liqtags/eslint-config/package.json";

export const returnPackage = () => {
  return thing;
}

export const add = (a: number, b: number): number => a + b;

interface TypedObject {
  // some comment
  a: number;
  // some comment
  b: string;
}

/**
 * 
 * @param obj 
 * @type TypedObject
 * @returns 
 */
async function someTypedFunction(obj: TypedObject) {
  return obj;
}

let commandOptions = [
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
]

export async function useCommander() {
  console.log("useCommander");

  program.version("0.0.1");
  commandOptions.forEach((option) => {
    program.option(option.command, option.description);
  });
  program.action((options: any) => {
    if (!options.payer) {
      console.error("Please specify the path to the secret key");
      process.exit(1);
    }
    console.log(options);
  })
  program.parse();
}