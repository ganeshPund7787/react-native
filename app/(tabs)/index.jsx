import { View, Text, StyleSheet, ImageBackground } from "react-native";
import CofeeImgOne from "../../assets/images/pexels-chevanon-312418.jpg";

const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={CofeeImgOne}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.text}>Cofee-Shop</Text>
      </ImageBackground>
    </View>
  );
};

export default app;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    height: "100%",
    width: "100%",
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
});
