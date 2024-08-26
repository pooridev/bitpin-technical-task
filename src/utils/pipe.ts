export const pipe = <T>(...fns: Array<(value: T) => T>) => {
  return (input: T): T => {
    return fns.reduce((acc, fn) => fn(acc), input)
  }
}
