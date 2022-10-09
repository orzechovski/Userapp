import { useState } from 'react'
import Modal from './Modal'
const ButtonEdit = ({ user }) => {
  const [view, setView] = useState(false)
  return (
    <>
      {view ? <Modal user={user} setView={setView} /> : null}
      <button className="btn btn-edit" onClick={() => setView(!view)}>
        Edit
      </button>
    </>
  )
}

export default ButtonEdit
