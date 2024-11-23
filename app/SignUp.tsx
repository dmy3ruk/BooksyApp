import React, { useState } from "react";
import { Text, View, TextInput, StyleSheet, Pressable, Alert } from "react-native";
import { useRouter } from "expo-router";  // Importing useRouter from expo-router
import Header from "@/app/components/header";
import { Link } from "expo-router";
import { supabase } from "@/lib/supabase";
import { useNavigation } from '@react-navigation/native'; 

const SignUp = () => {
    // Use useNavigation hook to access the navigation object
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();  // Using useRouter for navigation

  async function signUpWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) {
      Alert.alert(error.message);
    } else {
      router.replace('/HomeEmpty')  
    }
    setLoading(false);
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.form}>
        <Text style={styles.text}>Реєстрація</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"  // Added keyboardType for better user experience
          autoCapitalize="none"  // Added autoCapitalize to prevent automatic capitalization
        />
        <TextInput
          style={styles.input}
          placeholder="Пароль"
          value={password}
          onChangeText={setPassword}
          secureTextEntry  // Added secureTextEntry for password input
        />
        <Pressable style={styles.button} onPress={signUpWithEmail} disabled={loading}>
          {loading ? (
            <Text style={styles.textButton}>реєструюсь...</Text>
          ) : (
            <Text style={styles.textButton}>Зареєструватися</Text>
          )}
        </Pressable>
        <Text style={styles.or}> Вже є акаунт? 
          <Link href={'/SignIn'} style={{ color: "#811826" }}> Увійти</Link>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F8FF",
  },
  text: {
    textAlign: "center",
    alignItems: "center",
    fontSize: 24,
    marginBottom: 28,
  },
  textButton: {
    color: "white",
  },
  input: {
    width: 330,
    height: 46,
    paddingLeft: 15,
    backgroundColor: "white",
    justifyContent: "center",
    marginBottom: 14,
    borderRadius: 10,
    borderColor: "grey",
    borderWidth: 0.5,
    color: "grey",
  },
  form: {
    marginTop: 111,
    paddingHorizontal: 30,  // Corrected paddingInline to paddingHorizontal
    justifyContent: 'center',
    alignContent: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    height: 46,
    width: 330,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#0A0C20',
  },
  or: {
    color: "grey",
    textAlign: "center",
    marginTop: 10,
  },
});

export default SignUp;
