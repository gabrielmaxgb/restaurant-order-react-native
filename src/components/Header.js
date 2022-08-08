import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.lighHeaderAndIconContainer}>
        <Text style={styles.lightHeader}>Grab your</Text>
        <Ionicons name="fast-food-outline" size={44} color="black" />
      </View>
      <Text style={styles.boldHeader}>delicious meal!</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",

    marginTop: 60,
    marginHorizontal: 25,
  },
  lightHeader: {
    fontSize: 35,
    backgroundColor: "black",
    color: "white",
    padding: 10,
    borderRadius: 6,
    marginRight: 50,
  },
  lighHeaderAndIconContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  boldHeader: {
    fontSize: 40,
    fontWeight: "bold",
  }
})