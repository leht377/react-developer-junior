import { AccessControls } from '@/domain/types/accessControl'

export const AccesControl = (accessControl: Record<string, unknown>): AccessControls => {
  if (typeof accessControl !== 'object' || accessControl === null) {
    throw new Error("El campo 'accessControl' en 'WorkshiftDays' debe ser un objeto.")
  }

  const { type, id, attributes } = accessControl
  if (typeof type !== 'string') throw new Error("El campo 'type' AccesControl debe ser un string.")
  if (typeof id !== 'number') throw new Error("El campo 'id' de AccesControl debe ser un number.")

  const attributesMapped = validateAttributes(attributes as Record<string, unknown>)

  return {
    id,
    type,
    attributes: attributesMapped
  }
}

const validateAttributes = (attributes: Record<string, unknown>): AccessControls['attributes'] => {
  if (typeof attributes !== 'object' || attributes === null) {
    throw new Error("El campo 'attributes' en 'WorkshiftDays' debe ser un objeto.")
  }

  const { check_in, check_out, created_at, updated_at } = attributes

  if (typeof check_in !== 'string')
    throw new Error("El campo 'check_in' de los atributos de AccessControls debe ser un string.")
  if (typeof check_out !== 'string')
    throw new Error("El campo 'check_out' de los atributos de AccessControls debe ser un string.")
  if (typeof created_at !== 'string')
    throw new Error(
      "El campo 'fincreated_atished_at' de los atributos de AccessControls debe ser un string."
    )
  if (typeof updated_at !== 'string')
    throw new Error("El campo 'updated_at' de los atributos de AccessControls debe ser un string.")

  return {
    check_in: new Date(check_in),
    check_out: new Date(check_out),
    created_at: new Date(created_at),
    updated_at: new Date(updated_at)
  }
}
