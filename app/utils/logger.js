// TODO: limit logger to dev mode only
/* eslint-disable no-console */

const warn = (...values) => console.warn(...values);
const error = (...values) => console.error(...values);
const info = (...values) => console.info(...values);
const log = (...values) => console.log(...values);
const group = (...values) => {
  console.group(...values);
  return () => console.groupEnd();
};
const groupEnd = (...values) => console.groupEnd(...values);

export default {
  warn,
  error,
  info,
  log,
  group,
  groupEnd
};
