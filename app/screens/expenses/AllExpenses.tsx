import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';

// Local modules
import ExpensesOutput from '../../components/expenses/ExpensesOutput';
import { RootState } from '../../redux/store';

const AllExpenses = () => {
  const { expenses } = useSelector((state: RootState) => state.expense);

  return (
    <View>
      <ExpensesOutput expenses={expenses} periodName={'Total'} />
    </View>
  );
};

export default AllExpenses;
