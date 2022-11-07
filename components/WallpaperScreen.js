 
 import { FlatList, StyleSheet, Text, View, Image, Dimensions,TouchableOpacity} from 'react-native';
 import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import StaggeredList from '@mindinventory/react-native-stagger-view';


const WIDTH = Dimensions.get('window').width
const {width, height} = Dimensions.get('screen');

const API_KEY = '563492ad6f91700001000001845e376b074d44bd9869a746fe799bea'
 



const WallpaperScreen = ({route, navigation}) =>{
  var searchKey = route.params.query;
 

   fetchImagesfromAPI = async()=>{
    const data= await fetch('https://api.pexels.com/v1/search?query='+searchKey+'&size=portrait&per_page=50',{
      headers: {
        'Authorization':API_KEY
      }
    })
  
    const {photos} =  await data.json();
     return photos
  }
     const [images, setImages]= React.useState(null);
  React.useEffect(()=> {
    const fetchImages = async () => {
      const images = await fetchImagesfromAPI();
  
      setImages(images);
     }
  
    fetchImages();
  }, [])
  
  if(!images){
    
    return  <View style={styles.loadingText}>
      <Text >Loading Images...</Text>

      </View>  } 
 
  return <View style={{ backgroundColor: '#fff' ,padding:5 , height:height}}>
    <View style={styles.headerContainer}>
      <Text style={styles.titleText}>{searchKey}</Text>
      <Text style={{fontSize:16,paddingLeft:10}}>50 images available...</Text>

    </View>
    <View >
    <FlatList
         data = {images}
        keyExtractor = { item => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.row}
          showsVerticalScrollIndicator={false}
        renderItem={({item}) =>{
          return <View >
            <TouchableOpacity onPress={() => 
      navigation.navigate('FullScreen', {
      url: item.src.portrait 
    } )   }>
            <Image
          source = {{uri: item.src.portrait}}
          style = {styles.image}
          />
            </TouchableOpacity>
         
          </View>
        }}
        
          />
    </View>
       
     </View>

}

export default WallpaperScreen;

const styles = StyleSheet.create({
     
  row: {
    flex: 1,
    justifyContent: "space-around",
    marginBottom:15
  },
  image: {
  height:300,
  width:WIDTH/2-20,
  elevation:5,

  borderRadius:10,
  
  },
  titleText :{
    fontSize:32,
    fontWeight:'bold',
    paddingLeft:10
   },
  headerContainer:{
    marginTop:30,
    flexDirection:'column',
    marginBottom:10
   },
   loadingText: {
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center',
   },
});
