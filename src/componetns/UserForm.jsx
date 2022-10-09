import { useState } from 'react'
import { useSelector } from 'react-redux'
import '../styles/UserForm.css'
const UserForm = () => {
  const usersId = useSelector((state) => Math.max(...state.users.map((user) => user.id)))
  //fix this ytou bijacth
  const [newUser, setNewUser] = useState({
    id: usersId + 1,
    name: '',
    username: '',
    email: '',
    address: { street: '', suite: '', city: '', zipcode: '' },
    company: { name: '', catchPhrase: '', bs: '' },
  })
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target.formAction)
  }
  const clear = () => {
    setNewUser({
      id: usersId + 1,
      name: '',
      username: '',
      email: '',
      address: { street: '', suite: '', city: '', zipcode: '' },
      company: { name: '', catchPhrase: '', bs: '' },
    })
  }
  return (
    <div className="addUser">
      <h2>Add User</h2>
      <form className="addUser__form" onSubmit={handleSubmit}>
        <div className="addUser__form__section">
          <h3>Personal</h3>
          <label>
            Name: <input type="text" value={newUser.name} onChange={({ target }) => setNewUser({ ...newUser, name: target.value })} />
          </label>
          <label>
            UserName: <input type="text" onChange={({ target }) => setNewUser({ ...newUser, username: target.value })} />
          </label>
          <label>
            Email: <input type="text" onChange={({ target }) => setNewUser({ ...newUser, email: target.value })} />
          </label>
          <label>
            Phone: <input type="text" onChange={({ target }) => setNewUser({ ...newUser, phone: target.value })} />
          </label>
          <label>
            Website: <input type="text" onChange={({ target }) => setNewUser({ ...newUser, website: target.value })} />
          </label>
        </div>
        <div className="addUser__form__section">
          <h3>Company</h3>
          <label>
            Name: <input type="text" onChange={({ target }) => setNewUser({ ...newUser, company: { ...newUser.company, name: target.value } })} />
          </label>
          <label>
            Catch phrase:{' '}
            <input type="text" onChange={({ target }) => setNewUser({ ...newUser, company: { ...newUser.company, catchPhrase: target.value } })} />
          </label>
          <label>
            bs: <input type="text" onChange={({ target }) => setNewUser({ ...newUser, company: { ...newUser.company, bs: target.value } })} />
          </label>
        </div>
        <div className="addUser__form__section">
          <h3>Address</h3>
          <label>
            Street: <input type="text" onChange={({ target }) => setNewUser({ ...newUser, address: { ...newUser.address, street: target.value } })} />
          </label>
          <label>
            Suite: <input type="text" onChange={({ target }) => setNewUser({ ...newUser, address: { ...newUser.address, suite: target.value } })} />
          </label>
          <label>
            City: <input type="text" onChange={({ target }) => setNewUser({ ...newUser, address: { ...newUser.address, city: target.value } })} />
          </label>{' '}
          <label>
            Zipcode: <input type="text" onChange={({ target }) => setNewUser({ ...newUser, address: { ...newUser.address, zipcode: target.value } })} />
          </label>
        </div>
        <button type="submit" formAction="submit">
          submit
        </button>
      </form>
      <button type="submit" formAction="clear">
        clear
      </button>
    </div>
  )
}

export default UserForm
