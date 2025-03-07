import { EmployeeEntity } from '@/domain/entities/employe.entity'

// import { Workshifts } from '@/domain/types/workshifts'
import { EmployeeAttributesMapper } from './employeeAttributes.mapper'
import { WorkshiftsMapper } from './workshifts.mapper'
import { AccesControl } from './accessControl.mapper'

export const EmployeMapper = (data: Record<string, unknown>): EmployeeEntity => {
  const { type, id, attributes, relationships } = data

  if (typeof type != 'string') throw new Error("El campo 'type' debe de ser un string")
  if (typeof id != 'number') throw new Error("El campo 'id' debe de ser un number")

  const attributesMapped = EmployeeAttributesMapper(attributes as Record<string, unknown>)

  // Validar relationships
  if (typeof relationships !== 'object' || relationships === null) {
    throw new Error("El campo 'relationships' debe ser un objeto válido.")
  }

  const { workshifts, accessControls } = relationships as Record<string, unknown>

  if (!Array.isArray(workshifts))
    throw new Error("El campo 'workshifts' de 'Employee' debe ser un array válido.")
  const workshiftsMapped = workshifts.map((w) => WorkshiftsMapper(w))

  if (!Array.isArray(accessControls))
    throw new Error("El campo 'accessControls' de 'Employee' debe ser un array válido.")
  const accessControlsMapped = accessControls.map((a) => AccesControl(a))

  return new EmployeeEntity(type, id, attributesMapped, {
    workshifts: workshiftsMapped,
    accessControls: accessControlsMapped
  })
}
