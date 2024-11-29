import React, { useEffect, useState } from "react";
import { Text, View, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";
import * as DocumentPicker from 'expo-document-picker';
import { supabase } from "@/lib/supabase";
import uuid from 'react-native-uuid';
import Header from "@/app/components/header";
import {router} from "expo-router";

const HomeScreen = () => {
  const [fontsLoaded] = useFonts({
    CustomFont: require('@/assets/fonts/ADLaMDisplay-Regular.ttf'),
    TitleFont: require('@/assets/fonts/PTSerifCaption-Regular.ttf'),
    AuthorFont: require('@/assets/fonts/PTSerifCaption-Italic.ttf'),
  });

  const [userId, setUserId] = useState('');
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getUser();
    getFiles();
  }, []);

  useEffect(() => {
    console.log('Books updated:', books);  // This will run when books state changes
  }, [books]);

  const getUser = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (user != null) {
        setUserId(user.id);
      } else {
        setUserId('');
      }
    } catch (e) {
      console.error(e);
    }
  };

  const uploadFiles = async() => {
    try {
      const result = await DocumentPicker.getDocumentAsync();

      const { uri: fileUri, name: fileName, mimeType } = result;

      const { error } = await supabase
          .storage
          .from('books')
          .upload(`${userId}/${uuid.v4()}`, {
            uri: fileUri,
            name: fileName,
            type: mimeType || 'application/epub',
          });

      if (error) {
        console.log("ERRRRRROOOOOOOOR : "+error)
      } else {
        getFiles();
      }
    } catch (e) {
      console.error(e);
    }
  };

  const getFiles = async () => {
    try {
      const { data, error } = await supabase
          .storage
          .from('books')
          .list(userId + '/', {
            limit: 10,
            offset: 0,
            sortBy: { column: 'name', order: 'asc' }
          });

      if (error) {
        console.error(error);
      } else {
        setBooks(prevBooks => [...prevBooks, ...data]);
      }
    } catch (e) {
      console.error(e);
    }
  };


  if (!fontsLoaded) {
    return (
        <View style={styles.container}>
          <Text>Loading...</Text>
        </View>
    );
  }

  return (
      <View style={styles.container}>
        <Header />
        {books.length === 0 ? (
            <View style={styles.emptyContainer}>
              <View style={styles.button}>
                <Text style={styles.emptyText}>У вас ще немає доданих книжок</Text>
                <TouchableOpacity onPress={uploadFiles} style={styles.uploadButton}>
                  <Text style={styles.uploadButtonText}>Upload Book</Text>
                </TouchableOpacity>
              </View>
            </View>
        ) : (
            <FlatList
                data={books}
                renderItem={({ item }) => (
                    <View style={styles.bookItem}>
                      <Text style={styles.emptyText}>{item.name}</Text>
                    </View>
                )}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.bookList}
            />
        )}
      </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F8FF",
  },
  emptyContainer: {
    flex: 1,
    marginTop: 145,
    alignItems: 'center',
  },
  button: {
    width: '60%',
  },
  emptyText: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 27,
  },
  uploadButton: {
    backgroundColor: '#811826',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  uploadButtonText: {
    color: 'white',
    fontSize: 18,
  },
  bookList: {
    marginTop: 30,
    paddingHorizontal: 30,
  },
  bookItem: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontFamily: "TitleFont",
  },
});

export default HomeScreen;
