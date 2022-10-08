import { configureStore } from '@reduxjs/toolkit'
import users from './reducers/userReducer'
const store = configureStore({
  reducer: {
    users,
  },
})

export default store
