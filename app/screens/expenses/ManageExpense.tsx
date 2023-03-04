import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Colors from '../../../constants/Colors';
import { RootStackParamList } from '../../model/RouteModal';
import IconButton from '../../ui/IconButton';
import MyButton from '../../ui/MyButton';

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
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <MyButton
          onPress={() => {
            navigation.goBack();
          }}
          isFlatMode
          style={styles.button}>
          Cancel
        </MyButton>
        <MyButton
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.button}>
          {isEditing ? 'Update' : 'Add'}
        </MyButton>
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
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8
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
