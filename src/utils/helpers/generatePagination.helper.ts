import { Pagination } from '@/domain/types/pagination'

const generatePagination = (data: unknown[], currentPage: number, limit: number): Pagination => {
  const total = data.length

  const safeLimit = Math.max(1, limit)
  const totalPages = Math.max(1, Math.ceil(total / safeLimit))

  const safecurrentPage = Math.min(Math.max(1, currentPage), totalPages)

  const nextPage = safecurrentPage === totalPages ? null : safecurrentPage + 1
  const prevPage = safecurrentPage === 1 ? null : safecurrentPage - 1

  const hasNextPage = nextPage ? true : false
  const hasPrevPage = prevPage ? true : false
  return {
    hasNextPage,
    hasPrevPage,
    limit: safeLimit,
    nextPage,
    page: safecurrentPage,
    prevPage,
    total,
    totalPages
  }
}

export { generatePagination }
