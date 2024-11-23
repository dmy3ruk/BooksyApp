import React from "react";
import { Text, View, FlatList, StyleSheet, TouchableOpacity } from "react-native";

import Header from "@/app/components/header";
import Nav from "@/app/components/navigation";

 const Search = () =>{
    return (
    <View style={styles.container}>
        <Header />
        <Text>search</Text>
    </View>
    )
} 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F1F8FF",
    },
    text:{
        justifyContent: "center"
    }
    })
export default Search;