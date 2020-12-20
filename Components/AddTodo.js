import React, { useState } from 'react';
import { StyleSheet, View,  TouchableOpacity,Button ,TextInput } from "react-native";
export default function AddTodo({submitHandler}) {
  const [text, settext] = useState('');

    const changeHandler = (val) => {
        settext(val);
    }
    return (
        <View>
            <TextInput style={styles.input}
                placeholder="New todo..." onChangeText={changeHandler} value={text}
            />
            <Button  onPress={()=>submitHandler(text)} title="Add Todo" ></Button>
        </View>
    )
}
const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd"

    }
});