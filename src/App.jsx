import Navigation from './componetns/Navigation'
import UserForm from './componetns/UserForm'
import Main from './componetns/Main'
import UserView from './componetns/UserView'

import { Route, Routes } from 'react-router-dom'
import './styles/App.css'

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/adduser" element={<UserForm />} />
        <Route path="/:id" element={<UserView />} />
      </Routes>
    </>
  )
}

export default App
