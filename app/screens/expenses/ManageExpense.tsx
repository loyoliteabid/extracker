import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

// local modules
import Colors from '../../../constants/Colors';
import ExpenseForm from '../../components/expenses/ExpenseForm';
import { ExpenseData } from '../../model/ObjectModal';
import { RootStackParamList } from '../../model/RouteModal';
import { RootState } from '../../redux/store';
import IconButton from '../../ui/IconButton';
import MyButton from '../../ui/MyButton';
import { addExpense, updateExpense } from './Actions';

type MyRouteProps = RouteProp<RootStackParamList, 'manageExpense'>;

type Props = {
  // Other props
};

const ManageExpense: React.FC<Props> = (props) => {
  const dispatch = useDispatch();

  const { expenses } = useSelector((state: RootState) => state.expense);

  const { params } = useRoute<MyRouteProps>();
  const editingExpenseId = params?.expenseId;
  const isEditing = !!editingExpenseId;
  const selectedExpense = expenses.find((e) => e.id === editingExpenseId);

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense'
    });
  }, [navigation, isEditing]);

  return (
    <View style={styles.container}>
      <View>
        <ExpenseForm
          isEditing={isEditing}
          onCancel={() => {
            navigation.goBack();
          }}
          onSubmit={(obj: ExpenseData) => {
            if (isEditing) {
              updateExpense(dispatch, obj.id, obj);
            } else {
              addExpense(dispatch, obj);
            }
            navigation.goBack();
          }}
          defaultValues={selectedExpense}
        />
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={Colors.common.error500}
            size={24}
            onPress={() => {
              navigation.goBack();
            }}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: Colors.common.primary800
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: Colors.common.primary200,
    alignItems: 'center'
  }
});

export default ManageExpense;
