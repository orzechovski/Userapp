import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createUser } from '../reducers/userReducer'
import '../styles/UserForm.css'
const UserForm = () => {
  const dispatch = useDispatch()
  const initialStateUser = {
    name: '',
    username: '',
    email: '',
    website: '',
    phone: '',
    address: { street: '', suite: '', city: '', zipcode: '' },
    company: { name: '', catchPhrase: '', bs: '' },
  }
  const [newUser, setNewUser] = useState(initialStateUser)
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(createUser(newUser))
    clear()
  }
  const clear = () => {
    setNewUser(initialStateUser)
  }
  return (
    <div className="addUser">
      <h2>Add User</h2>
      <form className="addUser__form" onSubmit={handleSubmit}>
        <div className="addUser__form__section personal__section">
          <h3>Personal</h3>
          <label>
            Name: <input type="text" value={newUser.name} onChange={({ target }) => setNewUser({ ...newUser, name: target.value })} />
          </label>
          <label>
            UserName: <input type="text" value={newUser.username} onChange={({ target }) => setNewUser({ ...newUser, username: target.value })} />
          </label>
          <label>
            Email: <input type="text" value={newUser.email} onChange={({ target }) => setNewUser({ ...newUser, email: target.value })} />
          </label>
          <label>
            Phone: <input type="text" value={newUser.phone} onChange={({ target }) => setNewUser({ ...newUser, phone: target.value })} />
          </label>
          <label>
            Website: <input type="text" value={newUser.website} onChange={({ target }) => setNewUser({ ...newUser, website: target.value })} />
          </label>
        </div>
        <div className="addUser__form__section company__section">
          <h3>Company</h3>
          <label>
            Name:{' '}
            <input
              type="text"
              value={newUser.company.name}
              onChange={({ target }) => setNewUser({ ...newUser, company: { ...newUser.company, name: target.value } })}
            />
          </label>
          <label>
            Phrase:{' '}
            <input
              type="text"
              value={newUser.company.catchPhrase}
              onChange={({ target }) => setNewUser({ ...newUser, company: { ...newUser.company, catchPhrase: target.value } })}
            />
          </label>
          <label>
            bs:{' '}
            <input
              type="text"
              value={newUser.company.bs}
              onChange={({ target }) => setNewUser({ ...newUser, company: { ...newUser.company, bs: target.value } })}
            />
          </label>
        </div>
        <div className="addUser__form__section address__section">
          <h3>Address</h3>
          <label>
            Street:{' '}
            <input
              type="text"
              value={newUser.address.street}
              onChange={({ target }) => setNewUser({ ...newUser, address: { ...newUser.address, street: target.value } })}
            />
          </label>
          <label>
            Suite:{' '}
            <input
              type="text"
              value={newUser.address.suite}
              onChange={({ target }) => setNewUser({ ...newUser, address: { ...newUser.address, suite: target.value } })}
            />
          </label>
          <label>
            City:{' '}
            <input
              type="text"
              value={newUser.address.city}
              onChange={({ target }) => setNewUser({ ...newUser, address: { ...newUser.address, city: target.value } })}
            />
          </label>
          <label>
            Zipcode:{' '}
            <input
              type="text"
              value={newUser.address.zipcode}
              onChange={({ target }) => setNewUser({ ...newUser, address: { ...newUser.address, zipcode: target.value } })}
            />
          </label>
        </div>
        <div className="buttons__section">
          <button type="submit" value="submit">
            Submit
          </button>
          <button type="button" onClick={clear}>
            Clear
          </button>
        </div>
      </form>
    </div>
  )
}

export default UserForm
