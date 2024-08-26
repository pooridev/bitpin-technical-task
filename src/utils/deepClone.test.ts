import { deepClone } from './deepClone'

describe('deepClone', () => {
  it('should return a deep clone of a simple object', () => {
    const original = { a: 1, b: 'string' }
    const cloned = deepClone(original)

    expect(cloned).toEqual(original)
    expect(cloned).not.toBe(original)
  })

  it('should return a deep clone of a nested object', () => {
    const original = { a: 1, b: { c: 2, d: { e: 3 } } }
    const cloned = deepClone(original)

    expect(cloned).toEqual(original)
    expect(cloned.b).not.toBe(original.b)
    expect(cloned.b.d).not.toBe(original.b.d)
  })
})
