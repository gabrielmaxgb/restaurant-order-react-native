import React from 'react'
import { FlatList, View } from 'react-native'
import CategoryItem from './CategoryItem';

export default function Categories(props) {
  const {
    categoryOptions,
    term,
    setTerm,
  } = props

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
    <View>
      <FlatList 
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(category) => category.categoryLabel}
        data={categoryOptions} 
        renderItem={renderItem}
      />
    </View>
  )
}
