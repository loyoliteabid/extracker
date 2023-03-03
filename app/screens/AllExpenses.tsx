import React from 'react';
import ExpensesOutput from '../components/expenses/ExpensesOutput';
import { View } from '../components/Themed';

const AllExpenses = () => {
  return (
    <View>
      <ExpensesOutput
        expenses={[{ id: '123', description: 'hello', amount: 12, date: new Date() }]}
        periodName={'Total'}
      />
    </View>
  );
};

export default AllExpenses;
