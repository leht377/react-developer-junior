import { EmployeeAttributes } from "@/domain/types/employee";

export const EmployeeAttributesMapper = (attributes: Record<string, unknown>): EmployeeAttributes => { 
  if (typeof attributes !== "object" || attributes === null) {
    throw new Error("El campo 'attributes' debe ser un objeto válido.");
  }

  const { first_name, last_name, email, phone, charge, salary, created_at, updated_at } = attributes;

  if (typeof first_name !== "string") throw new Error("El campo 'first_name' debe ser un string.");
  if (typeof last_name !== "string") throw new Error("El campo 'last_name' debe ser un string.");
  if (typeof email !== "string") throw new Error("El campo 'email' debe ser un string.");
  if (typeof phone !== "string") throw new Error("El campo 'phone' debe ser un string.");
  if (typeof charge !== "string") throw new Error("El campo 'charge' debe ser un string.");
  if (typeof salary !== "number") throw new Error("El campo 'salary' debe ser un número.");
  if (typeof created_at !== "string") throw new Error("El campo 'created_at' debe ser un string.");
  if (typeof updated_at !== "string") throw new Error("El campo 'created_at' debe ser un string.");
  
  return {
    first_name,
    last_name,
    email,
    phone,
    charge,
    salary,
    created_at: new Date(created_at),
    updated_at: new Date(updated_at),
  };
}