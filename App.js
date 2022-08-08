import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import CategoryItem from './src/components/CategoryItem';
import Header from './src/components/Header';
import Search from './src/components/Search';

const categoryOptions = [
  {
    categoryImagePath: require("./src/assets/images/burger.png"),
    categoryLabel: "Burguer",
  },
  {
    categoryImagePath: require("./src/assets/images/cake.png"),
    categoryLabel: "Cake",
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
    categoryLabel: "Smoothies",
  },
  {
    categoryImagePath: require("./src/assets/images/steak.png"),
    categoryLabel: "Steak",
  },
]

export default function App() {

  const categorieItems = () => {
    categoryOptions.map(category => {
      <CategoryItem 
        categoryImagePath={category.categoryImagePath} 
        categoryLabel={category.categoryLabel}
      />
    })  
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <Search />
      {/* <CategoryItem categoryLabel={"Burguer"} /> */}
      {categorieItems()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "center",

    // minHeight: "100%",
    // flex: 1,
    // backgroundColor: 'pink',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
