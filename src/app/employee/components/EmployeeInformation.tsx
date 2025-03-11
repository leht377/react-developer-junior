import React, { useEffect, useMemo, useState } from 'react'
import { useEmployeeContext } from '../context/EmployeeContext'
import { overtime } from '../utils/helpers/overtime'
import { formatToColombianPeso } from '@/utils/helpers/formatToColombianPeso.helper'
import { salaryCalculator } from '@/utils/helpers/salaryCalculator.helper'

// Datos de la tabla de horas extras y recargos
const overtimeDataInitialState: Array<{
  code: OvertimeAndSurchargeType
  description: string
  calculate: (value: number) => number
}> = [
  {
    code: 'HED',
    description: 'Horas extras diurnas',
    calculate: salaryCalculator.calculateHourlyDaytimeOvertimeRate
  },
  {
    code: 'HEN',
    description: 'Horas extras nocturnas',
    calculate: salaryCalculator.calculateHourlyNighttimeOvertimeRate
  },
  {
    code: 'HEDD',
    description: 'Horas extras diurnas dominicales o festivas',
    calculate: salaryCalculator.calculateDaytimeHolidayOvertimeRate
  },
  {
    code: 'HEDN',
    description: 'Horas extras nocturnas dominicales',
    calculate: salaryCalculator.calculateNighttimeHolidayOvertimeRate
  },
  {
    code: 'RC',
    description: 'Recargo nocturno',
    calculate: salaryCalculator.calculateNightShiftHourlyRate
  },
  {
    code: 'RD',
    description: 'Recargo dominical',
    calculate: salaryCalculator.calculateHolidayShiftHourlyRate
  },
  {
    code: 'RND',
    description: 'Recargo nocturno dominical',
    calculate: salaryCalculator.calculateHolidayNightShiftHourlyRate
  }
]

const EmployeeInformation = () => {
  const { employeesSelected } = useEmployeeContext()
  const [salaryplusOvertime, setSalaryplusOvertime] = useState(0)

  const overtimeData = useMemo(() => {
    if (!employeesSelected) return { HED: 0, HEDD: 0, HEDN: 0, HEN: 0, RC: 0, RD: 0, RND: 0 }
    return overtime(employeesSelected)
  }, [employeesSelected])

  useMemo(() => {
    if (employeesSelected) {
      let s = 0
      overtimeDataInitialState.map((item, index) => {
        s += (overtimeData[item.code] || 0) * item.calculate(employeesSelected?.hourlyRate!)
      })
      setSalaryplusOvertime(s)
    }
  }, [overtimeData])

  const renderedTable = () => {
    return (
      <div className='mt-4 bg-white shadow-lg rounded-lg p-4'>
        <h3 className='text-lg font-semibold text-gray-700 mb-2'>Horas Extras y Recargos</h3>

        <div className='bg-blue-100 p-4 rounded-lg shadow-md flex items-center space-x-2 my-4'>
          <p className='text-blue-700 font-semibold text-lg'>Valor de la hora:</p>
          <span className='text-blue-900 font-bold text-xl'>
            {formatToColombianPeso(employeesSelected?.hourlyRate!)}
          </span>
        </div>
        <table className='w-full border border-gray-300 rounded-lg overflow-hidden'>
          <thead>
            <tr className='bg-blue-600 text-white'>
              <th className='px-4 py-2 text-left'>Código</th>
              <th className='px-4 py-2 text-left'>Descripción</th>
              <th className='px-4 py-2 text-left'>Horas</th>
              <th className='px-4 py-2 text-left'>Valor de la hora</th>
              <th className='px-4 py-2 text-left'>Total</th>
            </tr>
          </thead>
          <tbody>
            {overtimeDataInitialState.map((item, index) => (
              <tr key={index} className='border-b border-gray-300 hover:bg-gray-100 transition'>
                <td className='px-4 py-2 font-semibold'>{item.code}</td>
                <td className='px-4 py-2'>{item.description}</td>
                <td className='px-4 py-2  font-bold text-blue-600'>
                  {overtimeData[item.code] || 0}
                </td>
                <td className='px-4 py-2  font-bold text-blue-600'>
                  {formatToColombianPeso(item.calculate(employeesSelected?.hourlyRate!))}
                </td>
                <td className='px-4 py-2  font-bold text-blue-600'>
                  {formatToColombianPeso(
                    (overtimeData[item.code] || 0) * item.calculate(employeesSelected?.hourlyRate!)
                  )}
                </td>
              </tr>
            ))}
            <tr className='bg-gray-200'>
              <td className='px-4 py-2 font-bold'>TOTAL</td>
              <td className='px-4 py-2 font-bold'></td>
              <td className='px-4 py-2 font-bold'></td>
              <td className='px-4 py-2 font-bold'></td>
              <td className='px-4 py-2 font-bold'>{formatToColombianPeso(salaryplusOvertime)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }

  return (
    <div className='p-6 bg-gray-100 rounded-lg shadow-md'>
      {employeesSelected ? (
        <>
          {/* Información del Empleado */}
          <div className='bg-white shadow-md rounded-lg p-6 mb-6'>
            <h2 className='text-xl font-bold text-gray-700'>Información del Empleado</h2>
            <p className='text-gray-600 mt-2'>
              <strong>Nombre:</strong> {employeesSelected.attributes.first_name}{' '}
              {employeesSelected.attributes.last_name}
            </p>
            <p className='text-gray-600'>
              <strong>Cargo:</strong> {employeesSelected.attributes.charge}
            </p>
            <p className='text-gray-600'>
              <strong>Horario:</strong>{' '}
              {employeesSelected.relationships.workshifts[0].attributes.schedule_type}
            </p>
            <p className='text-gray-600'>
              <strong>Salario Base:</strong>{' '}
              <span className='text-green-600 font-bold '>
                ${employeesSelected.attributes.salary.toLocaleString()}
              </span>
            </p>
          </div>

          {/* Sección de Cálculo de Salario Estimado */}
          <div className='bg-white shadow-md rounded-lg p-6 mb-6'>
            <h2 className='text-lg font-semibold text-gray-700 mb-2'>
              Cálculo de Salario Estimado
            </h2>

            <p className='text-gray-700 mt-2'>
              <strong>Salario Estimado:</strong>{' '}
              <span className='text-green-600 font-bold text-lg'>
                {formatToColombianPeso(employeesSelected.attributes.salary + salaryplusOvertime)}
              </span>
            </p>
          </div>

          {/* Tabla de Horas Extras y Recargos */}
          {renderedTable()}
        </>
      ) : (
        <p className='text-gray-500 text-center'>No hay empleado seleccionado</p>
      )}
    </div>
  )
}

export default EmployeeInformation
