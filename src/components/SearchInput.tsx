import React, { useState } from 'react'
import SVGIcon from './SVGIcon'

interface SearchInputProps {
  onSearch: (query: string) => void
  placeholder?: string
}

const SearchInput: React.FC<SearchInputProps> = ({ onSearch, placeholder = 'Search...' }) => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setSearchTerm(value)
    onSearch(value)
  }

  return (
    <div className='relative w-full max-w-md'>
      <input
        type='text'
        value={searchTerm}
        onChange={handleChange}
        placeholder={placeholder}
        className='w-full px-4 py-2 border border-gray-300 rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-500 transition'
      />
      {searchTerm ? (
        <button
          onClick={() => {
            setSearchTerm('')
            onSearch('')
          }}
          className='absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full p-1 transition cursor-pointer'
        >
          ✖
        </button>
      ) : (
        <div className='absolute right-4 top-1/2 transform -translate-y-1/2 p-1 transition'>
          <SVGIcon name='magnify' />
        </div>
      )}
    </div>
  )
}

export default SearchInput
