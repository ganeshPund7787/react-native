import { ImageBackground, StyleSheet, Text, View } from "react-native";

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        resizeMode="cover"
        source={
          "https://images.pexels.com/photos/17516403/pexels-photo-17516403/free-photo-of-a-glass-of-coffee-with-milk-being-poured-into-it.jpeg?auto=compress&cs=tinysrgb&w=600"
        }
      >
        <Text style={styles.text}>Explre New Prices</Text>
        <Text style={styles.text}>Cold : 220$</Text>
        <Text style={styles.text}>Hot : 320$</Text>
        <Text style={styles.text}>Normal : 520$</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    gap: 10,
  },
  text: {
    color: "white",
    fontSize: 35,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  image: {
    height: "100%",
    width: "100%",
    flex: 1,
    resizeMode: "cover",
    gap: 10,
    alignItems: "center",
  },
});
