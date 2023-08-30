import { StyleSheet } from 'react-native';
import theme from '../../theme';

export const styles = StyleSheet.create({
  button: {
    width: 52,
    height: 52,
    borderRadius: 5,
    backgroundColor: theme.COLORS.BLUE_DARK,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonPressed: {
    width: 52,
    height: 52,
    borderRadius: 5,
    backgroundColor: theme.COLORS.BLUE,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 1
  },
  buttonText: {
    color: theme.COLORS.WHITE
  }
});
