import { Temporal } from "@js-temporal/polyfill";

export function hello() {
  return `Hello! The current date is ${Temporal.Now.plainDateISO()}`;
}
