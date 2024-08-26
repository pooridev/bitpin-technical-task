import { pipe } from './pipe'

describe('pipe', () => {
  it('should apply functions in sequence', () => {
    const fn1 = (x: number) => x + 1
    const fn2 = (x: number) => x * 2
    const fn3 = (x: number) => x - 3

    const piped = pipe(fn1, fn2, fn3)
    const result = piped(5) // ((5 + 1) * 2) - 3 = 9

    expect(result).toBe(9)
  })

  it('should work with a single function', () => {
    const fn1 = (x: number) => x + 10

    const piped = pipe(fn1)
    const result = piped(5) // 5 + 10 = 15

    expect(result).toBe(15)
  })

  it('should work with no functions', () => {
    const piped = pipe<number>()
    const result = piped(5)

    expect(result).toBe(5)
  })

  it('should work with an empty input string', () => {
    const fn1 = (x: string) => x + 'a'
    const fn2 = (x: string) => x + 'b'

    const piped = pipe(fn1, fn2)
    const result = piped('') // "" + "a" -> "a" + "b" -> "ab"

    expect(result).toBe('ab')
  })
})
