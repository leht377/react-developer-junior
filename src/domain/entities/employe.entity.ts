import { DAYS_OF_MONTH, WORKING_DAYS_PER_WEEK } from '@/constant'
import { AccessControls } from '@/domain/types/accessControl'
import { EmployeeAttributes } from '@/domain/types/employee'
import { Workshifts } from '@/domain/types/workshifts'

export class EmployeeEntity {
  public readonly hourlyRate: number

  constructor(
    public readonly type: string,
    public readonly id: number,
    public readonly attributes: EmployeeAttributes,
    public readonly relationships: {
      workshifts: Workshifts[]
      accessControls: AccessControls[]
    }
  ) {
    this.hourlyRate = this.calculateRegularHourlyRate()
  }

  private calculateRegularHourlyRate = (): number => {
    const maxWeeklyHours = this.relationships.workshifts[0]?.attributes?.maximun_weekly_hours ?? 0
    const dailyWorkingHours = maxWeeklyHours / WORKING_DAYS_PER_WEEK

    if (dailyWorkingHours <= 0) return 0 // Prevent division by 0

    const monthlyWorkedHours = dailyWorkingHours * DAYS_OF_MONTH

    if (monthlyWorkedHours <= 0) return 0 // Prevent division by 0

    return this.attributes.salary / monthlyWorkedHours
  }
}
