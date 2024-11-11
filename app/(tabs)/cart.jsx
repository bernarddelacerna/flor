import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const Cart = () => {
  return (
    <View className="flex-1 bg-[#e6a6be] items-center justify-start">
        <ScrollView className="flex-1">
        <View className="flex-col justify-between">

<Image source={require('../../assets/1.jpg')} className="m-2" style={{height:300,width:300,borderRadius:10}}/>

  <View className="flex-row">
      <Text className>Assorted Rose</Text>
      <TouchableOpacity className="bg-[#ffc1cc] ml-5 rounded-full"><Text className="p-2">5$</Text></TouchableOpacity>
      
  </View>
  <View className="flex-col justify-between">
<Image source={require('../../assets/2.jpg')} className="m-2" style={{height:300,width:300,borderRadius:10}}/>

<View className="flex-row">
      <Text className>Pink Rose</Text>
      <TouchableOpacity className="bg-[#ffc1cc] ml-5 rounded-full"><Text className="p-2">6$</Text></TouchableOpacity>
      </View>

</View>
</View>
  <View className="flex-col justify-between">
<Image source={require('../../assets/3.jpg')} className="m-2" style={{height:300,width:300,borderRadius:10}}/>

<View className="flex-row">
      <Text className>Blue Tullips</Text>
      <TouchableOpacity className="bg-[#ffc1cc] ml-5 rounded-full"><Text className="p-2">6$</Text></TouchableOpacity>
      </View>
</View>

<View className="flex-col justify-between">
<Image source={require('../../assets/4.jpg')} className="m-2" style={{height:300,width:300,borderRadius:10}}/>

<View className="flex-row">
      <Text className>Pink Tullips</Text>
      <TouchableOpacity className="bg-[#ffc1cc] ml-5 rounded-full"><Text className="p-2">6$</Text></TouchableOpacity>
      </View>
</View>


<View className="flex-col justify-between">
<Image source={require('../../assets/5.jpg')} className="m-2" style={{height:300,width:300,borderRadius:10}}/>

<View className="flex-row">
      <Text className>White Tullips</Text>
      <TouchableOpacity className="bg-[#ffc1cc] ml-5 rounded-full"><Text className="p-2">6$</Text></TouchableOpacity>
      </View>
</View>
</ScrollView>
    </View>
  )
}

export default Cart