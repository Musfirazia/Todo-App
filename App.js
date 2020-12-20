/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Alert,
  Keyboard,
  TouchableNativeFeedbackComponent,
  FlatList, TouchableOpacity, TouchableWithoutFeedback
} from 'react-native';
import Header from "./Components/Header"
import Todolist from './Components/Todolist';
import AddTodo from "./Components/AddTodo";

export default function App() {
  const [todos, setTodos] = useState([{
    task: "musfira", key: "1"},
  { task: "musfira", key: "2" },
  { task: "musfira", key: "3" },
  { task: "musfira", key: "4" },
  { task: "musfira", key: "5" }
  ]);


  const PressHandler = (key) => {
    setTodos((prevTodos) => {
    return prevTodos.filter(todo=> todo.key != key)
    })
  }
  const submitHandler =(task)=>{
    if(task.length > 3){
      // setTodos('');
    setTodos((prevTodos)=>{
      return [
        {task:task,key:Math.random().toString()},
        ...prevTodos];
    });}
    else {
      Alert.alert('OOPS', 'Todo must be over 3 characters long', [
        {text: 'Understood', onPress: () => console.log('alert closed') }
      ]);
    }
  }
  return (
   <TouchableWithoutFeedback onPress={()=>{
     Keyboard.dismiss();
   }}>
      <View style={style.container}>
      <Header />
      <View style={style.content}>
        <AddTodo submitHandler={submitHandler}/>
        <FlatList data={todos} keyExtractor={(item) => item.key} renderItem={({ item }) => (<Todolist item={item} PressHandler={PressHandler} />)} />
      </View>
    </View >
   </TouchableWithoutFeedback>
  );
  
  //   const [people, setPeople] = useState([{
  //     name: "musfira", id: "1"},
  //   { name: "musfira", id: "2" },
  //   { name: "musfira", id: "3" },
  //   { name: "musfira", id: "4" },
  //   { name: "musfira", id: "5" },
  //   {name: "musfira", id: "6"},
  //   { name: "musfira", id: "7" },
  //   { name: "musfira", id: "8" },
  //   { name: "musfira", id: "9" },
  //   { name: "musfira", id: "10" },
  //   ])
  //   const PressHandler=(id)=>{
  // setPeople((prevPeople)=>{
  //  return prevPeople.filter((people)=>people.id != id)
  // })
  //   }
  //   return (
  //     <>
  //     <View style={style.container}>
  //     <FlatList numColumns={2} data={people} keyExtractor={(item)=>item.id}
  //     renderItem={({item})=>(
  //       <TouchableOpacity onPress={()=>PressHandler(item.id)}><Text style={style.item}>{item.name}</Text></TouchableOpacity>)}
  //     />
  // </View>
  {/* <ScrollView>
      <View style={style.container}>
        {people.map((item) => {
          return (
            <View style={style.item} key={item.key}>
              <Text>{item.name}</Text>
            </View>
          )
        })}
      </View>
          
    </ScrollView> */}
  // </>
  // );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
  },
  item: {
    fontSize: 20,
    marginTop: 20,
    padding: 30,
  },
  content: {
    padding: 30,
    flex:1,
  }

});
