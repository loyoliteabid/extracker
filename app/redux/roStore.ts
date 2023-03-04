import { ExpenseState } from "../model/SliceModal";
import { store } from "./store";

export const getExpenseRoState = (): ExpenseState => store ? store.getState().expense : { expenses: [] }