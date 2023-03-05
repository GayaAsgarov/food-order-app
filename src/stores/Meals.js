import { createSlice } from '@reduxjs/toolkit'

export const Meals = createSlice({
  name: 'meals',
  initialState: {
    value: [],
  },
  reducers: {
    setMealsValue: (state, action) => {
        state.value = action.payload;
    }
  },
})

export const { setMealsValue } = Meals.actions

export default Meals.reducer