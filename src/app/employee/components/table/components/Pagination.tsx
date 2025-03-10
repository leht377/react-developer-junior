import React from 'react'

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className='flex items-center justify-center space-x-4 mt-4'>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-3 py-1 border rounded-md ${
          currentPage === 1
            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
            : 'bg-white hover:bg-gray-100'
        }`}
      >
        ⬅ Anterior
      </button>

      <span className='text-gray-700 font-semibold'>
        Página {currentPage} de {totalPages}
      </span>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-3 py-1 border rounded-md ${
          currentPage === totalPages
            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
            : 'bg-white hover:bg-gray-100'
        }`}
      >
        Siguiente ➡
      </button>
    </div>
  )
}

export default Pagination
