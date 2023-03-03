import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import Colors from '../../../constants/Colors';
import { ExpenceData } from '../../model/ObjectModal';
import { Text } from '../Themed';

type Props = {
  item: ExpenceData;
};

const ExpenseItem: React.FC<Props> = (props) => {
  return (
    <Pressable>
      <View style={styles.expenseItem}>
        <View>
          <Text style={[styles.textBase, styles.description]}>{props.item.description}</Text>
          <Text style={styles.textBase}>{props.item.date.toDateString()}</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.amount}>{props.item.amount}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  expenseItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.common.primary500,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 6,
    elevation: 3,
    shadowColor: Colors.common.gray500,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4
  },
  textBase: {
    color: Colors.common.primary50
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: 'bold'
  },
  priceContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: Colors.dark.text,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4
  },
  amount: {
    color: Colors.common.primary500,
    fontWeight: 'bold'
  }
});

export default ExpenseItem;
