import { AccessControls } from '@/domain/types/accessControl'
import { EmployeeAttributes } from '@/domain/types/employee'
import { Workshifts } from '@/domain/types/workshifts'

export class EmployeeEntity {
  constructor(
    public readonly type: string,
    public readonly id: number,
    public readonly attributes: EmployeeAttributes,
    public readonly relationships: {
      workshifts: Workshifts[]
      accessControls: AccessControls[]
    }
  ) {}
}
