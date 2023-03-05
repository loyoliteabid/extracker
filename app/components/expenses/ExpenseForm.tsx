import React, { useCallback, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Colors from '../../../constants/Colors';
import { ExpenseData } from '../../model/ObjectModal';
import MyButton from '../../ui/MyButton';
import { getFormattedDate } from '../../utils/date';
import ExpenseInput from './ExpenseInput';

type Props = {
  isEditing: boolean;
  onCancel: () => void;
  onSubmit: (obj: ExpenseData) => void;
  defaultValues: ExpenseData | undefined;
};

const ExpenseForm: React.FC<Props> = (props) => {
  const [isFormValid, setIsFormValid] = useState(true);
  const [inputValues, setInputValues] = useState({
    id: props.defaultValues ? props.defaultValues.id : '' + new Date().getTime(),
    amount: {
      value: props.defaultValues ? props.defaultValues.amount.toString() : '',
      isValid: true
    },
    date: {
      value: props.defaultValues
        ? getFormattedDate(props.defaultValues.date)
        : getFormattedDate(new Date()),
      isValid: true
    },
    description: {
      value: props.defaultValues ? props.defaultValues.description : '',
      isValid: true
    }
  });

  const submitHandler = useCallback(() => {
    const expenseData: ExpenseData = {
      id: inputValues.id,
      amount: +inputValues.amount.value,
      date: new Date(inputValues.date.value),
      description: inputValues.description.value
    };

    const isAmountValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const isDateValid = expenseData.date.toString() !== 'Invalid Date';
    const isDescriptionValid = expenseData.description.trim().length > 0;

    if (!isAmountValid || !isDateValid || !isDescriptionValid) {
      setInputValues((obj) => ({
        ...obj,
        amount: { value: obj.amount.value, isValid: isAmountValid },
        date: { value: obj.date.value, isValid: isDateValid },
        description: { value: obj.description.value, isValid: isDescriptionValid }
      }));
      setIsFormValid(false);
      return;
    }

    props.onSubmit(expenseData);
  }, [inputValues]);

  function inputChangeHandler(inputIdentifier: keyof ExpenseData, enteredValue: string) {
    setIsFormValid(true);
    setInputValues((obj) => ({
      ...obj,
      [inputIdentifier]: { value: enteredValue, isValid: true }
    }));
  }

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputRow}>
        <ExpenseInput
          style={styles.rowInput}
          label="Amount"
          textInputProps={{
            keyboardType: 'decimal-pad',
            value: inputValues.amount.value,
            onChangeText: inputChangeHandler.bind(this, 'amount')
          }}
          inValid={!inputValues.amount.isValid}
        />
        <ExpenseInput
          style={styles.rowInput}
          label="Date"
          textInputProps={{
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            value: inputValues.date.value,
            onChangeText: inputChangeHandler.bind(this, 'date')
          }}
          inValid={!inputValues.date.isValid}
        />
      </View>
      <ExpenseInput
        label="Description"
        textInputProps={{
          multiline: true,
          autoCorrect: false,
          autoCapitalize: 'none',
          value: inputValues.description.value,
          onChangeText: inputChangeHandler.bind(this, 'description')
        }}
        inValid={!inputValues.description.isValid}
      />
      {isFormValid !== true && (
        <Text style={styles.errorText}>Invalid input values, Please check your entered data !</Text>
      )}
      <View style={styles.buttonsContainer}>
        <MyButton onPress={props.onCancel} isFlatMode style={styles.button}>
          Cancel
        </MyButton>
        <MyButton onPress={submitHandler} style={styles.button}>
          {props.isEditing ? 'Update' : 'Add'}
        </MyButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    marginTop: 40
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.dark.text,
    marginVertical: 24,
    textAlign: 'center'
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  rowInput: {
    flex: 1
  },
  errorText: {
    textAlign: 'center',
    color: Colors.common.error500,
    margin: 8
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8
  }
});

export default ExpenseForm;
