import { useDispatch } from 'react-redux'
import { setSort } from '../reducers/sortReducers'
import '../styles/Sort.css'
const Sort = () => {
  const dispatch = useDispatch()

  const handleSelection = (e) => {
    const sortType = e.target.value
    dispatch(setSort(sortType))
  }
  return (
    <div className="sort">
      <span className="sort__name">Sort by</span>
      <select className="sort__selection" name="sort" id="sort" onChange={handleSelection}>
        <option className="sort__selection__option" value="ascending">
          By name A-Z
        </option>
        <option value="descending">By name Z-A</option>
      </select>
    </div>
  )
}

export default Sort
