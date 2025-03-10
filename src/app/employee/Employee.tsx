'use client'

import React from 'react'
import Table from './components/table/Table'
import SearchInput from '@/components/SearchInput'
import useEmployeeData from './hooks/useEmployeeData'

const Employee = () => {
  const { employees, paginationState, query, setQuery } = useEmployeeData()

  const onPageChange = (page: number) => {
    setQuery({ ...query, page })
  }

  const onSearch = (search: string) => {
    setQuery({ ...query, search: { charge: search, email: search, name: search } })
  }

  const onChangeItemsPerPage = (value: number) => {
    setQuery({ ...query, limit: value })
  }

  return (
    <main className='flex justify-top items-center w-full h-auto  flex-col gap-6 py-4 '>
      <div className='max-w-7xl w-7xl flex flex-col gap-2'>
        <div>
          <SearchInput onSearch={onSearch} placeholder='Buscar por correo email o nombre' />
        </div>
        {paginationState && (
          <Table
            data={employees}
            pagination={paginationState}
            onPageChange={onPageChange}
            onChangeItemsPerPage={onChangeItemsPerPage}
            itemsPerPage={query.limit}
          />
        )}
      </div>
    </main>
  )
}

export default Employee
