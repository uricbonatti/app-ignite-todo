import { StyleSheet } from 'react-native';
import theme from '../../theme';

export const styles = StyleSheet.create({
  container: {
    height: 208,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopColor: theme.COLORS.GRAY_400,
    borderTopWidth: 1,
    marginHorizontal: 24
  },
  image: {
    width: 56,
    height: 56,
    marginBottom: 16
  },
  bold: {
    fontSize: theme.FONT_SIZE.MD,
    color: theme.COLORS.GRAY_300,
    fontWeight: 'bold',
    fontFamily: 'Inter_700Bold'
  },
  regular: {
    fontSize: theme.FONT_SIZE.MD,
    color: theme.COLORS.GRAY_300,
    fontWeight: 'normal',
    fontFamily: 'Inter_400Regular'
  }
});
