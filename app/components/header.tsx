

import React from "react"
import { View, Text, StyleSheet, Image } from "react-native"

const Header =() =>(
<Text style={styles.header}>Booksy</Text>
);

const styles = StyleSheet.create({
    header: {
        fontSize: 32,
        fontWeight: "bold",
        fontFamily: "CustomFont",
        textAlign: "center",
        padding: 12,
        backgroundColor: "#0A0C20",
        color: "white",
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20
      },
}
    
)

export default Header;