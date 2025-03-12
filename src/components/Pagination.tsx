import React from 'react'
// import { Button } from "@/components/ui/button";
// import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  isloading?: boolean
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  isloading
}) => {
  return (
    <div className='flex items-center justify-center space-x-2 '>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1 || isloading}
        className='flex items-center gap-2 disabled:opacity-50 cursor-pointer shadow-sm px-2 py-1 rounded-sm bg-slate-100 font-medium text-gray-900 '
      >
        Anterior
      </button>

      <span className='text-gray-700 font-medium text-sm'>
        Página <span className='font-semibold'>{currentPage}</span> de {totalPages}
      </span>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages || isloading}
        className='flex items-center gap-2 disabled:opacity-50 cursor-pointer shadow-sm px-2 py-1 rounded-sm bg-slate-100 font-medium text-gray-900'
      >
        Siguiente
      </button>
    </div>
  )
}

export default Pagination
