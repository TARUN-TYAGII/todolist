// Task.js

import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const Task = ({ task, onDelete, onEdit }) => {
  const [editableTitle, setEditableTitle] = useState(task.title);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    onEdit(task.id, editableTitle);
    setIsEditing(false);
  };

  return (
    <View style={styles.task}>
      {isEditing ? (
        <TextInput
          style={styles.input}
          value={editableTitle}
          onChangeText={setEditableTitle}
          onBlur={handleSaveEdit}
        />
      ) : (
        <Text>{task.title}</Text>
      )}
      <TouchableOpacity style={styles.editButton} onPress={handleEdit}>
        <Text style={styles.editText}>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.deleteButton} onPress={() => onDelete(task.id)}>
        <Text style={styles.deleteText}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  task: {
    backgroundColor: '#f9c2ff',
    width:'100%',
    padding: 20,
    marginVertical: 8,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  editButton: {
    backgroundColor: 'lightblue',
    padding: 5,
    borderRadius: 5,
    marginRight: 5,
  },
  editText: {
    color: 'black',
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 5,
  },
  deleteText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Task;
