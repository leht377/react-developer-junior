import { EmployeeEntity } from '@/domain/entities/employe.entity'

import { EmployeMapper } from '@/utils/mappers/employe.mapper'
import { generatePagination } from '@/utils/helpers/generatePagination.helper'
import { Pagination } from '@/domain/types/pagination'
import { Query } from '@/domain/types/query'
import response from '../data/employess.json'

const getEmployees = (query: Query): { data: EmployeeEntity[]; pagination: Pagination } => {
  const { page, limit, orderBy, order, search } = query
  let filteredData = response.data as any

  if (search) {
    filteredData = filteredData.filter((employee: any) => {
      return (
        (search.name
          ? employee.attributes.first_name.toLowerCase().includes(search.name.toLowerCase())
          : true) ||
        (search.email
          ? employee.attributes.email.toLowerCase().includes(search.email.toLowerCase())
          : true) ||
        (search.charge
          ? employee.attributes.charge.toLowerCase().includes(search.charge.toLowerCase())
          : true)
      )
    })
  }

  if (orderBy) {
    filteredData.sort((a: any, b: any) => {
      if (orderBy === 'salary') {
        return order === 'desc'
          ? b.attributes.salary - a.attributes.salary
          : a.attributes.salary - b.attributes.salary
      }
      if (orderBy === 'name') {
        return order === 'desc'
          ? b.attributes.first_name.localeCompare(a.attributes.first_name)
          : a.attributes.first_name.localeCompare(b.attributes.first_name)
      }
      return 0
    })
  }

  const pagination = generatePagination(filteredData, Number(page), Number(limit))
  const startIndex = (pagination.page - 1) * pagination.limit
  const endIndex = startIndex + pagination.limit

  const datafiltered = filteredData.slice(startIndex, endIndex).map((d: any) => EmployeMapper(d))

  return { data: datafiltered, pagination }
}

export { getEmployees }
