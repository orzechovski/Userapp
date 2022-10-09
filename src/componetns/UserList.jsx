import { useEffect, useMemo } from 'react'
import { connect, useDispatch } from 'react-redux'
import { initialUsers } from '../reducers/userReducer'
import FullSizeList from './FullSizeList'
import MinSizeList from './MinSizeList'

const UserList = ({ users, sort, filter }) => {
  const dispatch = useDispatch()
  let width = window.innerWidth
  useEffect(() => {
    dispatch(initialUsers())
    //you need to optimize here but later TODO:
  }, [dispatch])
  const sortedList = useMemo(() => {
    const usersToSort = filter.length === 0 ? users : users.filter((user) => user.name.toLowerCase().includes(filter))
    return [...usersToSort].sort(
      (a, b) => {
        return a[sort.key].localeCompare(b[sort.key]) * (sort.type === 'ascending' ? 1 : -1)
      },
      [filter, sort, users]
    )
  })
  return <>{width > 900 ? <FullSizeList list={sortedList} /> : <MinSizeList list={sortedList} />}</>
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
