import { useState, useEffect } from 'react'
import { useDebounce } from 'use-debounce'

interface UseDebouncedSearchProps {
  delay?: number
  onDebouncedChange: (value: string) => void
}

const useDebouncedSearch = ({ delay = 500, onDebouncedChange }: UseDebouncedSearchProps) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [debouncedSearch] = useDebounce(searchTerm, delay)

  useEffect(() => {
    // if (debouncedSearch.trim() !== '') {
      onDebouncedChange(debouncedSearch)
    // }
  }, [debouncedSearch])

  return { searchTerm, setSearchTerm }
}

export default useDebouncedSearch
