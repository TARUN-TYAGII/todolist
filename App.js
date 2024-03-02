// App.js

import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import TaskList from './components/TaskList';
import tasksData from './data/task';
import Header from './components/Header';
import AddTodo from './components/AddTodo';

export default function App() {
  const [tasks, setTasks] = useState(tasksData);

  function onDelete(id){
    const filteredData = tasks.filter((task) => task.id !== id);
    setTasks(filteredData);
  }

  function onEdit(id, title) {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, title: title };
      }
      return task;
    });
    setTasks(updatedTasks);
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <AddTodo tasks={tasks} setTasks={setTasks}/>
      <TaskList tasks={tasks} onDelete={onDelete} onEdit={onEdit}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
