import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Colors from '../../../constants/Colors';

type Props = {
  label: string;
  textInputProps: React.ComponentProps<typeof TextInput>;
  style?: React.ComponentProps<typeof View>['style'];
  inValid: boolean;
};

const ExpenseInput: React.FC<Props> = (props) => {
  const inputStyle: {}[] = [styles.input];

  if (props.textInputProps && props.textInputProps.multiline) {
    inputStyle.push(styles.inputMultiLine);
  }

  if (props.inValid) {
    inputStyle.push(styles.invalidInput);
  }

  return (
    <View style={[styles.inputContainer, props.style]}>
      <Text style={[styles.label, props.inValid && styles.inValidLabel]}>{props.label}</Text>
      <TextInput style={inputStyle} {...props.textInputProps} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 16
  },
  label: {
    fontSize: 12,
    color: Colors.common.primary100,
    marginBottom: 4
  },
  input: {
    backgroundColor: Colors.common.primary100,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
    color: Colors.common.primary700
  },
  inputMultiLine: {
    minHeight: 100,
    textAlignVertical: 'top' // as suggested by doc for multiline
  },
  inValidLabel: {
    color: Colors.common.error500
  },
  invalidInput: {
    backgroundColor: Colors.common.error50
  }
});

export default ExpenseInput;
