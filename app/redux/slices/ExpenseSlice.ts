import { createSlice } from '@reduxjs/toolkit'
import { ExpenseState } from '../../model/SliceModal';


const initialState: ExpenseState = {
  expenses: []
}

const ExpenseSlice = createSlice({
  name: 'expense',
  initialState,
  reducers: {
    updateExpenses: (state, action) => {
      state.expenses = action.payload;
    }
  }
})


export const { updateExpenses } = ExpenseSlice.actions;
export default ExpenseSlice.reducer;