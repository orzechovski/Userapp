import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setFilter } from '../reducers/filterReducer'

const SearchInput = () => {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setFilter(value))
  }, [value])

  return <input placeholder="Search for name.." type="text" value={value} onChange={({ target }) => setValue(target.value)} />
}

export default SearchInput
