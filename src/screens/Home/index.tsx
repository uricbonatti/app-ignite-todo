import {
  View,
  TouchableOpacity,
  TextInput,
  Text,
  Image,
  FlatList,
  Alert
} from 'react-native';
import logoImg from '../../assets/Logo.png';

import { styles } from './styles';
import { Button } from '../../components/Button';
import theme from '../../theme';
import { useEffect, useState } from 'react';
import { ListEmpty } from '../../components/ListEmpty';
import { Counter } from '../../components/Counter';
import { Task } from '../../components/Task';

type TaskProps = {
  description: string;
  done?: boolean;
};

export function Home() {
  const [tasks, setTasks] = useState<TaskProps[]>([
    {
      description: 'teste',
      done: true
    }
  ]);
  const [completedTasks, setCompletedTasks] = useState<TaskProps[]>([]);

  const [taskDescription, setTaskDescription] = useState('');

  function updateCompletedTask() {
    const tasksDone = tasks.filter((task) => task.done);
    setCompletedTasks(tasksDone);
  }

  function handleChangeTaskStatus(description: string, value: boolean) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.description === description ? { ...task, done: value } : task
      )
    );
  }

  useEffect(() => {
    updateCompletedTask();
  }, [tasks]);

  function handleAddTask() {
    if (taskDescription.length === 0) {
      return Alert.alert(
        'Tarefa sem Descrição',
        'Não é possivel adicionar umma tarefa sem descrição'
      );
    }
    const taskAlreadyExists = tasks.filter(
      (task) => taskDescription === task.description
    );
    if (taskAlreadyExists.length > 0) {
      return Alert.alert(
        'Tarefa Exite',
        'Esta tarefa já foi cadastrada anteriormente.'
      );
    }
    setTasks((prevState) => [
      ...prevState,
      { description: taskDescription, done: false }
    ]);
    setTaskDescription('');
  }

  function handleTaskRemove(taskDescription: string) {
    Alert.alert('Remover Tarefa', `Remover a tarefa ${taskDescription}`, [
      {
        text: 'Sim',
        onPress: () => {
          setTasks((prevState) =>
            prevState.filter((task) => task.description !== taskDescription)
          );
        }
      },
      {
        text: 'Não'
      }
    ]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor={theme.COLORS.GRAY_300}
          value={taskDescription}
          onChangeText={setTaskDescription}
        />
        <Button onPress={handleAddTask} />
      </View>
      <View style={styles.counterContainer}>
        <Counter text="Criadas" type="PRIMARY" count={tasks.length} />
        <Counter
          text="Concluídas"
          type="SECUNDARY"
          count={completedTasks.length}
        />
      </View>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.description}
        renderItem={({ item }) => (
          <Task
            description={item.description}
            done={item.done}
            onRemove={() => handleTaskRemove(item.description)}
            onCheckboxChange={(value) =>
              handleChangeTaskStatus(item.description, value)
            }
          />
        )}
        ListEmptyComponent={<ListEmpty />}
      />
    </View>
  );
}
