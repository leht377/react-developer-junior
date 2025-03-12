import { EmployeeEntity } from '@/domain/entities/employe.entity'

import React, { useEffect, useState } from 'react'
import RowBody from './components/RowBody'
import RowSkeleton from './components/RowSkeleton'
import ItemsPerPage from '../../../../components/ItemsPerPage'
import useSorting from './hooks/useSorting'
import { Pagination as TypePagination } from '@/domain/types/pagination'
import ModalHE from '../ModalHE'
import { useEmployeeContext } from '../../context/EmployeeContext'
import Pagination from '@/components/Pagination'
interface Props {
  data: EmployeeEntity[]
  pagination?: TypePagination
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

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [idseleccionado, setIdSeleccionado] = useState<number | null>(null)
  const { setEmployee } = useEmployeeContext()

  const onClickOption = (id: number) => {
    setIdSeleccionado(id)
    setIsModalOpen(true)
  }

  useEffect(() => {
    if (idseleccionado) {
      const employee = data.find((e) => e.id === idseleccionado)
      if (employee) setEmployee(employee)
    }
  }, [idseleccionado])

  return (
    <React.Fragment>
      <div className='flex flex-col gap-5 w-auto px-2 lg:px-20 overflow-hidden '>
        <div className='flex md:justify-between md:items-center mt-3 flex-col md:flex-row gap-8 justify-start items-start'>
          <ItemsPerPage onChange={onChangeItemsPerPage} selected={itemsPerPage} />
          {pagination && (
            <Pagination
              currentPage={pagination.page}
              totalPages={pagination.totalPages}
              onPageChange={onPageChange}
            />
          )}
        </div>

        <div className='min-w-64 overflow-x-auto rounded-lg shadow-sm '>
          <table className='w-full border border-gray-300'>
            <thead className='text-start'>
              <tr className='bg-blue-600 text-white'>
                <th className=' px-4 py-2'>
                  Nombre
                  <button onClick={() => sortData('firstName')}>
                    {sortConfig.firstName === 'asc' ? '🔼' : '🔽'}
                  </button>
                </th>
                <th className=' px-4 py-2'>Apellido</th>
                <th className=' px-4 py-2'>Correo Electrónico</th>
                <th className=' px-4 py-2'>Cargo</th>
                <th className=' px-4 py-2'>
                  Salario
                  <button onClick={() => sortData('salary')}>
                    {sortConfig.salary === 'asc' ? '🔼' : '🔽'}
                  </button>
                </th>
                <th className='px-4 py-2'>Opciones</th>
              </tr>
            </thead>
            <tbody>
              {isloading
                ? Array.from({ length: 8 }).map((_, i) => <RowSkeleton rows={6} key={i} />)
                : sortedData.map((emp) => (
                    <RowBody
                      id={emp.id}
                      charge={emp.attributes.charge}
                      email={emp.attributes.email}
                      firstName={emp.attributes.first_name}
                      lastName={emp.attributes.last_name}
                      salary={emp.attributes.salary}
                      key={emp.id}
                      onClickOption={onClickOption}
                    />
                  ))}
            </tbody>
          </table>
        </div>
        <div className='flex md:justify-between md:items-center mt-3 flex-col md:flex-row gap-8 justify-start items-start'>
          {/* <ItemsPerPage onChange={onChangeItemsPerPage} selected={itemsPerPage} /> */}
          {pagination && (
            <Pagination
              currentPage={pagination.page}
              totalPages={pagination.totalPages}
              onPageChange={onPageChange}
            />
          )}
        </div>
      </div>
      <ModalHE isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </React.Fragment>
  )
}

export default Table
// w-full max-h-[460px] min-w-2  flex justify-center items-start overflow-y-auto py-10
