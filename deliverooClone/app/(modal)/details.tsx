import { View, Text, StyleSheet,Image} from 'react-native';
import React, { useLayoutEffect } from 'react';
import ParallaxScrollView from '@/Components/ParallaxScrollView';
import Colors from '@/constants/Colors';
import { restaurant } from '@/assets/data/restaurant'
import { useNavigation } from 'expo-router';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { ScreenStackHeaderRightView } from 'react-native-screens';

  


const Details = () => {
const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTransparent: true,
      headerTitle: '',
      headerTintColor: Colors.primary,
      headerLeft: () => (
      <TouchableOpacity onPress={()=> navigation.goBack()} style={styles.roundButton}>
        <Ionicons name ='arrow-back' size={24} color= {Colors.primary} />

      </TouchableOpacity>),
    
    
    headerRight: () => 
      <View style={styles.bar}>
        <TouchableOpacity  style={styles.roundButton}>
          <Ionicons name="share-outline" size={24} color={Colors.primary} />

        </TouchableOpacity>

        <TouchableOpacity  style={styles.roundButton}>
        <Ionicons name="search-outline" size={24} color= {Colors.primary} />

      </TouchableOpacity>

        
      </View>


    });
  }, []);

  return (
    <>
      <ParallaxScrollView backgroundColor={'#fff'} 
      style={{flex:1}} 
      parallaxHeaderHeight={250} 
      stickyHeaderHeight={120}
      renderBackground={() => <Image source = {restaurant.img} style={{height:300,width: '100%'}}/>}
      contentBackgroundColor={Colors.lightGrey}
        renderStickyHeader={() => (
          <View key ="sticky-header" style={styles.stickySection}>
              <Text style={styles.stickySectionText}>{restaurant.name}</Text>
          </View>
        )}>
        
        <View style={styles.detailsContainer}>
          <Text style={styles.restaurantName}>{restaurant.name}</Text>
          <Text style={styles.restaurantDescription}>
            {restaurant.delivery} . {restaurant.tags.map((tag, index)=> `${tag}${index < restaurant.tags.length - 1 ? '.' : ''}` )
          }

          </Text>
        </View>
      </ParallaxScrollView>
    </>
  );
  
  ;
};

const styles = StyleSheet.create({
  detailsContainer: {
    backgroundColor: Colors.lightGrey,
  },
  stickySection: {
    backgroundColor: '#fff',
    marginLeft:70,
    height:90,
    justifyContent:'flex-end'
  },
  roundButton: {
    width:48,
    height:40,
    borderRadius:20,
    backgroundColor:'#fff',
    alignItems: 'center'
  },
  bar:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap:10,
  },
  stickySectionText:{
    fontSize:20,
    margin:10,
  },
  restaurantName:{
    fontSize:20,
    margin:16,

  },
  restaurantDescription: {
    fontSize:16,
    margin:16,
    lineHeight:22,
    color:Colors.medium,

  },
});

export default Details;