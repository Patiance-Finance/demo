import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { TodosService } from './services/Todos';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState([]);

  const fetchTodos = async () => {
    const todosResponse = await TodosService.getTodos();
    console.log(todosResponse);
  }

  useEffect(async () => {
    fetchTodos();
  });

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text>NEW TODO:</Text>
        <Text>{newTodo}</Text>
      </View>
      <View style={styles.middle}>
        <Text>HERE MAKE A LIST OF ALL THE TODOS (do this first)</Text>
      </View>
      <View style={styles.bottom}>
        <TextInput placeholder="make an onchange, set the text, and render on top" />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  top: {
    padding: 50,
    flex: 1
  },
  middle: {
    flex: 5
  },
  bottom: {
    flex: 1
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
