import { View, Text, ScrollView, StyleSheet, Image } from 'react-native'
import React from 'react'
import { restaurants} from '@/assets/data/home';
import { Link } from 'expo-router';

const Restaurants = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}
    contentContainerStyle={{
      padding:15,
    }}>
      {restaurants.map((Restaurants
      , index) => (
        <Link href={'/'} key={index} asChild>
          <View style={styles.categoryCard} key={index}>
       
        </View>
        </Link>
      ))}
    </ScrollView>  
  );
};

const styles = StyleSheet.create({
  categoryCard: {
    width: 100,
    height: 100,
    backgroundColor: '#fff',
    marginEnd: 10,
    elevation:2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height:4,
    },
    shadowOpacity:0.06,
    borderRadius: 4,
  },
  categoryText: {
    padding: 5,
    fontSize: 12,
    fontWeight: 'bold',
  }
});

export default Restaurants;