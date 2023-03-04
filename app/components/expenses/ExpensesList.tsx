import React from 'react';
import { FlatList } from 'react-native';

// Local Modules
import { ExpenseData } from '../../model/ObjectModal';
import ExpenseItem from './ExpenseItem';

type Props = {
  expenses: ExpenseData[];
};

const ExpenseList: React.FC<Props> = (props) => {
  return (
    <FlatList
      data={props.expenses}
      renderItem={({ item }) => <ExpenseItem item={item} />}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ExpenseList;
