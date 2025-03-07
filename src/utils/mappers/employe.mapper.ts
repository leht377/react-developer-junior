import { EmployeeEntity } from '@/domain/entities/employe.entity'
import { AccessControls } from '@/domain/types/accessControl'

import { Workshifts } from '@/domain/types/workshifts'
import { EmployeeAttributesMapper } from './employeeAttributes.mapper'

export const EmployeMapper = (data: Record<string, unknown>): EmployeeEntity => {
  const { type, id, attributes, relationships } = data

  if (typeof type != 'string') throw new Error("El campo 'type' debe de ser un string")
  if (typeof id != 'number') throw new Error("El campo 'id' debe de ser un number")

  const attributesMapped = EmployeeAttributesMapper(attributes as Record<string, unknown>)

  // Validar relationships
  if (typeof relationships !== 'object' || relationships === null) {
    throw new Error("El campo 'relationships' debe ser un objeto válido.")
  }

  // Extraer relaciones con validación
  const { workshifts, accessControls } = relationships as {
    workshifts?: Workshifts[]
    accessControls?: AccessControls[]
  }

  return new EmployeeEntity(type, id, attributesMapped, {
    workshifts: workshifts || [],
    accessControls: accessControls || []
  })

}
