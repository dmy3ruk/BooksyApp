import React from "react"
import { View, Text, StyleSheet, Image } from "react-native"

const Nav =() =>(
<View style={styles.bottomNav}>
<Image source={require('../../assets/images/activeHome.png')} style={styles.navSquare} />
<Image source={require('../../assets/images/library.png')} style={styles.navSquare} />
<Image source={require('../../assets/images/find.png')} style={styles.navSquare} />
<Image source={require('../../assets/images/profile.png')} style={styles.navSquare}  />
</View>
);

const styles = StyleSheet.create({
    bottomNav: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 15,
        height:73,
        backgroundColor: "#0A0C20",
        position: "absolute",
        bottom: 0,
        width: "100%",
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20
      },
      navSquare: {
        width: 30,
        height: 32,

        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4,
      },
      iconText: {
        fontSize: 12,
        color: "#333",
      },
}
    
)

export default Nav;