
import {  StyleSheet,  View,  Dimensions,  
    SafeAreaView, Image, TouchableOpacity, ImageBackground,StatusBar,Text} from 'react-native';
  import React from 'react';
  import WallPaperManager from "react-native-set-wallpaper";

  const {width, height} = Dimensions.get('screen');

  const FullScreen = ({route, navigation}) =>{

    var imgUrl = route.params.url;

    return <View style={{height, width, backgroundColor: '#fff'}}>
           <StatusBar hidden={true} />

            <ImageBackground source={{uri: imgUrl}}
              style={{height, width}} >
                  <TouchableOpacity style={styles.buttonView} onPress={() => 
      WallPaperManager.setWallpaper({ uri: imgUrl }, (res) => {
        console.log(res);
      }) }>
                  
                    <Text style={styles.Button}>Set Wallpaper</Text>
                  </TouchableOpacity>
              </ImageBackground>

    </View>


  }

  export default FullScreen;
  const styles = StyleSheet.create({
    Button:{
      fontSize:24,
    alignItems: 'center',
    color:'white',
 
    
     },
     buttonView:{
      width:width,
   height: 50,
  backgroundColor: '#000000c0',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute', //Here is the trick
  bottom: 0,
  borderRadius:10,
  padding:5
      }

  });