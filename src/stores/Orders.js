import { createSlice } from '@reduxjs/toolkit'

export const Orders = createSlice({
  name: 'orders',
  initialState: {
    value: [],
  },
  reducers: {
    setOrdersValue: (state, action) => {
        state.value = action.payload;
    }
  },
})

export const { setOrdersValue } = Orders.actions

export default Orders.reducer