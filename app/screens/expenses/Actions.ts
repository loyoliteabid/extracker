import { ExpenseData } from "../../model/ObjectModal";
import { updateExpenses } from "../../redux/slices/ExpenseSlice";
import { getExpenseRoState } from "../../redux/roStore";
import { AppDispatch } from "../../redux/store";

const addExpense = (dispatch: AppDispatch, expense: ExpenseData) => {
  const { expenses } = getExpenseRoState();
  const updatedExpenses = [expense, ...expenses];
  dispatch(updateExpenses(updatedExpenses));
};

const deleteExpense = (dispatch: AppDispatch, expenseId: string) => {
  const { expenses } = getExpenseRoState();
  const updatedExpenses = expenses.filter((exp) => exp.id !== expenseId);
  dispatch(updateExpenses(updatedExpenses));
};

const updateExpense = (dispatch: AppDispatch, expenseId: string, expense: ExpenseData) => {
  const { expenses } = getExpenseRoState();
  const updatedExpenses = expenses.map((exp) => exp.id === expenseId ? expense : exp);
  dispatch(updateExpenses(updatedExpenses));
}

export {
  addExpense,
  deleteExpense,
  updateExpense
}