import Navigation from './componetns/Navigation'
import UserList from './componetns/UserList'
import { Route, Routes } from 'react-router-dom'
import './styles/App.css'

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<UserList />} />
      </Routes>
    </>
  )
}

export default App
