import React from 'react';
import { StyleSheet, View } from 'react-native';

// Local modules
import Colors from '../../../constants/Colors';
import { ExpenceData } from '../../model/ObjectModal';
import ExpenseList from './ExpensesList';
import ExpenseSummary from './ExpenseSummary';

type Props = {
  expenses: ExpenceData[];
  periodName: string;
};

const ExpensesOutput: React.FC<Props> = (props) => {
  return (
    <View style={styles.container}>
      <ExpenseSummary expenses={props.expenses} periodName={props.periodName} />
      <ExpenseList expenses={props.expenses} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 24,
    backgroundColor: Colors.common.primary700
  }
});

export default ExpensesOutput;
