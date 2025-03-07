import { DAYS_OF_WEEK_NAMES } from '@/constant'
import { ScheduleType } from '@/domain/types/workshifts'

export type ScheduleItem = {
  days: DAYS_OF_WEEK_NAMES[]
  workHours: { start: string; end: string }
  breakTime: { start: string; end: string } | null
}
export type WorkSchedules = Record<ScheduleType, { schedules: ScheduleItem[] }>


/**
 * Obtiene el horario de trabajo según el tipo de horario especificado.
 *
 * @param {ScheduleType} scheduleType - Tipo de horario de trabajo a obtener.
 *                                       Valores posibles: `"fixed" | "fixed_halftime" | "flexible"`.
 * @returns {{ schedules: ScheduleItem[] } | null} - El objeto de horario correspondiente
 *                                                   si existe, de lo contrario `null`.
 *
 */
export const getWorkSchedule = (
  scheduleType: ScheduleType
): { schedules: ScheduleItem[] } | null => {
  const { FRIDAY, MONDAY, SATURDAY, THURSDAY, TUESDAY, WEDNESDAY } = DAYS_OF_WEEK_NAMES

  const workSchedules: WorkSchedules = {
    fixed: {
      schedules: [
        {
          days: [MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY],
          workHours: { start: '08:00', end: '18:00' },
          breakTime: { start: '12:00', end: '14:00' }
        },
        {
          days: [SATURDAY],
          workHours: { start: '08:00', end: '12:00' },
          breakTime: null
        }
      ]
    },
    fixed_halftime: {
      schedules: [
        {
          days: [MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY],
          workHours: { start: '08:00', end: '12:00' },
          breakTime: null
        }
      ]
    },
    flexible: {
      schedules: []
    }
  }

  return workSchedules[scheduleType] || null // Devuelve el horario o null si no existe
}
