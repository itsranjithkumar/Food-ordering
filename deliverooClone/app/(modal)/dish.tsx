import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import {useLocalSearchParams} from 'expo-router';
import { getDishById } from '@/assets/data/restaurant';

const dish = () => {
    const {id} = useLocalSearchParams();
    const item = getDishById(+id);
  return (
    <View>
      <Text>dish</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff',
    }
})

export default dish