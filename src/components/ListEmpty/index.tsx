import { View, Image, Text } from 'react-native';
import taskImg from '../../assets/Task.png';
import { styles } from './styles';

export function ListEmpty() {
  return (
    <View style={styles.container}>
      <Image source={taskImg} style={styles.image} />
      <Text style={styles.bold}>
        {' '}
        {'Você ainda não tem tarefas cadastradas'}{' '}
      </Text>
      <Text style={styles.regular}>
        {' '}
        {'Crie tarefas e organize seus itens a fazer'}{' '}
      </Text>
    </View>
  );
}
