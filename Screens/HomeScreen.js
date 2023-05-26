import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import MyComponent from '../Components/Library/gptInputButton';


const HomeScreen = () => {
  const [enteredTodo, setEnteredTodo] = useState('')

    function todoInputHandler(enteredText) {
      setEnteredTodo(enteredText);
    }
    function addTodoHandler() {
      console.log(enteredTodo);
    }
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        <View style={styles.scrollItem}>
          <Text style={styles.scrollText}>Nap Rec</Text>
        </View>
        <View style={styles.scrollItem}>
          <Text style={styles.scrollText}>Nap Rec</Text>
        </View>
        <View style={styles.scrollItem}>
          <Text style={styles.scrollText}>Nap Rec</Text>
        </View>
      </ScrollView>
      <ScrollView horizontal={true}>
        <View style={styles.scrollItem}>
          <Text style={styles.scrollText}>Downstate Rec</Text>
        </View>
        <View style={styles.scrollItem}>
          <Text style={styles.scrollText}>Downstate Rec</Text>
        </View>
        <View style={styles.scrollItem}>
          <Text style={styles.scrollText}>Downstate Rec</Text>
        </View>
      </ScrollView>
      <TextInput style={styles.inputContainer} onChangeText={todoInputHandler}></TextInput>
      <TouchableOpacity style={styles.buttonContainer} onPress={addTodoHandler}>
        <Text style={styles.buttonText}> Submit </Text>
      </TouchableOpacity> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  scrollItem: {
    backgroundColor: '#cccccc',
    height: 80,
    width: 100,
    margin: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#ffffff',
  },
  buttonContainer: {
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  inputContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
});

export default HomeScreen;
