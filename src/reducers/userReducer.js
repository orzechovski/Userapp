import { createSlice } from '@reduxjs/toolkit'
import { getAll } from '../services/users'

const userReducer = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    setUsers(_state, action) {
      return action.payload
    },
  },
})

const { setUsers } = userReducer.actions

export const initialUsers = () => {
  return async (dispatch) => {
    const resposne = await getAll()
    dispatch(setUsers(resposne))
  }
}

export default userReducer.reducer
