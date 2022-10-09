import { useDispatch } from 'react-redux'
import { removeUser } from '../reducers/userReducer'

const ButtonDelete = ({ id }) => {
  const dispatch = useDispatch()
  const handleClick = () => {
    if (window.confirm('Remove blog?')) {
      dispatch(removeUser(id))
    }
  }
  return (
    <button className="btn btn-delete" onClick={handleClick}>
      delete
    </button>
  )
}

export default ButtonDelete
