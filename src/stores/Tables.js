import { createSlice } from '@reduxjs/toolkit'

export const Tables = createSlice({
  name: 'tables',
  initialState: {
    value: [],
  },
  reducers: {
    setTablesValue: (state, action) => {
        state.value = action.payload;
    }
  },
})

export const { setTablesValue } = Tables.actions

export default Tables.reducer