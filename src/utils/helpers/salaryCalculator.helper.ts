import {
  DAYTIME_OVERTIME_HOUR_PERCENTAGE,
  HOLIDAY_SHIFT_SURCHARGE_PERCENTAGE,
  MIN_DAYTIME_HOLIDAY_OVERTIME_HOUR_RATE,
  MIN_DAYTIME_OVERTIME_HOUR_RATE,
  MIN_HOLIDAY_SHIFT_RATE,
  MIN_NIGHT_HOLIDAY_SHIFT_RATE,
  MIN_NIGHT_SHIFT_RATE,
  MIN_NIGHTTIME_HOLIDAY_OVERTIME_HOUR_RATE,
  MIN_NIGHTTIME_OVERTIME_HOUR_RATE,
  NIGHT_SHIFT_SURCHARGE_PERCENTAGE,
  NIGHTTIME_OVERTIME_HOUR_PERCENTAGE
} from '@/constant'

/**
 * Calcula la tarifa por hora con el recargo nocturno aplicado.
 * @returns {number} Valor de la hora con el recargo nocturno.
 */
const calculateNightShiftHourlyRate = (hourlyRate: number): number => {
  const calculatedValue = hourlyRate + hourlyRate * NIGHT_SHIFT_SURCHARGE_PERCENTAGE
  return calculatedValue < MIN_NIGHT_SHIFT_RATE ? MIN_NIGHT_SHIFT_RATE : calculatedValue
}

/**
 * Calcula la tarifa por hora con el recargo dominical o festivo aplicado.
 * @returns {number} Valor de la hora con el recargo por festivo o domingo.
 */
const calculateHolidayShiftHourlyRate = (hourlyRate: number): number => {
  const calculatedValue = hourlyRate + hourlyRate * HOLIDAY_SHIFT_SURCHARGE_PERCENTAGE
  return calculatedValue < MIN_HOLIDAY_SHIFT_RATE ? MIN_HOLIDAY_SHIFT_RATE : calculatedValue
}

/**
 * Calcula la tarifa por hora con el recargo nocturno y dominical o festivo aplicado.
 * @returns {number} Valor de la hora con ambos recargos aplicados.
 */
const calculateHolidayNightShiftHourlyRate = (hourlyRate: number): number => {
  const calculatedValue =
    hourlyRate +
    hourlyRate * (NIGHT_SHIFT_SURCHARGE_PERCENTAGE + HOLIDAY_SHIFT_SURCHARGE_PERCENTAGE)
  return calculatedValue < MIN_NIGHT_HOLIDAY_SHIFT_RATE
    ? MIN_NIGHT_HOLIDAY_SHIFT_RATE
    : calculatedValue
}

/**
 * Calcula la tarifa por hora extra diurna.
 * @returns {number} Valor de la hora extra diurna.
 */
const calculateHourlyDaytimeOvertimeRate = (hourlyRate: number): number => {
  const calculatedValue = hourlyRate + hourlyRate * DAYTIME_OVERTIME_HOUR_PERCENTAGE
  return calculatedValue < MIN_DAYTIME_OVERTIME_HOUR_RATE
    ? MIN_DAYTIME_OVERTIME_HOUR_RATE
    : calculatedValue
}

/**
 * Calcula la tarifa por hora extra nocturna.
 * @returns {number} Valor de la hora extra nocturna.
 */
const calculateHourlyNighttimeOvertimeRate = (hourlyRate: number): number => {
  const calculatedValue = hourlyRate + hourlyRate * NIGHTTIME_OVERTIME_HOUR_PERCENTAGE
  return calculatedValue < MIN_NIGHTTIME_OVERTIME_HOUR_RATE
    ? MIN_NIGHTTIME_OVERTIME_HOUR_RATE
    : calculatedValue
}

/**
 * Calcula la tarifa por hora extra diurna en un día domingo o festivo.
 * @returns {number} Valor de la hora extra diurna en festivo o domingo.
 */
const calculateDaytimeHolidayOvertimeRate = (hourlyRate: number): number => {
  const calculatedValue =
    hourlyRate +
    hourlyRate * (DAYTIME_OVERTIME_HOUR_PERCENTAGE + HOLIDAY_SHIFT_SURCHARGE_PERCENTAGE)
  return calculatedValue < MIN_DAYTIME_HOLIDAY_OVERTIME_HOUR_RATE
    ? MIN_DAYTIME_HOLIDAY_OVERTIME_HOUR_RATE
    : calculatedValue
}

/**
 * Calcula la tarifa por hora extra nocturna en un día domingo o festivo.
 * @returns {number} Valor de la hora extra nocturna en festivo o domingo.
 */
const calculateNighttimeHolidayOvertimeRate = (hourlyRate: number): number => {
  const calculatedValue =
    hourlyRate +
    hourlyRate * (NIGHTTIME_OVERTIME_HOUR_PERCENTAGE + HOLIDAY_SHIFT_SURCHARGE_PERCENTAGE)
  return calculatedValue < MIN_NIGHTTIME_HOLIDAY_OVERTIME_HOUR_RATE
    ? MIN_NIGHTTIME_HOLIDAY_OVERTIME_HOUR_RATE
    : calculatedValue
}

export const salaryCalculator = {
  calculateNightShiftHourlyRate,
  calculateHolidayShiftHourlyRate,
  calculateHolidayNightShiftHourlyRate,
  calculateHourlyDaytimeOvertimeRate,
  calculateHourlyNighttimeOvertimeRate,
  calculateDaytimeHolidayOvertimeRate,
  calculateNighttimeHolidayOvertimeRate
}
