import { View, Text } from 'react-native';
import React, { useState } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState({
    data: null,
    loading: false,
    error: null,
  });

  const searchRestaurants = async (term) => {
    setResults({
      loading: true,
      ...results,
    })
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 5,
          term,
          location: "Brasília",
        }
      });
      setResults({
        data: response.data.businesses,
        loading: false,
        error: null,
      })
    } catch (error) {
      setResults({
        data: null,
        loading: false,
        error: "Something went wrong",
      })
      console.log(error);
    }
  };

  return [results, searchRestaurants];
};