import { configureStore } from '@reduxjs/toolkit'
import users from './reducers/userReducer'
import sort from './reducers/sortReducers'
import filter from './reducers/filterReducer'
const store = configureStore({
  reducer: {
    users,
    sort,
    filter,
  },
})

export default store
