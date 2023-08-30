import { View, Text, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import Checkbox from 'expo-checkbox';
import theme from '../../theme';
import { styles } from './styles';
import { Feather } from '@expo/vector-icons';
type Props = {
  onRemove: () => void;
  done?: boolean;
  description: string;
  onCheckboxChange: (value: boolean) => void;
};

export function Task({
  description,
  onRemove,
  done = false,
  onCheckboxChange = () => {}
}: Props) {
  const [isDone, setIsDone] = useState(done);
  const [removePressed, setRemoveButtonPressed] = useState(false);
  const [removePressedStyle, setRemoveButtonPressedStyle] = useState(
    styles.removeButton
  );

  function handleSetTaskAsDone(value: boolean) {
    setIsDone(value);
  }

  function handlePressInRemove() {
    setRemoveButtonPressed(true);
    setRemoveButtonPressedStyle(styles.removeButtonPressed);
  }
  function handlePressOutRemove() {
    setRemoveButtonPressed(false);
    setRemoveButtonPressedStyle(styles.removeButton);
  }

  return (
    <View style={styles.container}>
      <Checkbox
        value={isDone}
        onValueChange={(value) => {
          handleSetTaskAsDone(value);
          onCheckboxChange(value);
        }}
        color={isDone ? theme.COLORS.PURPLE_DARK : theme.COLORS.BLUE_DARK}
        style={styles.checkbox}
      />
      <View style={styles.textContainer}>
        <Text
          style={{
            ...styles.description,
            textDecorationLine: isDone ? 'line-through' : 'none'
          }}
        >
          {description}
        </Text>
      </View>
      <TouchableOpacity
        style={removePressedStyle}
        onPress={onRemove}
        onPressIn={handlePressInRemove}
        onPressOut={handlePressOutRemove}
      >
        <Feather
          name="trash-2"
          size={14}
          color={
            removePressed ? theme.COLORS.RED_DANGER : theme.COLORS.GRAY_300
          }
        />
      </TouchableOpacity>
    </View>
  );
}
