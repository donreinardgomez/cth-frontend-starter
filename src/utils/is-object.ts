/* tslint:disable:no-any */
const objectToString = Object.prototype.toString;

/**
 * Check if a value is an object
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function isObject(value: any): value is object {
  const type = typeof value;

  return (
    value != null && // tslint:disable-line:triple-equals
    (type === 'object' || type === 'function') &&
    objectToString.call(value) !== '[object Array]'
  );
}
