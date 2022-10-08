import { NavLink } from 'react-router-dom'
import '../styles/Navigation.css'
import logo from '../assets/users-logo.svg'
const Navigation = () => {
  return (
    <div className="nav">
      <div className="nav__logo">
        <img src={logo} alt="users_logo" />
        <h1>Userapp</h1>
      </div>
      <div className="nav__input">
        <input type="text" placeholder="Search for somethink..." />
      </div>
      <div className="nav__buttons">
        <NavLink to="/" end>
          show users
        </NavLink>
        <NavLink to="/adduser">add users</NavLink>
      </div>
    </div>
  )
}

export default Navigation
