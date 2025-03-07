import { scheduleType, Workshifts } from '@/domain/types/workshifts'
import { WorkshiftsDayMapper } from './workshiftDays.mapper'

export const WorkshiftsMapper = (workshift: Record<string, unknown>): Workshifts => {
  if (typeof workshift !== 'object' || workshift === null) {
    throw new Error("El campo 'workshifts' debe ser un objeto.")
  }

  const { type, id, attributes, relationships } = workshift

  if (typeof type !== 'string') throw new Error("El campo 'type' en workshift debe ser un string.")
  if (typeof id !== 'number') throw new Error("El campo 'id' en workshift debe ser un número.")
  if (typeof attributes !== 'object' || attributes === null) {
    throw new Error("El campo 'attributes' en workshift debe ser un objeto.")
  }

  const attributesWork =
  validateAtributes(attributes as Record<string,unknown>)

  const validatedRelationships =  validateRelationships(relationships as Record<string, unknown>)

  return {
    type,
    id,
    attributes: attributesWork,
    relationships:validatedRelationships
  }
}


const validateAtributes = (attributes: Record<string, unknown>):Workshifts["attributes"] => {
  const { name, schedule_type, maximun_weekly_hours, created_at, updated_at } = attributes
  if (typeof attributes !== 'object' || attributes === null) {
    throw new Error("El campo 'attributes' de  'workshifts' debe ser un objeto.")
  }

  if (typeof name !== 'string')
    throw new Error("El campo 'name'  de los atributos de workshift debe ser un string.")
  if (typeof created_at !== 'string')
    throw new Error("El campo 'created_at' de los atributos de workshift debe ser un string.")
  if (typeof updated_at !== 'string')
    throw new Error("El campo 'updated_at'  de los atributos de workshift debe ser un string.")
  if (typeof schedule_type !== 'string')
    throw new Error("El campo 'schedule_type' debe ser un string.")
  if (typeof maximun_weekly_hours !== 'number')
    throw new Error("El campo 'maximun_weekly_hours' debe ser un número.")

  return { name, schedule_type:schedule_type as scheduleType, maximun_weekly_hours, created_at: new Date(created_at), updated_at: new Date(updated_at) }
}

const validateRelationships = (relationships : Record<string, unknown>): Workshifts["relationships"] => {
  if (typeof relationships !== 'object' || relationships === null) {
    throw new Error("El campo 'relationships' en 'workshifts' debe ser un objeto.")
  }
  const { workshiftDays } = relationships

  if (!Array.isArray(workshiftDays)) {
    throw new Error("El campo 'workshiftDays' en 'workshifts' debe ser un Array.")
  }

  const workshiftDaysList = workshiftDays.map((w) => WorkshiftsDayMapper(w))

  return { 
   workshiftDays:workshiftDaysList 

  }
}
