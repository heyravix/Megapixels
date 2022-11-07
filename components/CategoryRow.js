 import {View, Text, ScrollView } from 'react-native'
 import React from 'react' 
import CategoryCard from './CategoryCard'
 
 const CategoryRow = ({title}) => {
    return (
        <View>
            <View>
            <Text style={{fontSize:18 , marginStart:10, padding:10 , fontWeight:'bold' }}>{title}</Text>
            </View>
            <ScrollView
            horizontal
            contentContainerStyle={{
                paddingHorizontal: 15,
            }} 
            showsHorizontalScrollIndicator={false} >
                <CategoryCard
                title = "Flowers"
                imgUrl = "https://images.pexels.com/photos/14036566/pexels-photo-14036566.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />
                 <CategoryCard
                title = "Nature"
                imgUrl = "https://images.pexels.com/photos/13821593/pexels-photo-13821593.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />
                 <CategoryCard
                title = "Flowers"
                imgUrl = "https://images.pexels.com/photos/85773/pexels-photo-85773.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />
                 <CategoryCard
                title = "Animals"
                imgUrl = "https://images.pexels.com/photos/2071873/pexels-photo-2071873.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />
                 <CategoryCard
                title = "Art"
                imgUrl = "https://images.pexels.com/photos/13421439/pexels-photo-13421439.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />
                 <CategoryCard
                title = "Games"
                imgUrl = "https://images.pexels.com/photos/5769387/pexels-photo-5769387.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />
                 <CategoryCard
                title = "Music"
                imgUrl = "https://images.pexels.com/photos/10182119/pexels-photo-10182119.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />
                 <CategoryCard
                title = "Games"
                imgUrl = "https://images.pexels.com/photos/13905462/pexels-photo-13905462.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />
                 <CategoryCard
                title = "Sports"
                imgUrl = "https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />
                 <CategoryCard
                title = "Space"
                imgUrl = "https://images.pexels.com/photos/5439/earth-space.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />
                 <CategoryCard
                title = "Technology"
                imgUrl = "https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />
                <CategoryCard
                title ="Places"
                imgUrl="https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />
                <CategoryCard
                title="Abstract"
                imgUrl="https://images.pexels.com/photos/2110951/pexels-photo-2110951.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />
            </ScrollView>

        </View>
    )
 }

 export default CategoryRow;