import { useEffect, useState } from 'react'
import { EmployeeEntity } from '@/domain/entities/employe.entity'

type SortKey = 'salary' | 'firstName'
type SortOrder = 'asc' | 'desc'

const useSorting = (initialData: EmployeeEntity[]) => {
  const [data, setData] = useState<EmployeeEntity[]>(initialData)
  const [sortConfig, setSortConfig] = useState<{ [key in SortKey]: SortOrder }>({
    firstName: 'asc',
    salary: 'asc'
  })

  useEffect(() => {
    setData(initialData)
  }, [initialData])

  const sortData = (key: SortKey) => {
    const newOrder = sortConfig[key] === 'asc' ? 'desc' : 'asc'

    const sortedData = [...data].sort((a, b) => {
      if (key === 'salary') {
        return newOrder === 'asc'
          ? a.attributes.salary - b.attributes.salary
          : b.attributes.salary - a.attributes.salary
      } else {
        return newOrder === 'asc'
          ? a.attributes.first_name.localeCompare(b.attributes.first_name)
          : b.attributes.first_name.localeCompare(a.attributes.first_name)
      }
    })

    setSortConfig({ ...sortConfig, [key]: newOrder })
    setData(sortedData)
  }

  return { data, sortConfig, sortData }
}

export default useSorting
