import { isObject } from './is-object';

export function updateState<T extends {}>(currentState: T, update: RecursivePartial<T>): T {
  if (!update) {
    return currentState;
  }

  if (!currentState) {
    return update as unknown as T;
  }

  const res = { ...currentState };

  Object.keys(update).forEach((key) => {
    const val = update[key];
    res[key] = isObject(val) ? updateState(res[key], val) : (res[key] = val);
  });

  return res;
}
