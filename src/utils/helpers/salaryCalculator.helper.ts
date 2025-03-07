import {
  DAYTIME_OVERTIME_HOUR_PERCENTAGE,
  HOLIDAY_SHIFT_SURCHARGE_PERCENTAGE,
  NIGHT_SHIFT_SURCHARGE_PERCENTAGE,
  NIGHTTIME_OVERTIME_HOUR_PERCENTAGE
} from '@/constant'

/**
 * Calcula la tarifa por hora con el recargo nocturno aplicado.
 * @returns {number} Valor de la hora con el recargo nocturno.
 */
const calculateNightShiftHourlyRate = (hourlyRate: number): number => {
  return hourlyRate + hourlyRate * NIGHT_SHIFT_SURCHARGE_PERCENTAGE
}

/**
 * Calcula la tarifa por hora con el recargo dominical o festivo aplicado.
 * @returns {number} Valor de la hora con el recargo por festivo o domingo.
 */
const calculateHolidayShiftHourlyRate = (hourlyRate: number): number => {
  return hourlyRate + hourlyRate * HOLIDAY_SHIFT_SURCHARGE_PERCENTAGE
}

/**
 * Calcula la tarifa por hora con el recargo nocturno y dominical o festivo aplicado.
 * @returns {number} Valor de la hora con ambos recargos aplicados.
 */
const calculateHolidayNightShiftHourlyRate = (hourlyRate: number): number => {
  return (
    hourlyRate +
    hourlyRate * (NIGHT_SHIFT_SURCHARGE_PERCENTAGE + HOLIDAY_SHIFT_SURCHARGE_PERCENTAGE)
  )
}

/**
 * Calcula la tarifa por hora extra diurna.
 * @returns {number} Valor de la hora extra diurna.
 */
const calculateHourlyDaytimeOvertimeRate = (hourlyRate: number): number => {
  return hourlyRate + hourlyRate * DAYTIME_OVERTIME_HOUR_PERCENTAGE
}

/**
 * Calcula la tarifa por hora extra nocturna.
 * @returns {number} Valor de la hora extra nocturna.
 */
const calculateHourlyNighttimeOvertimeRate = (hourlyRate: number): number => {
  return hourlyRate + hourlyRate * NIGHTTIME_OVERTIME_HOUR_PERCENTAGE
}

/**
 * Calcula la tarifa por hora extra diurna en un día domingo o festivo.
 * @returns {number} Valor de la hora extra diurna en festivo o domingo.
 */
const calculateDaytimeHolidayOvertimeRate = (hourlyRate: number): number => {
  return (
    hourlyRate +
    hourlyRate * (DAYTIME_OVERTIME_HOUR_PERCENTAGE + HOLIDAY_SHIFT_SURCHARGE_PERCENTAGE)
  )
}

/**
 * Calcula la tarifa por hora extra nocturna en un día domingo o festivo.
 * @returns {number} Valor de la hora extra nocturna en festivo o domingo.
 */
const calculateNighttimeHolidayOvertimeRate = (hourlyRate: number): number => {
  return (
    hourlyRate +
    hourlyRate * (NIGHTTIME_OVERTIME_HOUR_PERCENTAGE + HOLIDAY_SHIFT_SURCHARGE_PERCENTAGE)
  )
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
