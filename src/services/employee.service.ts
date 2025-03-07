import { EmployeeEntity } from "@/domain/entities/employe.entity"
import {employeesList } from "../data/employee"
import { EmployeMapper } from "@/utils/mappers/employe.mapper"

const getEmployee = (): EmployeeEntity[] => {
  const data = employeesList.data.slice(0, 10)
  const dataMapped = data.map((d) => EmployeMapper(d))
  return dataMapped
}

export { getEmployee }
