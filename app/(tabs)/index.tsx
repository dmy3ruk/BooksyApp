import React from "react";
import { Text, View, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import Rating from "@/app/components/menu";
import Nav from "@/app/components/navigation";
import Header from "@/app/components/header";
import { useFonts } from "expo-font";

type Book = {
  id: string;
  title: string;
  author: string;
  progress: number;
  cover?: string;
};

const books: Book[] = [
  { id: "1", title: "Четверте крило", author: "Ребекка Ярос", progress: 0.5, cover: "https://via.placeholder.com/100" },
  { id: "2", title: "Назва", author: "Автор", progress: 0, cover: undefined },
  { id: "3", title: "Назва", author: "Автор", progress: 0, cover: undefined },
  { id: "4", title: "Назва", author: "Автор", progress: 0, cover: undefined },
];
 const HomeScreen = () => {
  const renderBookItem = ({ item }: { item: Book }) => (     
     
    <View style={styles.bookItem}>
      <View style={styles.cover} />
      <View style={styles.bookInfo}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.author}>{item.author}</Text>
        <Rating />
        <Text style={styles.progressText}>Прогрес</Text>
        <View style={styles.progressBarContainer}>
          <View style={[styles.progressBar, { width: `${item.progress * 100}%` }]} />
        </View>
      </View>
    </View>
    
    
  );

const [fontsLoaded] = useFonts({
    CustomFont: require('../../assets/fonts/ADLaMDisplay-Regular.ttf'), 
    TitleFont:  require('../../assets/fonts/PTSerifCaption-Regular.ttf'), 
    AuthorFont: require('../../assets/fonts/PTSerifCaption-Italic.ttf'),
  });

  return (
    <View style={styles.container}>
      <Header />
        <FlatList
        data={books}
        renderItem={renderBookItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.bookList}
      />
      {/* <Nav/> */}
      <TouchableOpacity style={styles.fab}>
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F8FF",
  },
  bookList: {
    marginTop:30,
    paddingHorizontal: 30,
  },
  bookItem: {
    flexDirection: "row",
    marginBottom: 40,
    padding: 2,
    marginVertical: 5,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 2,
  },
  cover: {
    width: 100,
    height: 128,
    backgroundColor: "#d0d0d0",
    borderRadius: 4,
  },
  bookInfo: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    marginBottom: 5,
    fontFamily: "TitleFont",
    fontWeight: "regular",
  },
  author: {
    fontSize: 14,
    fontFamily: "AuthorFont",
    color: "#666",
  },
  progressText: {
    marginTop:10,
    marginBottom:6,
    fontFamily: "TitleFont",
    fontSize: 12,
    color: "#888",
  },
  progressBarContainer: {
    height: 11,
    width: 213,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    overflow: "hidden",
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#8B0000",
  },
  fab: {
    shadowOffset:{
      width: 0,
      height:4
    },
    shadowOpacity: 0.25, 
    position: "absolute",
    bottom: 80,
    right: 4,
    shadowColor: "black",
    shadowRadius:8,
    backgroundColor: "#811826",
    width: 65,
    height: 65,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  fabText: {
    color: "white",
    fontSize: 24,
  }
});

export default HomeScreen;