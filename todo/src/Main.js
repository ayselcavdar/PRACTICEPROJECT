/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import React, {useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Button,
  TextInput,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  FlatList,
} from 'react-native';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo'

export default function App() {
  const [counter, setCounter] = useState(0);
  const updateCounter = () => setCounter(counter + 1);
  const [todos, setTodos] = useState([
    {text: 'buy coffee ☕', key: '1'},
    {text: 'create a todo app 💻', key: '2'},
    {text: 'play on the switch 🎮', key: '3'},
  ]);
  const pressHandler =(key) => {
    setTodos((prevTodos)=>{
      return prevTodos.filter(todo => todo.key !== key);
    });
  };
  const submitHandler = (text) => {
    setTodos((prevTodos) => {
      return [
        {text: text, key: Math.random().toString()},
        ...prevTodos
      ];
    });
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#546E7A'}}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'android' ? null : 'padding'}>
        {/** header */}
        <View style={styles.container}>
          <View>
            <Text style={styles.text}>TODO</Text>
          </View>
          <View>
            <Text style={styles.text}> {counter}</Text>
          </View>
        </View>
        {/** to form */}
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({item}) => (
             <TodoItem item={item}
              pressHandler={pressHandler} />
            )}
          />
        </View>
        {/** footer */}
        <View
          style={{
            justifyContent: 'flex-end',
            flex: 1,
            alignItems: 'center',
          }}>
          <View style={styles.inputContainer}>
           <AddTodo submitHandler ={submitHandler}/>

            
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 5,
    height: Dimensions.get('window').height * 0.1,
  },
  text: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#ff6f00',
  },
  content: {},
  list: {
    paddingHorizontal: 30,
  },
  inputContainer: {
    backgroundColor: '#b2dfdb',
    width: Dimensions.get('window').width * 0.95,
    height: Dimensions.get('window').height * 0.2,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Platform.OS === 'android' ? 20 : 30,
  },
  buttonContainer: {
    backgroundColor: '#546E7A',
    width: Dimensions.get('window').width * 0.5,
    height: Dimensions.get('window').height * 0.07,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontWeight: 'bold',
    width: Dimensions.get('window').width * 0.85,
    height: Dimensions.get('window').height * 0.06,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginBottom: 25,
  },
});