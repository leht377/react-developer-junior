const MAX_LEGAL_WORKING_HOURS = 42 // Horas máximas legales de trabajo
const DAYS_OF_WEEK = 7 // Días en una semana
const WORKING_DAYS_PER_WEEK = 6 // Días laborales en una semana
const DAYS_OF_MONTH = 30 // Días en un mes estándar

const NIGHT_SHIFT_SURCHARGE_PERCENTAGE = 0.35 // Porcentaje de recargo para el turno nocturno
const HOLIDAY_SHIFT_SURCHARGE_PERCENTAGE = 0.75 // Porcentaje de recargo para turnos en días festivos o domingos
const DAYTIME_OVERTIME_HOUR_PERCENTAGE = 0.25 // Porcentaje de recargo para horas extras diurnas
const NIGHTTIME_OVERTIME_HOUR_PERCENTAGE = 0.75 // Porcentaje de recargo para horas extras nocturnas

const MIN_DAYTIME_OVERTIME_HOUR_RATE = 7736 // Valor minimo Hora extra diurna (25% adicional)
const MIN_NIGHTTIME_OVERTIME_HOUR_RATE = 10831 //Valor minimo  Hora extra nocturna (75% adicional)
const MIN_DAYTIME_HOLIDAY_OVERTIME_HOUR_RATE = 12378 //Valor minimo  Hora extra diurna en festivo/dominical (100% adicional)
const MIN_NIGHTTIME_HOLIDAY_OVERTIME_HOUR_RATE = 15473 //Valor minimo  Hora extra nocturna en festivo/dominical (150% adicional)

const MIN_NIGHT_SHIFT_RATE = 8355 // Valor mínimo con recargo nocturno
const MIN_HOLIDAY_SHIFT_RATE = 10831 // Valor mínimo con recargo dominical o festivo
const MIN_NIGHT_HOLIDAY_SHIFT_RATE = 12997 // Valor mínimo con recargo nocturno en dominical o festivo

enum DAYS_OF_WEEK_NAMES {
  MONDAY = 1, // LUNES
  TUESDAY = 2, // MARTES
  WEDNESDAY = 3, // MIERCOLES
  THURSDAY = 4, // JUEVES
  FRIDAY = 5, // VIERNES
  SATURDAY = 6, // SABADO
  SUNDAY = 7 // DOMINGO
}

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
  NIGHTTIME_OVERTIME_HOUR_PERCENTAGE,
  MIN_DAYTIME_OVERTIME_HOUR_RATE,
  MIN_NIGHTTIME_OVERTIME_HOUR_RATE,
  MIN_DAYTIME_HOLIDAY_OVERTIME_HOUR_RATE,
  MIN_NIGHTTIME_HOLIDAY_OVERTIME_HOUR_RATE,
  MIN_NIGHT_SHIFT_RATE,
  MIN_HOLIDAY_SHIFT_RATE,
  MIN_NIGHT_HOLIDAY_SHIFT_RATE,
  DAYS_OF_WEEK_NAMES
}
