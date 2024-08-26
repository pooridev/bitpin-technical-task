import { act, renderHook } from '@testing-library/react'

import usePagination from './usePagination'

vi.mock('@utils', () => ({
  deepClone: vi.fn(items => JSON.parse(JSON.stringify(items))),
}))

describe('usePagination', () => {
  const items = Array.from({ length: 10 }, (_, i) => i + 1) // [1, 2, 3, ..., 10]

  it('should initialize with correct values', () => {
    const { result } = renderHook(() => usePagination({ items, itemsPerPage: 3 }))

    expect(result.current.currentPage).toBe(1)
    expect(result.current.totalPages).toBe(4)
    expect(result.current.paginatedItems).toEqual([1, 2, 3])
  })

  it('should go to the specified page', () => {
    const { result } = renderHook(() => usePagination({ items, itemsPerPage: 3 }))

    act(() => {
      result.current.goToPage(2)
    })

    expect(result.current.currentPage).toBe(2)
    expect(result.current.paginatedItems).toEqual([4, 5, 6])
  })

  it('should handle the last page correctly', () => {
    const { result } = renderHook(() => usePagination({ items, itemsPerPage: 3 }))

    act(() => {
      result.current.goToPage(4)
    })

    expect(result.current.currentPage).toBe(4)
    expect(result.current.paginatedItems).toEqual([10])
  })

  it('should handle an empty items array', () => {
    const { result } = renderHook(() => usePagination({ items: [], itemsPerPage: 3 }))

    expect(result.current.currentPage).toBe(1)
    expect(result.current.totalPages).toBe(0)
    expect(result.current.paginatedItems).toEqual([])
  })

  it('should not go to an invalid page', () => {
    const { result } = renderHook(() => usePagination({ items, itemsPerPage: 3 }))

    result.current.goToPage(5)

    expect(result.current.currentPage).toBe(1)
    expect(result.current.paginatedItems).toEqual([1, 2, 3])
  })
})
