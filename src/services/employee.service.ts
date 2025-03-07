import { EmployeeEntity } from '@/domain/entities/employe.entity'
import { employeesList } from '../data/employee'
import { EmployeMapper } from '@/utils/mappers/employe.mapper'
import { generatePagination } from '@/utils/helpers/generatePagination.helper'
import { Pagination } from '@/domain/types/pagination'

const getEmployees = (
  page: number = 330,
  limit: number = 10
): { data: EmployeeEntity[]; pagination: Pagination } => {
  const data = employeesList.data.slice(0, 10)
  const dataMapped = data.map((d) => EmployeMapper(d))

  const pagination = generatePagination(employeesList.data, page, limit)

  return { data: dataMapped, pagination }
}

export { getEmployees }
