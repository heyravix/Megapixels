import {View, Text, TouchableOpacity, StyleSheet, ImageBackground} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const ColorCard =({
     title,
    imgUrl,
     
}) => {

    const navigation = useNavigation();
    return(
        <TouchableOpacity onPress={() => 
            navigation.navigate('WallpaperScreen', {
            query:  title
          })  }>
        <View style={styles.categoriesContainer}>
          <View  style={{backgroundColor:imgUrl,  justifyContent: "center",
      height:50,
    width:50,
    borderRadius:10,
    elevation:2,}}></View>
        {/* <ImageBackground source={{uri: imgUrl}} resizeMode="cover" style={styles.image} borderRadius={10}>
        <Text style={styles.text}>{title}</Text>
      </ImageBackground> */}
       </View>
      <View style={styles.categoriesContainer}>
        </View>
    
        </TouchableOpacity>
    );
};

export default ColorCard;

const styles = StyleSheet.create({

   
     
    categoriesContainer:{
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal:10,
    marginTop:5,
    marginBottom:5
    
    },

    image: {
      justifyContent: "center",
      height:50,
    width:50,
    borderRadius:10,
     },
    text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    //  backgroundColor:'#000000c0', 
    }
    
    });
    