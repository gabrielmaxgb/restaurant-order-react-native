import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
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

  const renderItem = ({item, index}) => {
    return <CategoryItem
      categoryLabel={item.categoryLabel} 
      categoryImagePath={item.categoryImagePath}
      index={index}
      categoryOptionsLength={categoryOptions.length}
      active={item.categoryLabel === term}
      handlePress={() => setTerm(item.categoryLabel)}
    />
  };

  return (
    <View style={styles.container}>
      {/* <StatusBar style="auto" /> */}
      <Header />
      <Search setTerm={setTerm} />
      <View>
        <FlatList 
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(category) => category.categoryLabel}
          data={categoryOptions} 
          renderItem={renderItem}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
