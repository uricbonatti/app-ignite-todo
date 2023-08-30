import { StyleSheet } from 'react-native';
import theme from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 20,
    backgroundColor: theme.COLORS.GRAY_400,
    borderColor: theme.COLORS.GRAY_500,
    borderWidth: 2,
    marginHorizontal: 24,
    marginBottom: 8,
    borderRadius: 8
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  description: {
    color: theme.COLORS.GRAY_100,
    fontSize: theme.FONT_SIZE.MD,
    fontFamily: theme.FONT_FAMILY.REGULAR
  },
  checkbox: {
    borderRadius: 999,
    width: 16,
    height: 16
  },
  removeButton: {
    width: 32,
    height: 32,
    borderRadius: 5,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center'
  },
  removeButtonPressed: {
    width: 32,
    height: 32,
    borderRadius: 4,
    backgroundColor: theme.COLORS.GRAY_300,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 1
  }
});
