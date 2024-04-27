import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import useBasketStore from '@/store/basketStore';
import { FlatList } from 'react-native-gesture-handler';
import Colors from '@/constants/Colors';

const Basket = () => {
    const {products,total,clearCard,reduceProduct} = useBasketStore();
    const [order, setOrder] = useState(false)
  return (
    <>
      {order && (
         <Text>cool order</Text> 
      )}
         {!order && (
             <>
             <FlatList
             data={products}
             ListHeaderComponent = {<Text style ={styles.section}>Items</Text>}
             renderItem={({item})  =>(
               <View style={styles.row}>
                <Text style={{color:Colors.primary,fontSize:18}}>{item.quantity}</Text>
                <Text style={{flex:1, fontSize:18}}>{item.name}</Text>
                <Text style={{ fontSize:18}}>{item.price * item.quantity}</Text>
               </View>
         )}
             
             />
             </>
         )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 10,
    gap:20,
    alignItems: 'center',
  },
  section : {
    fontSize: 20,
    fontWeight: 'bold',
    margin:16,
  },
});

export default Basket