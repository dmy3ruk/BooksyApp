import React from "react";
import { Text, View, FlatList, StyleSheet, TouchableOpacity, Button, Pressable, Alert } from "react-native";

import Header from "@/app/components/header";
import Nav from "@/app/components/navigation";
import { TextInput } from "react-native";
import { useState } from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { supabase } from "@/lib/supabase";
import { router } from "expo-router";


export default function SignIn () {
    const [email, setEmail] =useState("")
    const [password, setPassword]=useState("")
    const [loading, setLoading]=useState(false)
    async function signInWithEmail() {
      setLoading(true)
      const {error} =await supabase.auth.signInWithPassword({ email, password})
      if (error){
        Alert.alert(error.message)
      }else{
        router.push('/HomeEmpty')
      }
         
      setLoading(false)
    }
    return (
    <View style={styles.container}>
      <Header />
        <View style={styles.form}>
            <Text style={styles.text}>Вхід</Text>
            {/* <TextInput style={styles.input} placeholder="Ім'я користувача" value={username} onChangeText={setUsername}/> */}
            <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail}/>
            <TextInput  style={styles.input} placeholder="Пароль" value={password} onChangeText={setPassword}/>
            <Pressable style={styles.button} onPress={signInWithEmail} disabled={loading}>
              {loading ?<Text style={styles.textButton}>загрузка...</Text> :<Text style={styles.textButton}>Ввійти</Text>}
            </Pressable>
            <Text style={styles.or}>Немає акаунту? <Text style={{ color: "#811826"}}> Створити</Text></Text>
        </View>
        
    </View>
    )
} 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F1F8FF",  
    },
    text:{
        textAlign: "center",
        alignItems: "center",
        fontSize:24,
        marginBottom:28,
    },
    textButton:{
      color:"white"
    },
    input:{
      width:330,
      height: 46,
      paddingLeft: 15,
      backgroundColor: "white",
      justifyContent: "center",
      marginBottom: 14,
      borderRadius: 10,
      borderColor: "grey",
      borderWidth: 0.5,
      color: "grey"
    },
    form:{
      marginTop: 111,
      paddingInline: 30,
      justifyContent: 'center',
      alignContent: 'center'
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop:15,
      height:46,
      width:330,
      borderRadius: 10,
      elevation: 3,
      backgroundColor: '#0A0C20',
    },
    
    or:{ 
      color: "grey", 
      textAlign: "center", 
      marginTop: 10
    }
    })
