import { WorkshiftDays } from '@/domain/types/workshifts'

export const WorkshiftsDayMapper = (workshiftDay: Record<string, unknown>): WorkshiftDays => {
  if (typeof workshiftDay !== 'object' || workshiftDay === null) {
    throw new Error("El campo 'relationships' en 'WorkshiftDays' debe ser un objeto.")
  }

  const { type, id, attributes } = workshiftDay
  if (typeof type !== 'string') throw new Error("El campo 'type' WorkshiftDays debe ser un string.")
  if (typeof id !== 'number') throw new Error("El campo 'id' de WorkshiftDays debe ser un number.")

  const attributesWorshifDay = validateAttributes(attributes as Record<string, unknown>)

  return {
    type,
    id,
    attributes: attributesWorshifDay
  }
}

const validateAttributes = (attributes: Record<string, unknown>): WorkshiftDays['attributes'] => {
  if (typeof attributes !== 'object' || attributes === null) {
    throw new Error("El campo 'attributes' en 'WorkshiftDays' debe ser un objeto.")
  }

  const {
    day,
    start_at,
    finished_at,
    break_time_start_at,
    break_time_finished_at,
    created_at,
    updated_at
  } = attributes

  if (typeof day !== 'string')
    throw new Error("El campo 'day' de los atributos de WorkshiftDays debe ser un string.")
  if (typeof start_at !== 'string')
    throw new Error("El campo 'start_at' de los atributos de WorkshiftDays debe ser un string.")
  if (typeof finished_at !== 'string')
    throw new Error("El campo 'finished_at' de los atributos de WorkshiftDays debe ser un string.")
  if (typeof break_time_start_at !== 'string')
    throw new Error(
      "El campo 'break_time_start_at' de los atributos de WorkshiftDays debe ser un string."
    )
  if (typeof break_time_finished_at !== 'string')
    throw new Error(
      "El campo 'break_time_finished_at' de los atributos de WorkshiftDays debe ser un string."
    )
  if (typeof created_at !== 'string')
    throw new Error("El campo 'created_at' de los atributos de WorkshiftDays debe ser un string.")
  if (typeof updated_at !== 'string')
    throw new Error("El campo 'updated_at' de los atributos de WorkshiftDays debe ser un string.")

  return {
    day,
    break_time_finished_at,
    break_time_start_at,
    created_at: new Date(created_at),
    finished_at,
    start_at,
    updated_at: new Date(updated_at)
  }
}
