
import {  StyleSheet,  View,  Dimensions,  
    SafeAreaView, Image, TouchableOpacity, ImageBackground,StatusBar,Text} from 'react-native';
  import React, {useState} from 'react';
import ManageWallpaper, {TYPE} from 'react-native-manage-wallpaper';
import BottomOption from './BottomOption';
import Ionicons from 'react-native-vector-icons/Ionicons';

  const {width, height} = Dimensions.get('screen');

   

  const FullScreen = ({route, navigation}) =>{
    const [isBottomMenuShown, setIsBottomMenuShown] = useState(false);
 
    var imgUrl = route.params.url;

 

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#030318'} />

      <Image source={{uri: imgUrl }} style={styles.backgroundImage} />

      <View
        style={[
          styles.moreContainer,
          {opacity: 0.7, backgroundColor: '#030318'},
        ]}></View>

      <View style={styles.moreContainer}>
        
        <TouchableOpacity
          style={styles.button}
          onPress={() => setIsBottomMenuShown(true)}>
          <Ionicons name="image-outline" color={'#fff'} size={30} />
          <Text style={{color: '#fff'}}>Set Wallpaper</Text>
        </TouchableOpacity>
      </View>

      {/* bottom sheet */}
      <BottomOption
        isBottomMenuShown={isBottomMenuShown}
        setIsBottomMenuShown={setIsBottomMenuShown}
        url={imgUrl}
      />
    </View>
  );


  // new






    // return <View style={{height, width, backgroundColor: '#fff'}}>
    //        <StatusBar hidden={true} />

    //         <ImageBackground source={{uri: imgUrl}}
    //           style={{height, width}} >
    //               <TouchableOpacity style={styles.buttonView} onPress={() => 
    //    ManageWallpaper.setWallpaper(
    //     {
    //       uri: imgUrl,
    //     },
    //     this._callback,
    //     TYPE.HOME,
    //   )}>
                  
    //                 <Text style={styles.Button}>Set Wallpaper</Text>
    //               </TouchableOpacity>
    //           </ImageBackground>

    // </View>


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
  position: 'absolute',  
  bottom: 0,
  borderRadius:10,
  padding:5
      },


      container: {
        flex: 1,
        // backgroundColor: '#030318',
        backgroundColor: '#030318',
      },
      text: {
        color: '#fff',
      },
      backgroundImage: {
        height: height,
        width: width,
      },
      moreContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 100,
         justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
      },
      button: {
        alignItems: 'center',
      },

  });