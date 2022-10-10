import { useEffect, useMemo } from 'react'
import { connect, useDispatch } from 'react-redux'
import { initialUsers } from '../reducers/userReducer'
import List from './List'

const UserList = ({ users, sort, filter }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initialUsers())
  }, [dispatch])
  const sortedList = useMemo(() => {
    const usersToSort = filter.length === 0 ? users : users.filter((user) => user.name.toLowerCase().includes(filter))
    return [...usersToSort].sort((a, b) => {
      return a[sort.key].localeCompare(b[sort.key]) * (sort.type === 'ascending' ? 1 : -1)
    })
  }, [filter, sort, users])
  return <List list={sortedList} />
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    sort: state.sort,
    filter: state.filter,
  }
}
const ConnectedUserList = connect(mapStateToProps)(UserList)
export default ConnectedUserList
