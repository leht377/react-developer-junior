import { EmployeeEntity } from '@/domain/entities/employe.entity'
import { createContext, ReactNode, useContext, useState } from 'react'

interface EmployeeContextType {
  employeesSelected: EmployeeEntity | undefined
  setEmployee: (employee: EmployeeEntity | undefined) => void
}

const EmployeeContext = createContext<EmployeeContextType | undefined>(undefined)

export const useEmployeeContext = () => {
  const context = useContext(EmployeeContext)
  if (!context) {
    throw new Error('useEmployeeContext debe usarse dentro de un EmployeeProvider')
  }
  return context
}

export const EmployeeProvider = ({ children }: { children: ReactNode }) => {
  const [employee, setEmployee] = useState<EmployeeEntity | undefined>(undefined)

  const setEmployeeValue = (employee: EmployeeEntity | undefined) => {
    setEmployee(employee)
  }

  return (
    <EmployeeContext.Provider
      value={{ employeesSelected: employee, setEmployee: setEmployeeValue }}
    >
      {children}
    </EmployeeContext.Provider>
  )
}
