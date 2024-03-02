import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import tasks from '../data/task';

const AddTodo = ({ tasks, setTasks }) => {
  const [taskInput, setTaskInput] = useState('');

  const handleAddTask = () => {
    if (taskInput.trim() !== '') {
      const newTask = { id: tasks.length + 1, title: taskInput };
      setTasks([...tasks, newTask]);
      setTaskInput('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter task"
        value={taskInput}
        onChangeText={(text) => setTaskInput(text)}
      />
      <Button title="Add" onPress={handleAddTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    width:400,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default AddTodo;
