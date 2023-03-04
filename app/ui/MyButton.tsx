import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Colors from '../../constants/Colors';

type Props = {
  children: React.ReactNode;
  onPress: () => void;
  isFlatMode?: boolean;
  style?: React.ComponentProps<typeof View>['style'];
};

const MyButton: React.FC<Props> = (props) => {
  return (
    <View style={props.style}>
      <Pressable onPress={props.onPress} style={({ pressed }) => pressed && styles.pressed}>
        <View style={[styles.button, props.isFlatMode && styles.flat]}>
          <Text style={[styles.button && props.isFlatMode && styles.flatText]}>
            {props.children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: Colors.common.primary500
  },
  flat: {
    backgroundColor: 'transparent'
  },
  buttonText: {
    color: Colors.dark.text,
    textAlign: 'center'
  },
  flatText: {
    color: Colors.common.primary200
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: Colors.common.primary100,
    borderRadius: 4
  }
});

export default MyButton;
