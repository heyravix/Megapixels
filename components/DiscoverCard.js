import {View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const DiscoverCard =({
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
        <Image source={{uri: imgUrl}} resizeMode="cover" style={styles.image} borderRadius={10} />
 
 
       </View>
      <View style={styles.categoriesContainer}>
        </View>
    
        </TouchableOpacity>
    );
};

export default DiscoverCard;

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
          height:150,
        width:150,
        borderRadius:10,
        elevation:5,
        },
        text: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        }
    
    });
    