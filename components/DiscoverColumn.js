import {View, Text, ScrollView,TouchableOpacity,StyleSheet,Image,Dimensions,ImageBackground } from 'react-native'
import React from 'react' 
 import { useNavigation } from '@react-navigation/native';

 const WIDTH = Dimensions.get('window').width

const DiscoverColumn = ({title}) => {
const navigation = useNavigation();

  return (
      <View>
          <View>
          <Text style={{fontSize:18 , marginStart:10, padding:10 , fontWeight:'bold' }}>{title}</Text>
          </View>

          <View
          style={{flexDirection:'column'}}>

            <View style={styles.imageRow}>

            <TouchableOpacity onPress={() => 
                navigation.navigate('WallpaperScreen', {
                query:  "Flowers"
                })  }>
              <View style={styles.categoriesContainer}>
                   <ImageBackground source={{uri:"https://images.pexels.com/photos/46216/sunflower-flowers-bright-yellow-46216.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}} resizeMode="cover" style={styles.image}  borderRadius={10}  >
                <Text style={styles.text}>Flowers</Text>
                </ImageBackground>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => 
                navigation.navigate('WallpaperScreen', {
                query:  "Nature"
                })  }>
              <View style={styles.categoriesContainer}>
              <ImageBackground source={{uri:"https://images.pexels.com/photos/1757363/pexels-photo-1757363.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}} resizeMode="cover" style={styles.image}  borderRadius={10}  >
                <Text style={styles.text}>Nature</Text>
                </ImageBackground>
               </View>
            </TouchableOpacity>

            </View>
          
              <View style={styles.imageRow}>

            <TouchableOpacity onPress={() => 
                navigation.navigate('WallpaperScreen', {
                query:  "Animals"
                })  }>
              <View style={styles.categoriesContainer}>
              <ImageBackground source={{uri:"https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}} resizeMode="cover" style={styles.image}  borderRadius={10}  >
                <Text style={styles.text}>Animals</Text>
                </ImageBackground>
               </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => 
              navigation.navigate('WallpaperScreen', {
              query:  "Art"
              })  }>
            <View style={styles.categoriesContainer}>
            <ImageBackground source={{uri:"https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}} resizeMode="cover" style={styles.image}  borderRadius={10}  >
                <Text style={styles.text}>Art</Text>
                </ImageBackground>
             </View>
            </TouchableOpacity>

            </View>

            <View style={styles.imageRow}>

            <TouchableOpacity onPress={() => 
              navigation.navigate('WallpaperScreen', {
              query:  "Music"
              })  }>
            <View style={styles.categoriesContainer}>
            <ImageBackground source={{uri:"https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}} resizeMode="cover" style={styles.image}  borderRadius={10}  >
                <Text style={styles.text}>Music</Text>
                </ImageBackground>
             </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => 
              navigation.navigate('WallpaperScreen', {
              query:  "Games"
              })  }>
            <View style={styles.categoriesContainer}>
            <ImageBackground source={{uri:"https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}} resizeMode="cover" style={styles.image}  borderRadius={10}  >
                <Text style={styles.text}>Games</Text>
                </ImageBackground>
             </View>
            </TouchableOpacity>

            </View>

            <View style={styles.imageRow}>

            <TouchableOpacity onPress={() => 
              navigation.navigate('WallpaperScreen', {
              query:  "Places"
              })  }>
            <View style={styles.categoriesContainer}>
            <ImageBackground source={{uri:"https://images.pexels.com/photos/417054/pexels-photo-417054.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}} resizeMode="cover" style={styles.image}  borderRadius={10}  >
                <Text style={styles.text}>Places</Text>
                </ImageBackground>
             </View> 
            </TouchableOpacity>

            <TouchableOpacity onPress={() => 
              navigation.navigate('WallpaperScreen', {
              query:  "Space"
              })  }>
            <View style={styles.categoriesContainer}>
            <ImageBackground source={{uri:"https://images.pexels.com/photos/1274260/pexels-photo-1274260.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}} resizeMode="cover" style={styles.image}  borderRadius={10}  >
                <Text style={styles.text}>Space</Text>
                </ImageBackground>
             </View>
            </TouchableOpacity>

            </View>

            <View style={styles.imageRow}>

          <TouchableOpacity onPress={() => 
            navigation.navigate('WallpaperScreen', {
            query:  "Sports"
            })  }>
          <View style={styles.categoriesContainer}>
          <ImageBackground source={{uri:"https://images.pexels.com/photos/773063/pexels-photo-773063.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}} resizeMode="cover" style={styles.image}  borderRadius={10}  >
              <Text style={styles.text}>Sports</Text>
              </ImageBackground>
          </View> 
          </TouchableOpacity>

          <TouchableOpacity onPress={() => 
            navigation.navigate('WallpaperScreen', {
            query:  "Technology"
            })  }>
          <View style={styles.categoriesContainer}>
          <ImageBackground source={{uri:"https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}} resizeMode="cover" style={styles.image}  borderRadius={10}  >
              <Text style={styles.text}>Technology</Text>
              </ImageBackground>
          </View>
          </TouchableOpacity>

          </View>
          

          </View>
      </View>
  )
}

export default DiscoverColumn;
const styles = StyleSheet.create({

  
    
categoriesContainer:{
    justifyContent: 'space-between',
    flexDirection:'row',
    alignItems: 'center',
    paddingHorizontal:10,
    marginTop:5,
    marginBottom:5,
     
    },
    imageRow:{
      flexDirection:'row' , 
      justifyContent: 'center',
      marginTop:5,
      marginBottom:5,
      },

    image: {
       height:100,
    width:WIDTH/2-30,
    justifyContent: "center",
    elevation:5,

  
      },
      text: {
      color: "white",
      fontSize: 16,
      fontWeight: "bold",
      textAlign: "center",
      //  backgroundColor:'#000000c0', 
      }

});