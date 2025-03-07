const MAX_LEGAL_WORKING_HOURS = 42 // Horas máximas legales de trabajo
const DAYS_OF_WEEK = 7 // Días en una semana (corrigiendo el error)
const WORKING_DAYS_PER_WEEK = 6 // Si te refieres a días laborales en una semana
const DAYS_OF_MONTH = 30 // Días en un mes estándar
const NIGHT_SHIFT_SURCHARGE_PERCENTAGE = 0.35
const HOLIDAY_SHIFT_SURCHARGE_PERCENTAGE = 0.75
const DAYTIME_OVERTIME_HOUR_PERCENTAGE = 0.25
const NIGHTTIME_OVERTIME_HOUR_PERCENTAGE  = 0.75

// Trabajo diurno: aquel que se realiza entre las 6:00 a. m. y las 9:00 p. m.
// Trabajo nocturno: aquel que se lleva a cabo entre las 9:00 p. m. y las 6:00 a. m.

// RECARGOS FESTIVOS, DOMINGOS Y NOCTURNOS

export {
  MAX_LEGAL_WORKING_HOURS,
  DAYS_OF_WEEK,
  WORKING_DAYS_PER_WEEK,
  DAYS_OF_MONTH,
  NIGHT_SHIFT_SURCHARGE_PERCENTAGE,
  HOLIDAY_SHIFT_SURCHARGE_PERCENTAGE,
  DAYTIME_OVERTIME_HOUR_PERCENTAGE,
  NIGHTTIME_OVERTIME_HOUR_PERCENTAGE
}
