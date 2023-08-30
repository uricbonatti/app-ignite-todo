import { StyleSheet } from 'react-native';

import theme from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.COLORS.GRAY_600
  },
  input: {
    backgroundColor: '#1f1e25',
    borderRadius: 6,
    color: theme.COLORS.GRAY_100,
    padding: 16,
    fontSize: theme.FONT_SIZE.LG,
    flex: 1,
    marginRight: 4,
    borderColor: theme.COLORS.PURPLE_DARK,
    borderWidth: 1
  },
  form: {
    width: '100%',
    height: 54,
    flexDirection: 'row',
    marginTop: -27,
    paddingHorizontal: 24,
    alignItems: 'center'
  },
  header: {
    height: '30%',
    backgroundColor: theme.COLORS.GRAY_700,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 110,
    height: 32
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 32,
    paddingHorizontal: 24,
    marginBottom: 20
  }
});
