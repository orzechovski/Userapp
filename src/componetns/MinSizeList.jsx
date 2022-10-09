import ButtonDelete from './ButtonDelete'
import ButtonEdit from './ButtonEdit'

const MinSizeList = ({ list }) => {
  return (
    <>
      <div className="main__userlist__description description_minisized">
        <span>name</span>
        <span>username</span>
        <span>email</span>
        <span>options</span>
      </div>
      {list.map((user) => (
        <div className="main__userlist__list userlist_minisized" key={user.id}>
          <span>{user.name}</span>
          <span>{user.username}</span>
          <span>{user.email}</span>
          <span className="main__userlist__list__options list__options__minisized">
            <ButtonEdit id={user.id} />
            <ButtonDelete id={user.id} />
          </span>
        </div>
      ))}
    </>
  )
}

export default MinSizeList
