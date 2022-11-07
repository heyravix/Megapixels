
import {  StyleSheet,  View,  Dimensions, TextInput, Button, FlatList,
  SafeAreaView, Image, Text, TouchableOpacity, ImageBackground, ScrollView} from 'react-native';
import React from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import CategoryRow from './CategoryRow';
import ColorRow from './ColorRow';
import DiscoverCard from './DiscoverCard';
import DiscoverColumn from './DiscoverColumn';

const {width, height} = Dimensions.get('screen');
const API_KEY = '563492ad6f91700001000001845e376b074d44bd9869a746fe799bea'


const Home = ({navigation}) =>{



const [searchQuery, onChangeText] = React.useState(null);


const oneImage = ( {item}) => (
      <TouchableOpacity onPress={() => 
        navigation.navigate('WallpaperScreen', {
        query:  item.title
      })  }>
    <View style={styles.categoriesContainer}>
    <ImageBackground source={{uri: item.img_url}} resizeMode="cover" style={styles.image} borderRadius={10}>
    <Text style={styles.text}>{item.title}</Text>
  </ImageBackground>
  {/* <Image source={{uri: item.img_url}} style={styles.imageStyle}/> */}
  </View>
  <View style={styles.categoriesContainer}>
      {/* <Text style={{fontSize:18}}>{item.title}</Text> */}
  </View>

    </TouchableOpacity>
  
)

const oneColor = ( {item}) => (
  <TouchableOpacity onPress={() => 
    navigation.navigate('WallpaperScreen', {
    query:  item.title
  })  }>
<View style={styles.categoriesContainer}>
<ImageBackground source={{uri: item.img_url}} resizeMode="cover" style={styles.image} borderRadius={10}>
    <Text style={styles.text}>{item.title}</Text>
  </ImageBackground>

{/* <Image source={{uri: item.img_url}} style={styles.imageStyle}/> */}
</View>
<View style={styles.categoriesContainer}>
  {/* <Text style={{fontSize:18}}>{item.title}</Text> */}
</View>

</TouchableOpacity>

)


fetchImagesfromAPI = async()=>{
const data= await fetch('https://api.pexels.com/v1/search?query=nature&size=small&per_page=50',{
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



return <View style={{height, width, backgroundColor: '#fff',flexDirection:'column'}}>
  
  
<SafeAreaView  style={{paddingHorizontal : 20,backgroundColor : Colors.white}}> 
<View style={styles.header}>
<View style={{flexDirection:'column',alignContent:'center'}}>  
<View style={{flexDirection:'row'}}>
<Text style={{fontSize:24,fontWeight:'bold'}}>Mega</ Text>
<Text style={{fontSize:24, color:'red',fontWeight:'bold'}} >Pixels</Text> 
</View>
<Text style={{fontSize:14, color:'grey'}} >online photo gallery</Text> 

</View>
</View>
</SafeAreaView>

<View style={styles.inputContainer}>
    <TextInput placeholder='Search Images' style={styles.textInput}  onChangeText={onChangeText}  value={searchQuery}/>
   
<TouchableOpacity onPress={() => 
      navigation.navigate('WallpaperScreen', {
      query: searchQuery 
    } )   }>
    <View style={styles.searchBtn}  >
    <Text  style={{color:'#fff'}}>Search</Text>
    
    </View>
</TouchableOpacity>

  </View>


    {/* Home Categories */}

    <ScrollView 
    contentContainerStyle={{paddingBottom:100}}>
  <CategoryRow 
  title= 'Best of the Month'/>

  <ColorRow 
  title= 'Photos by Color'/>
  <DiscoverColumn 
  title= 'Categories'/>
  
</ScrollView>

  {/* <View  style={{marginTop:10}}>
  <View>
    <Text style={{fontSize:18 , marginStart:10, padding:10 , fontWeight:'bold'}}>Categories</Text>
    </View>
          <View style={styles.categoriesContainer}>
              <FlatList   
              horizontal
              showsHorizontalScrollIndicator={false}
                  data = {categories}
                    renderItem={oneImage}
                    />
          </View>
          <View>
    <Text style={{fontSize:18 , marginStart:10, padding:10 , fontWeight:'bold' }}>Photos by Color</Text>
    </View>
          <View style={styles.colorContainer}>
              <FlatList   
              horizontal
              showsHorizontalScrollIndicator={false}
                  data = {colorsCategory}
                    renderItem={oneColor}
                    />
          </View>
  </View>
  <View>
    <Text style={{fontSize:18 , marginStart:10, padding:10 , fontWeight:'bold' }}>Discover Photos</Text>
    </View>
    <View>
    <FlatList   
    
    data = {images}
    keyExtractor = { item => item.id.toString()}
    numColumns={2}
    renderItem={({item}) =>{
      return <View style={{width:'50%',margin:1}}>
      <Image
      source = {{uri: item.src.portrait}}
      style = {{height: 300,width:300}}
      />
      </View>
    }}
      
      />
    </View> */}
  </View>

}

export default Home;

const styles = StyleSheet.create({

header: {
marginTop: 70,
flexDirection : 'row',
justifyContent: 'space-between',
},

inputContainer: {
flexDirection: 'row',
justifyContent: 'space-evenly',
margin:2, 
height:40,
marginTop:20,
marginBottom:10

},
textInput: {
backgroundColor:'#eeeeee',
width: '70%', 
padding: 8,
borderRadius:10,
height:40
},
categoriesContainer:{
justifyContent: 'space-between',
alignItems: 'center',
paddingHorizontal:10,
marginTop:5,
marginBottom:5

},
colorContainer:{
justifyContent: 'space-between',
alignItems: 'center',
paddingHorizontal:10,
marginTop:5,
},
imageStyle: {
height:150,
width:150,
borderRadius:10

},
textCat: {
alignItems:'center'
},
searchBtn:{
backgroundColor:'#111',
borderRadius:10,
paddingHorizontal:15,
justifyContent:'center',
height:40,
alignItems:'center'

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
//  backgroundColor:'#000000c0', 
}

});
