// TaskList.js

import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Task from './Task';

const TaskList = ({ tasks , onDelete , onEdit}) => {
  return (
    <View style={styles.taskList}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Task task={item} onDelete={onDelete} onEdit={onEdit} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  taskList: {
    flex: 1,
    padding: 20,
  },
});

export default TaskList;
