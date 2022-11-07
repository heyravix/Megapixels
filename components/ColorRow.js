 import {View, Text, ScrollView } from 'react-native'
 import React from 'react' 
 import ColorCard from './ColorCard'
 
 const ColorRow = ({title}) => {
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
                <ColorCard
                title = "Pink"
                imgUrl = "#FFC0CB"
                />
                 <ColorCard
                title = "Black"
                imgUrl = "#1c120a"
                />
                 <ColorCard
                title = "Red"
                imgUrl = "#ff452a"
                />
                 <ColorCard
                title = "Green"
                imgUrl = "#00a95f"
                />
                 <ColorCard
                title = "Yellow"
                imgUrl = "#eedd11"
                />
                  <ColorCard
                title = "Blue"
                imgUrl = "#b6f0ef"
                />
                  <ColorCard
                title = "Purple"
                imgUrl = "#aa55dd"
                />
            </ScrollView>
        </View>
    )
 }

 export default ColorRow;