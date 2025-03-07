import { EmployeeEntity } from '@/domain/entities/employe.entity'
import { employeesList } from '../data/employee'
import { EmployeMapper } from '@/utils/mappers/employe.mapper'
import { generatePagination } from '@/utils/helpers/generatePagination.helper'
import { Pagination } from '@/domain/types/pagination'

const getEmployees = (
  page: number = 1,
  limit: number = 10
): { data: EmployeeEntity[]; pagination: Pagination } => {
  const pagination = generatePagination(employeesList.data, page, limit)

  const startIndex = (pagination.page - 1) * pagination.limit; 
  const endIndex = startIndex + pagination.limit; 

  const data = employeesList.data.slice(startIndex, endIndex)
  const dataMapped = data.map((d) => EmployeMapper(d))


  return { data: dataMapped, pagination }
}

export { getEmployees }
