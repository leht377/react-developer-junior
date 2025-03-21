import { EmployeeEntity } from '@/domain/entities/employe.entity'
import { overtimerCalculator } from '@/utils/helpers/overtimeCalculator.helper'

export const overtime = (
  employeEntity: EmployeeEntity
): Record<OvertimeAndSurchargeType, number> => {
  
  let HED = 0
  let HEN = 0
  let HEDN = 0
  let HEDD = 0
  let RC = 0
  let RD = 0

  const accessControl = employeEntity.relationships.accessControls
  const scheduleType = employeEntity.relationships.workshifts[0].attributes.schedule_type

  for (const control of accessControl) {
    HED += overtimerCalculator.calcularHED(scheduleType, control)
    HEN += overtimerCalculator.calcularHEN(scheduleType, control)
    HEDD += overtimerCalculator.calcularHEDDominical(scheduleType, control)
    HEDN += overtimerCalculator.calcularHENDominical(scheduleType, control)
    RC += overtimerCalculator.calcularRC(scheduleType, control)
    RD += overtimerCalculator.calcularRD(scheduleType, control)
  }

  return {
    HED: Math.round(HED / 3600),
    HEDD: Math.round(HEDD / 3600),
    HEDN: Math.round(HEDN / 3600),
    HEN: Math.round(HEN / 3600),
    RC: Math.round(RC / 3600),
    RD: Math.round(RD / 3600),
    RND: 0
  }
}
