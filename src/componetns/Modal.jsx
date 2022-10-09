import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { makeUpdate } from '../reducers/userReducer'

const Modal = ({ user, setView }) => {
  const [userEdit, setUserEdit] = useState(user)
  const dispatch = useDispatch()

  const handleEdit = (e) => {
    e.preventDefault()
    dispatch(makeUpdate(userEdit.id, userEdit))
    setView(false)
  }
  return (
    <div className="modal">
      <div className="modal__form">
        <form onSubmit={handleEdit}>
          <div className="modal__form__section">
            <h3>Personal</h3>
            <label>
              Name: <input type="text" value={userEdit.name} onChange={({ target }) => setUserEdit({ ...userEdit, name: target.value })} />
            </label>
            <label>
              UserName: <input type="text" value={userEdit.username} onChange={({ target }) => setUserEdit({ ...userEdit, username: target.value })} />
            </label>
            <label>
              Email: <input type="text" value={userEdit.email} onChange={({ target }) => setUserEdit({ ...userEdit, email: target.value })} />
            </label>
            <label>
              Phone: <input type="text" value={userEdit.phone} onChange={({ target }) => setUserEdit({ ...userEdit, phone: target.value })} />
            </label>
            <label>
              Website: <input type="text" value={userEdit.website} onChange={({ target }) => setUserEdit({ ...userEdit, website: target.value })} />
            </label>
          </div>
          <div className="modal__form__section">
            <h3>Company</h3>
            <label>
              Name:{' '}
              <input
                type="text"
                value={userEdit.company.name}
                onChange={({ target }) => setUserEdit({ ...userEdit, company: { ...userEdit.company, name: target.value } })}
              />
            </label>
            <label>
              Phrase:{' '}
              <input
                type="text"
                value={userEdit.company.catchPhrase}
                onChange={({ target }) => setUserEdit({ ...userEdit, company: { ...userEdit.company, catchPhrase: target.value } })}
              />
            </label>
            <label>
              bs:{' '}
              <input
                type="text"
                value={userEdit.company.bs}
                onChange={({ target }) => setUserEdit({ ...userEdit, company: { ...userEdit.company, bs: target.value } })}
              />
            </label>
          </div>
          <div className="modal__form__section">
            <h3>Address</h3>
            <label>
              Street:{' '}
              <input
                type="text"
                value={userEdit.address.street}
                onChange={({ target }) => setUserEdit({ ...userEdit, address: { ...userEdit.address, street: target.value } })}
              />
            </label>
            <label>
              Suite:{' '}
              <input
                type="text"
                value={userEdit.address.suite}
                onChange={({ target }) => setUserEdit({ ...userEdit, address: { ...userEdit.address, suite: target.value } })}
              />
            </label>
            <label>
              City:{' '}
              <input
                type="text"
                value={userEdit.address.city}
                onChange={({ target }) => setUserEdit({ ...userEdit, address: { ...userEdit.address, city: target.value } })}
              />
            </label>
            <label>
              Zipcode:{' '}
              <input
                type="text"
                value={userEdit.address.zipcode}
                onChange={({ target }) => setUserEdit({ ...userEdit, address: { ...userEdit.address, zipcode: target.value } })}
              />
            </label>
          </div>
          <div className="modal__form__section modal__buttons__section">
            <button type="submit" value="submit">
              Edit
            </button>
            <button
              type="button"
              onClick={() => {
                setView(false)
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Modal
