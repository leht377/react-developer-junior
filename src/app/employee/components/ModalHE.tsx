import Modal from '@/components/Modal'
import { EmployeeEntity } from '@/domain/entities/employe.entity'
import React, { useEffect, useMemo, useState } from 'react'
import EmployeeInformation from './EmployeeInformation'
interface ModalProps {
  isOpen: boolean
  employeSelected?: EmployeeEntity | null
  onClose: () => void
  title?: string
}



const ModalHE: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title='Información del empleado'>
      <EmployeeInformation/>
    </Modal>
  )
}

export default ModalHE
