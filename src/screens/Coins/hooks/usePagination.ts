import { useMemo, useState } from 'react'
import { deepClone } from '@utils'

interface PaginationProps<T> {
  items: T[]
  itemsPerPage: number
}

interface PaginationResult<T> {
  currentPage: number
  totalPages: number
  paginatedItems: T[]
  goToPage: (page: number) => void
}

function usePagination<T>({ items, itemsPerPage }: PaginationProps<T>): PaginationResult<T> {
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(items.length / itemsPerPage)

  const paginatedItems = useMemo(
    () => deepClone(items).slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage),
    [items, itemsPerPage, currentPage]
  )

  const goToPage = (page: number) => {
    setCurrentPage(page)
  }

  return {
    currentPage,
    totalPages,
    paginatedItems,
    goToPage,
  }
}

export default usePagination
