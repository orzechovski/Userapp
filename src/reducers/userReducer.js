import { createSlice } from '@reduxjs/toolkit'
import { create, getAll, del, update } from '../services/users'

const userReducer = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    setUsers(_state, action) {
      return action.payload
    },
    setUser(state, action) {
      //this id is assigned from here because the resposne is always at value id = 11
      const newUser = { ...action.payload, id: action.payload.id + Math.floor(Math.random() * 1000) }
      return [...state, newUser]
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

const { setUsers, setUser, deleteUser, updateUser } = userReducer.actions

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
export const makeUpdate = (id, user) => {
  return async (dispatch) => {
    const response = await update(id, user)
    dispatch(updateUser(response))
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
