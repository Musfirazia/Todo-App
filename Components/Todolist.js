import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
export default function Todolist({ item, PressHandler }) {
    const myIcon = <Icon name="delete-outline" size={24} iconStyle={styles.delicon} color="#900" />;
    return (
        <View style={styles.list}>
            <Text style={styles.text}>{item.task} </Text>
            <TouchableOpacity style={styles.Icon} onPress={() => PressHandler(item.key)}>
                {myIcon}
                </TouchableOpacity>
           

        </View>

    )
}
const styles = StyleSheet.create({
    text: {
        fontSize: 18,

        padding: 16,
       
      
        flexDirection: "row",
        display: "flex",
        justifyContent: "space-between",
    }
    ,
    list: {
        borderColor: "#bbb",
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 10,
        justifyContent: "space-between",
        flexDirection:"row",
     marginTop:5,
  
    },
    Icon: {
       
        flexDirection:"row",
        paddingTop:16,
        paddingRight:10,
        display:"flex",
    
    },
    delicon:
    {

paddingBottom:"auto",

    }
});