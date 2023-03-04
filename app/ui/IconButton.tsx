import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

type Props = {
  icon: React.ComponentProps<typeof Ionicons>['name'];
  size: number;
  color?: string;
  onPress: () => void;
};

const IconButton: React.FC<Props> = (props) => {
  return (
    <Pressable style={({ pressed }) => pressed && styles.pressed} onPress={props.onPress}>
      <View style={styles.buttonContainer}>
        <Ionicons name={props.icon} size={props.size} color={props.color} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 24,
    padding: 6,
    marginHorizontal: 8,
    marginVertical: 2
  },
  pressed: {
    opacity: 0.75
  }
});

export default IconButton;
