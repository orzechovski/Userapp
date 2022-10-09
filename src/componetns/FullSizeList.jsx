import ButtonDelete from './ButtonDelete'
import ButtonEdit from './ButtonEdit'

const FullSizeList = ({ list }) => {
  return (
    <>
      <div className="main__userlist__description">
        <span>name</span>
        <span>username</span>
        <span>email</span>
        <span>address</span>
        <span>phone</span>
        <span>website</span>
        <span>company</span>
        <span>options</span>
      </div>
      {list.map((user) => (
        <div className="main__userlist__list" key={user.id}>
          <span>{user.name}</span>
          <span>{user.username}</span>
          <span>{user.email}</span>
          <span>{user.address.street}</span>
          <span>{user.phone}</span>
          <span>{user.website}</span>
          <span>{user.company.name}</span>
          <span className="main__userlist__list__options">
            <ButtonEdit id={user.id} />
            <ButtonDelete id={user.id} />
          </span>
        </div>
      ))}
    </>
  )
}

export default FullSizeList
