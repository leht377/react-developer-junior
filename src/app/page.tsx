'use client'
import { EmployeeProvider } from './employee/context/EmployeeContext'
import Employee from './employee/Employee'

export default function Home() {
  return (
    <EmployeeProvider>
      <Employee />
    </EmployeeProvider>
  )
}
