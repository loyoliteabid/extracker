import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Configs } from '../../../configs';
import Colors from '../../../constants/Colors';
import { ExpenceData } from '../../model/ObjectModal';
import { Text } from '../Themed';

type Props = {
  expenses: ExpenceData[];
  periodName: string;
};

const ExpenseSummary: React.FC<Props> = (props) => {
  const sum = props.expenses.reduce((total, expense) => total + expense.amount, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.period}>{props.periodName}</Text>
      <Text style={styles.sum}>{`${Configs.currency} ${sum.toFixed(2)}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: Colors.common.primary50,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  period: {
    fontSize: 12,
    color: Colors.common.primary400
  },
  sum: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.common.primary500
  }
});

export default ExpenseSummary;
