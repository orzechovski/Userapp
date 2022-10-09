import ButtonEdit from './ButtonEdit'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useMatch, useNavigate } from 'react-router-dom'
import '../styles/Userview.css'
import ButtonDelete from './ButtonDelete'

const UserView = () => {
  const match = useMatch('/:id')
  const navigate = useNavigate()
  const user = useSelector((state) => state.users.filter((user) => user.id === parseInt(match.params.id)))[0]
  const tomatoColor = { color: 'tomato' }
  useEffect(() => {
    user === undefined ? navigate('/') : null
  })
  return (
    user !== undefined && (
      <div className="user__view">
        <div className="user__view__personal">
          <h5> {user.name}</h5>
          <p>
            Username <span style={tomatoColor}>{user.username}</span>
          </p>
        </div>
        <div className="user__view__address">
          <h5>Contact</h5>
          <p>
            Email: <span style={tomatoColor}>{user.email}</span>
          </p>
          <p>
            Phone: <span style={tomatoColor}>{user.phone}</span>
          </p>
          <p>
            Street: <span style={tomatoColor}>{user.address.street}</span>
          </p>
          <p>
            Suite: <span style={tomatoColor}>{user.address.suite}</span>
          </p>
          <p>
            City: <span style={tomatoColor}>{user.address.city}</span>
          </p>
          <p>
            Zipcode: <span style={tomatoColor}>{user.address.zipcode}</span>
          </p>
        </div>
        <div className="user__view__company">
          <h5>Company</h5>
          <p>
            Name: <span style={tomatoColor}>{user.company.name}</span>
          </p>
          <p>
            Catch phrase: <span style={tomatoColor}>{user.company.catchPhrase}</span>
          </p>
          <p>
            Bs: <span style={tomatoColor}>{user.company.bs}</span>
          </p>
        </div>
        <div className="user__view__buttons">
          <ButtonEdit user={user} />
          <ButtonDelete id={user.id} />
          <button className="btn__back" onClick={() => navigate('/')}>
            Get Back
          </button>
        </div>
      </div>
    )
  )
}

export default UserView
