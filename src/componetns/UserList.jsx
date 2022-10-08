import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { initialUsers } from '../reducers/userReducer'
import '../styles/Main.css'

const UserList = () => {
  const dispatch = useDispatch()
  const usersList = useSelector((state) => state.users)
  useEffect(() => {
    dispatch(initialUsers())
  }, [dispatch])

  return (
    <main className="main">
      <header className="main__header">
        <h1>(icon) Users</h1>
        <select name="sort" id="sort">
          <option value="by name">by name</option>
        </select>
      </header>
      <section className="main__userlist">
        <div className="main__userlist__description">
          <span>name</span>
          <span>username</span>
          <span>email</span>
          <span>address</span>
          <span>phone</span>
          <span>website</span>
          <span>company</span>
          <span>options</span>
        </div>
        {usersList.map((user) => (
          <div className="main__userlist__list" key={user.id}>
            <span>{user.name}</span>
            <span>{user.username}</span>
            <span>{user.email}</span>
            <span>{user.address.street}</span>
            <span>{user.phone}</span>
            <span>{user.website}</span>
            <span>{user.company.name}</span>
            <span>
              <button>edit</button>
              <button>delete</button>
            </span>
          </div>
        ))}
      </section>
    </main>
  )
}

export default UserList
