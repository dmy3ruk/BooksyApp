import React from "react"
import { View, Text, StyleSheet, Image } from "react-native"


const Rating = () =>(
            <View style={styles.icons}>
                <Image source={require('../../assets/images/rating.png')} style={styles.iconSquare} />
                <Image source={require('../../assets/images/rating.png')} style={styles.iconSquare} />
                <Image source={require('../../assets/images/rating.png')} style={styles.iconSquare} />
                <Image source={require('../../assets/images/rating.png')} style={styles.iconSquare} />
                <Image source={require('../../assets/images/rating.png')} style={styles.iconSquare} />
            </View>
   
);


const styles = StyleSheet.create({
    icons: {
        flexDirection: "row",
        marginTop: 10,
        marginBottom: 5,
      },
      iconSquare: {
        width: 20,
        height: 24,
        backgroundColor: "#ddd",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10,
      },
      iconText: {
        fontSize: 12,
        color: "#333",
      },
     
})

export default Rating;