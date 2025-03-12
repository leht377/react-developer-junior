'use client'

import React, { useState } from 'react'
import Table from './components/table/Table'
import SearchInput from '@/components/SearchInput'
import useEmployeeData from './hooks/useEmployeeData'
import useDebouncedSearch from '@/hooks/useDebouncedSearch'
import Modal from '@/components/Modal'

const Employee = () => {
  const { employees, paginationState, query, setQuery } = useEmployeeData()

  const onSearch = (search: string) => {
    setQuery({ ...query, search: { charge: search, email: search, name: search } })
  }

  const { setSearchTerm } = useDebouncedSearch({
    delay: 500,
    onDebouncedChange: onSearch
  })

  const onPageChange = (page: number) => {
    setQuery({ ...query, page })
  }

  const onChangeItemsPerPage = (value: number) => {
    setQuery({ ...query, limit: value })
  }

  return (
    <main className='flex justify-top items-center w-full h-auto flex-col gap-6 py-4'>
      <div className='max-w-7xl w-full flex flex-col gap-2'>
        <div className='px-2 lg:px-20 flex justify-end'>
          <SearchInput onSearch={setSearchTerm} placeholder='Buscar por correo email o nombre' />
        </div>

        <Table
          data={employees}
          pagination={paginationState}
          onPageChange={onPageChange}
          onChangeItemsPerPage={onChangeItemsPerPage}
          itemsPerPage={query.limit}
          // isloading={true}
        />
      </div>
    </main>
  )
}

export default Employee
