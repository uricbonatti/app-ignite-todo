import { View, Text } from 'react-native';
import { styles } from './styles';

type Props = {
  text: string;
  type?: 'PRIMARY' | 'SECUNDARY';
  count?: number;
};

export function Counter({ text, count = 0, type = 'PRIMARY' }: Props) {
  const textStyle =
    type === 'PRIMARY' ? styles.textPrimary : styles.textSecundary;

  return (
    <View style={styles.container}>
      <Text style={textStyle}>{text}</Text>
      <View style={styles.countContainer}>
        <Text style={styles.count}>{count}</Text>
      </View>
    </View>
  );
}
