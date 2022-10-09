import { createSlice } from '@reduxjs/toolkit'

const sortReducer = createSlice({
  name: 'sort',
  initialState: { key: 'name', type: 'ascending' },
  reducers: {
    setSort(state, action) {
      return { ...state, type: action.payload }
    },
  },
})

export const { setSort } = sortReducer.actions

export default sortReducer.reducer
