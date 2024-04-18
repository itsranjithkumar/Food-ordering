import { View, Text, SafeAreaView,StyleSheet,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';

const CustomHeader = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
     <TouchableOpacity>
       <Image style = {styles.bike}source={require('../assets/images/bike.png')} />
     </TouchableOpacity>

     <TouchableOpacity style={styles.titleContainer}>
      <Text>Home</Text>
     </TouchableOpacity>

     <TouchableOpacity style={styles.profileButton}>
       <Ionicons name="person-outline" size={20} color={Colors.primary}/>
      {/* <Text>Home</Text> */}
     </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container:{
    height:60,
    // backgroundColor: 'red',
    flexDirection:'row',
    gap:20,
    alignItems:'center',
    justifyContent: 'space-between',
    paddingHorizontal:20,
  },
  bike: {

    width:30,
    height:30,
    paddingTop:50
  },
  titleContainer: {
    flex:1,
  },
  profileButton:{},
});

export default CustomHeader;