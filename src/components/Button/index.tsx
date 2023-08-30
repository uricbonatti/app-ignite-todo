import { TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import theme from '../../theme';

type Props = {
  onPress?: () => void;
};

export function Button({ onPress = () => {} }: Props) {
  const [buttonStyle, setButtonStyle] = useState(styles.button);
  function handlePressIn() {
    setButtonStyle(styles.buttonPressed);
  }
  function handlePressOut() {
    setButtonStyle(styles.button);
  }

  return (
    <TouchableOpacity
      style={buttonStyle}
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <Feather name="plus-circle" size={16} color={theme.COLORS.GRAY_100} />
    </TouchableOpacity>
  );
}
