import { createSlice } from '@reduxjs/toolkit'

export const Servers = createSlice({
  name: 'servers',
  initialState: {
    value: [],
  },
  reducers: {
    setServersValue: (state, action) => {
        state.value = action.payload;
    }
  },
})

export const { setServersValue } = Servers.actions

export default Servers.reducer