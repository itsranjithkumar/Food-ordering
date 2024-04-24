import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import Categories from '@/Components/Categories';
import { SafeAreaView } from 'react-native-safe-area-context';
import Restaurants from '@/Components/Restaurants';
import Colors from '@/constants/Colors';

const page = () => {
  return (
    <View>
      <SafeAreaView style={styles.container}>
      <ScrollView>
        <Categories/>
        <Text style ={styles.header}>
          Top picks in your neighbourhood
        </Text>
        <Restaurants/>
        <Text style ={styles.header}>
          Offers near you
        </Text>
        <Restaurants/>
      </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    top: 50,
    backgroundColor: Colors.lightGrey
    
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    paddingHorizontal: 16,
  },
})

export default page;