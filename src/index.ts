// export const log = (...args: unknown[]): void => {
//   // eslint-disable-next-line no-console -- logger
//   console.log("LOGGER: ", ...args);
// };

export const add = (a: number, b: number): number => a + b;

// import { add } from "@liqtags/thingtest";

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

console.log(someTypedFunction({a: 1, b: '2'}));