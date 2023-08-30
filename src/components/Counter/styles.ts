import { StyleSheet } from 'react-native';

import theme from '../../theme';

export const styles = StyleSheet.create({
  // container: {
  //   padding: 20,
  //   alignItems: 'center',
  //   justifyContent: 'center'
  // },
  container: {
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  textPrimary: {
    fontSize: theme.FONT_SIZE.LG,
    color: theme.COLORS.BLUE,
    fontWeight: 'bold',
    fontFamily: 'Inter_700Bold'
  },
  textSecundary: {
    fontSize: theme.FONT_SIZE.LG,
    color: theme.COLORS.PURPLE,
    fontWeight: 'bold',
    fontFamily: 'Inter_700Bold'
  },
  countContainer: {
    backgroundColor: theme.COLORS.GRAY_400,
    width: 26,
    height: 20,
    borderRadius: 999,
    marginLeft: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  count: {
    fontSize: theme.FONT_SIZE.SM,
    color: theme.COLORS.GRAY_200,
    fontWeight: 'bold',
    fontFamily: 'Inter_700Bold'
  }
});
