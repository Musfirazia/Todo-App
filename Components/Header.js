import React from 'react';
import { StyleSheet, View, Text } from "react-native";
export default function Header() {
    return (
        <View style={style.header}>
            <Text style={style.title}>
                Todo App
            </Text>
        </View>
    )
}
const style = StyleSheet.create({
    header: {
        backgroundColor: 'cyan',
height:60,
paddingTop:20,


    }
    ,
    title: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",

    }
});