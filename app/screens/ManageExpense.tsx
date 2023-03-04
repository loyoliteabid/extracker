import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import { Text, View } from '../components/Themed';
import { RootStackParamList } from '../model/RouteModal';

type MyRouteProps = RouteProp<RootStackParamList, 'manageExpense'>;

type Props = {
  // Other props
};

const ManageExpense: React.FC<Props> = (props) => {
  const { params } = useRoute<MyRouteProps>();
  const editingExpenseId = params?.expenseId;
  const isEditing = !!editingExpenseId;

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense'
    });
  }, [navigation, isEditing]);

  return (
    <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
      <Text>ManageExpense</Text>
    </View>
  );
};

export default ManageExpense;
