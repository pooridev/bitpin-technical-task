// Not the most efficent solution.
export const deepClone = <T extends object>(object: T) => JSON.parse(JSON.stringify(object)) as T
