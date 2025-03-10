import { Query } from '@/domain/types/query'
import { useEffect, useState } from 'react'
import { Pagination as TypePagination } from '@/domain/types/pagination'
import { EmployeeEntity } from '@/domain/entities/employe.entity'
import { getEmployees } from '@/services/employee.service'

const useEmployeeData = () => {
  const [employees, setEmployees] = useState<EmployeeEntity[]>([])
  const [paginationState, setPaginationState] = useState<TypePagination>()

  const [query, setQuery] = useState<Query>({ page: 1, limit: 10 })

  const getData = () => {
    const { data, pagination } = getEmployees(query)
    setEmployees(data)
    setPaginationState(pagination)
  }

  useEffect(() => {
    getData()
  }, [query])

  return { employees, paginationState, query, setQuery }
}

export default useEmployeeData
