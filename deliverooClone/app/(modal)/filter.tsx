import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors';


const filter = () => {
  return (
    <View style = {styles.container}>
      <Text>filter</Text>

      <View style={styles.footer}>
        <Text>Footer</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
    flex: 1,
    padding:24,
    backgroudColor:Colors.lightGrey
    },
    footer:{
      position:'absolute',
      bottom:0,
      left:0,
      right:0,
      height:100,
    }
  });

  export default filter;

  


