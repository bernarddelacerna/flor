import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const Home = () => {
  return (
    <View className="flex-1 bg-[#e6a6be] items-center justify-start">
    <ScrollView  className="flex-1">
    

    <View className="flex-row justify-between">

<View className="flex-col justify-center, items-center ">
<Image source={require('../../assets/1.jpg')} className="m-2" style={{height:150,width:150,borderRadius:10}}/>
<Text>Assorted Rose</Text>
<TouchableOpacity className="bg-[#ffc1cc] ml-5 rounded-full"><Text className="p-2">Check Out</Text></TouchableOpacity>
<TouchableOpacity className="bg-[#ffc1cc] ml-5 rounded-full"><Text className="p-2">Add to Cart</Text></TouchableOpacity>


</View>

<View className="flex-col justify-center, items-center ">

<Image source={require('../../assets/2.jpg')} className="m-2" style={{height:150,width:150,borderRadius:10}}/>
<Text>Pink Rose</Text>
<TouchableOpacity className="bg-[#ffc1cc] ml-5 rounded-full"><Text className="p-2">Check Out</Text></TouchableOpacity>
<TouchableOpacity className="bg-[#ffc1cc] ml-5 rounded-full"><Text className="p-2">Add to Cart</Text></TouchableOpacity>

</View> 

 </View>

 <View className="flex-row justify-between">

<View className="flex-col justify-center, items-center ">
<Image source={require('../../assets/3.jpg')} className="m-2" style={{height:150,width:150,borderRadius:10}}/>
<Text>Blue Tullips</Text>
<TouchableOpacity className="bg-[#ffc1cc] ml-5 rounded-full"><Text className="p-2">Check Out</Text></TouchableOpacity>
<TouchableOpacity className="bg-[#ffc1cc] ml-5 rounded-full"><Text className="p-2">Add to Cart</Text></TouchableOpacity>

</View>

<View className="flex-col justify-center, items-center ">
<Image source={require('../../assets/4.jpg')} className="m-2" style={{height:150,width:150,borderRadius:10}}/>
<Text>Pink Tullips</Text>
<TouchableOpacity className="bg-[#ffc1cc] ml-5 rounded-full"><Text className="p-2">Check Out</Text></TouchableOpacity>
<TouchableOpacity className="bg-[#ffc1cc] ml-5 rounded-full"><Text className="p-2">Add to Cart</Text></TouchableOpacity>

</View> 

</View>

<View className="flex-row justify-between">

<View className="flex-col justify-center, items-center">
<Image source={require('../../assets/5.jpg')} className="m-2" style={{height:150,width:150,borderRadius:10}}/>
<Text>White Tullips</Text>
<TouchableOpacity className="bg-[#ffc1cc] ml-5 rounded-full"><Text className="p-2">Check Out</Text></TouchableOpacity>
<TouchableOpacity className="bg-[#ffc1cc] ml-5 rounded-full"><Text className="p-2">Add to Cart</Text></TouchableOpacity>

</View>

<View className="flex-col justify-center, items-center ">
<Image source={require('../../assets/6.jpg')} className="m-2" style={{height:150,width:150,borderRadius:10}}/>
<Text>White Tullips</Text>
<TouchableOpacity className="bg-[#ffc1cc] ml-5 rounded-full"><Text className="p-2">Check Out</Text></TouchableOpacity>
<TouchableOpacity className="bg-[#ffc1cc] ml-5 rounded-full"><Text className="p-2">Add to Cart</Text></TouchableOpacity>

</View> 
 </View>
 
 <View className="flex-row justify-between">

<View className="flex-col justify-center, items-center ">
<Image source={require('../../assets/7.jpg')} className="m-2" style={{height:150,width:150,borderRadius:10}}/>
<Text>White and Pink Rose</Text>
<TouchableOpacity className="bg-[#ffc1cc] ml-5 rounded-full"><Text className="p-2">Check Out</Text></TouchableOpacity>
<TouchableOpacity className="bg-[#ffc1cc] ml-5 rounded-full"><Text className="p-2">Add to Cart</Text></TouchableOpacity>

</View>

 </View>
    </ScrollView>
    

    </View>
  )
}

export default Home