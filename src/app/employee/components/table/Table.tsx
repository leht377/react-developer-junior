import { EmployeeEntity } from '@/domain/entities/employe.entity'

import React, { useEffect, useState } from 'react'
import RowBody from './components/RowBody'
import RowSkeleton from './components/RowSkeleton'
import Pagination from './components/Pagination'
import ItemsPerPage from './components/ItemsPerPage'
import useSorting from './hooks/useSorting'
import { Pagination as TypePagination } from '@/domain/types/pagination'
interface Props {
  data: EmployeeEntity[]
  pagination: TypePagination
  isloading?: boolean
  itemsPerPage: number
  onPageChange: (page: number) => void
  onChangeItemsPerPage: (value: number) => void
}

const Table: React.FC<Props> = ({
  data,
  isloading = false,
  pagination,
  onPageChange,
  onChangeItemsPerPage,
  itemsPerPage
}) => {
  const { data: sortedData, sortConfig, sortData } = useSorting(data)

  return (
    <div className='flex flex-col gap-5 '>
      <div className='flex justify-between items-center'>
        <ItemsPerPage onChange={onChangeItemsPerPage} selected={itemsPerPage} />
        <Pagination
          currentPage={pagination.page}
          totalPages={pagination.totalPages}
          onPageChange={onPageChange}
        />
      </div>
      <div className='w-full max-h-[450px] flex justify-center items-start overflow-y-auto'>
        <table className='w-full border-collapse border border-gray-300 overflow-hidden '>
          <thead>
            <tr className='bg-gray-200 text-gray-700 top-0 '>
              <th className='border border-gray-300 px-4 py-2'>
                Nombre
                <button onClick={() => sortData('firstName')}>
                  {' '}
                  {sortConfig.firstName === 'asc' ? '🔼' : '🔽'}{' '}
                </button>
              </th>
              <th className='border border-gray-300 px-4 py-2'>Apellido</th>
              <th className='border border-gray-300 px-4 py-2'>Correo Electrónico</th>
              <th className='border border-gray-300 px-4 py-2'>Cargo</th>
              <th className='border border-gray-300 px-4 py-2'>
                Salario{' '}
                <button onClick={() => sortData('salary')}>
                  {' '}
                  {sortConfig.salary === 'asc' ? '🔼' : '🔽'}{' '}
                </button>
              </th>
              <th className='border border-gray-300 px-4 py-2'>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {isloading ? (
              <RowSkeleton rows={6} />
            ) : (
              sortedData.map((emp) => (
                <RowBody
                  id={emp.id}
                  charge={emp.attributes.charge}
                  email={emp.attributes.email}
                  firstName={emp.attributes.first_name}
                  lastName={emp.attributes.last_name}
                  salary={emp.attributes.salary}
                  key={emp.id}
                />
              ))
            )}
          </tbody>
        </table>
      </div>
      {/* <div className='flex justify-end items-center'>
        <Pagination
          currentPage={pagination.page}
          totalPages={pagination.totalPages}
          onPageChange={onPageChange}
        />
      </div> */}
    </div>
  )
}

export default Table
