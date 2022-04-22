import { importObject } from "./import-object.test";

// Modify typeCheck to return a `Type` as we have specified below
export function typeCheck(source: string) : Type {
  return "none";
}

// Modify run to use `importObject` (imported above) to use for printing
export async function run(source: string) {
  return;
}

type Type =
  | "int"
  | "bool"
  | "none"
  | { tag: "object", class: string }

export const NUM : Type = "int";
export const BOOL : Type = "bool";
export const NONE : Type = "none";
export function CLASS(name : string) : Type { 
  return { tag: "object", class: name }
};
