// src/hooks/usePagination.ts
import { useState } from 'react'

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

const deepClone = <T extends object>(object: T) => JSON.parse(JSON.stringify(object)) as T

function usePagination<T>({ items, itemsPerPage }: PaginationProps<T>): PaginationResult<T> {
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(items.length / itemsPerPage)

  const paginatedItems = deepClone(items).slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

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
