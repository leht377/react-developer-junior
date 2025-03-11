import SVGIcon from '@/components/SVGIcon'
import { formatToColombianPeso } from '@/utils/helpers/formatToColombianPeso.helper'
import React from 'react'
interface props {
  id: number
  firstName: string
  lastName: string
  email: string
  charge: string
  salary: number
  onClickOption: (employeId: number) => void
}
const RowBody: React.FC<props> = ({
  charge,
  email,
  firstName,
  id,
  lastName,
  salary,
  onClickOption
}) => {
  return (
    <tr className='bg-white hover:bg-gray-100' key={id}>
      <td className='border border-gray-300 px-4 py-2'>{firstName}</td>
      <td className='border border-gray-300 px-4 py-2'>{lastName}</td>
      <td className='border border-gray-300 px-4 py-2'>{email}</td>
      <td className='border border-gray-300 px-4 py-2'>{charge}</td>
      <td className='border border-gray-300 px-4 py-2'>{formatToColombianPeso(salary)}</td>
      <td className='border border-gray-300 px-4 py-2 text-center'>
        <button className='cursor-pointer' onClick={() => onClickOption(id)}>
          <SVGIcon name='calculator' />
        </button>
      </td>
    </tr>
  )
}

export default RowBody
