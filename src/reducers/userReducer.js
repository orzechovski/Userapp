import { createSlice } from '@reduxjs/toolkit'
import { create, getAll, del } from '../services/users'

const userReducer = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    setUsers(_state, action) {
      return action.payload
    },
    setUser(state, action) {
      return [...state, action.payload]
    },
    deleteUser(state, action) {
      const userId = action.payload
      return state.filter((user) => user.id !== userId)
    },
    updateUser(state, action) {
      const updatedUser = action.payload
      return state.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    },
  },
})

const { setUsers, setUser, deleteUser } = userReducer.actions

export const initialUsers = () => {
  return async (dispatch) => {
    const resposne = await getAll()
    dispatch(setUsers(resposne))
  }
}

export const createUser = (newUser) => {
  return async (dispatch) => {
    try {
      const resposne = await create(newUser)
      dispatch(setUser(resposne))
    } catch (err) {
      console.log(err)
    }
  }
}
export const setAllUsers = (users) => {
  return (dispatch) => {
    dispatch(setUsers(users))
  }
}

export const removeUser = (id) => {
  return async (dispatch) => {
    try {
      await del(id)
      dispatch(deleteUser(id))
    } catch (err) {
      console.log(err)
    }
  }
}

export default userReducer.reducer
