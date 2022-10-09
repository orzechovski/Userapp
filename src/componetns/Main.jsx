import UserList from './UserList'
import Sort from './Sort'
import usersIcon from '../assets/users-four-thin.svg'
import '../styles/Main.css'

const Main = () => {
  return (
    <main className="main">
      <header className="main__header">
        <div className="main_header__logo">
          <img src={usersIcon} alt="" />
          <h1>Users</h1>
        </div>
        <Sort />
      </header>
      <section className="main__userlist">
        <UserList />
      </section>
    </main>
  )
}

export default Main
