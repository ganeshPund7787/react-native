import { ImageBackground, StyleSheet, Text, View } from "react-native";
import img from "../../assets/images/pexels-lood-goosen-508841-1235706.jpg";

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} resizeMode="cover" source={img}>
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
