import { NavLink } from 'react-router-dom'
import '../styles/Navigation.css'
import logo from '../assets/users-logo.svg'
import SearchInput from './SearchInput'
const Navigation = () => {
  return (
    <div className="nav">
      <div className="nav__logo">
        <img src={logo} alt="users_logo" />
        <h1>Userapp</h1>
      </div>
      <div className="nav__input">
        <SearchInput />
      </div>
      <div className="nav__buttons">
        <NavLink className="nav__buttons__showusers" to="/" end>
          show users
        </NavLink>
        <NavLink className="nav__buttons__addusers" to="/adduser">
          add users
        </NavLink>
      </div>
    </div>
  )
}

export default Navigation
