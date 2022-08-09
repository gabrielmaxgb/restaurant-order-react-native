import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './src/components/Header';
import Search from './src/components/Search';
import Categories from './src/components/Categories';
import Restaurants from './src/components/Restaurants';

const categoryOptions = [
  {
    categoryImagePath: require("./src/assets/images/burger.png"),
    categoryLabel: "Burguer",
  },
  {
    categoryImagePath: require("./src/assets/images/cake.png"),
    categoryLabel: "Dessert",
  },
  {
    categoryImagePath: require("./src/assets/images/pasta.png"),
    categoryLabel: "Pasta",
  },
  {
    categoryImagePath: require("./src/assets/images/pizza.png"),
    categoryLabel: "Pizza",
  },
  {
    categoryImagePath: require("./src/assets/images/smoothies.png"),
    categoryLabel: "Drinks",
  },
  {
    categoryImagePath: require("./src/assets/images/steak.png"),
    categoryLabel: "Steak",
  },
]

export default function App() {
  const [term, setTerm] = useState("Pizza")

  return (
    <View style={styles.container}>
      {/* <StatusBar style="auto" /> */}
      <Header />
      <Search setTerm={setTerm} />
      {/* <View> */}
        <Categories 
          categoryOptions={categoryOptions}
          term={term}
          setTerm={setTerm}
        />
      {/* </View> */}
      <Restaurants />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
