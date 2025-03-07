export type WorkshiftDays = {
  type: string
  id: number
  attributes: {
    day: string
    start_at: string
    finished_at: string
    break_time_start_at: string
    break_time_finished_at: string
    created_at: Date
    updated_at: Date
  }
}


export type scheduleType = 'fixed' | 'fixed_halftime' | 'flexible'

export type Workshifts = {
  type: string
  id: number
  attributes: {
    name: string
    schedule_type: scheduleType
    maximun_weekly_hours: number
    created_at: Date
    updated_at: Date
  }
  relationships: { workshiftDays: WorkshiftDays[] }
}