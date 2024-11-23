import React from "react";
import { Text, View, FlatList, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useFonts } from "expo-font";
import Header from "@/app/components/header";

export default function HomeEmpty () {


  return (
    <View style={styles.container}>
      <Text>HELDVDFVppokjLO</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#black",
  },

  fabText: {
    color: "white",
    fontSize: 24,
  }
});
