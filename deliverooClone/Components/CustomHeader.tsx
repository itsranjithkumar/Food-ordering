import { View, Text, SafeAreaView,StyleSheet,TouchableOpacity,Image} from 'react-native'
import React, { useRef } from 'react'
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import { Link } from 'expo-router';
import { TextInput } from 'react-native-gesture-handler';
import BottomSheet from './BottomSheet';
import { BottomSheetModal } from '@gorhom/bottom-sheet';

const SearchBar = () => (
  <View style={styles.searchContainer}>
    <View style={styles.searchSection}>
      <View style={styles.searchField}>
        <Ionicons style={styles.searchIcon} name="ios-search" size={20} color={Colors.medium}/>
        <TextInput style={styles.input}placeholder="Restaurants, groceries, dishes"/>
    </View>
    <Link href={'/(modal)/filter'} asChild>
      <TouchableOpacity style={styles.optionButton}>
        <Ionicons name="options-outline" size={20} color={Colors.primary}/>
      </TouchableOpacity>
      </Link>
    </View>
    </View>
  
)

const CustomHeader = () => {
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const openModel = () => {
    bottomSheetRef.current?.present();
  }
  return (
    <SafeAreaView style={styles.safeArea}>
      <BottomSheet ref={bottomSheetRef}/>
      <View style={styles.container}>
     <TouchableOpacity onPress ={openModel}>
       <Image style = {styles.bike}source={require('../assets/images/bike.png')} />
     </TouchableOpacity>

     <TouchableOpacity style={styles.titleContainer} onPress ={openModel}>
      <Text>Delivery.Now</Text>
      <View style={styles.locationName}>
        <Text style={styles.subtitle}>London</Text>
        <Ionicons name="chevron-down" size={20} color={Colors.primary}/>
        </View>
     </TouchableOpacity>

     <TouchableOpacity style={styles.profileButton}>
       <Ionicons name="person-outline" size={20} color={Colors.primary}/>
      {/* <Text>Home</Text> */}
     </TouchableOpacity>
      </View>
      <SearchBar></SearchBar>
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
  title:{
    fontSize:14,
    color: Colors.medium,
  },

  locationName: {
    flexDirection:'row', 
    alignItems:'center'},

  subtitle:{
     fontSize: 18,
     fontWeight: 'bold',
  },
  profileButton:{
    backgroundColor: Colors.lightGrey,
    padding: 10,
    borderRadius: 50,
  },
  searchContainer: {
  height: 60,
  backgroundColor: '#fff', 
  },

     

searchSection:{
  flexDirection:'row',
  gap:10,
  flex:1,
  paddingHorizontal:20,
  alignItems:'center',
},
searchField:{
  flex:1,
  backgroundColor: Colors.lightGrey,
  borderRadius:8,
  flexDirection:'row',
  alignItems:'center',
},
input:{
  padding:10,
  color:Colors.mediumDark,
},
searchIcon:{
   paddingLeft:10,
},
optionButton:{
    padding:10,
    borderRadius:8,

},


});




export default CustomHeader;