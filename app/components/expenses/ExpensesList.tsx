import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList } from 'react-native';

// Local Modules
import { ExpenseData } from '../../model/ObjectModal';
import { ScreenNavigationProp } from '../../model/RouteModal';
import ExpenseItem from './ExpenseItem';

type Props = {
  expenses: ExpenseData[];
};

const ExpenseList: React.FC<Props> = (props) => {
  const navigation = useNavigation<ScreenNavigationProp>();

  return (
    <FlatList
      data={props.expenses}
      renderItem={({ item }) => (
        <ExpenseItem
          item={item}
          onPress={() => {
            navigation.navigate('manageExpense', { expenseId: item.id });
          }}
        />
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ExpenseList;
