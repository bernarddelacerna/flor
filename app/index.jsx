import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const Index = () => {
  return (
    <View className="flex-1 bg-[#ffc1cc] justify-center items-center">
      
      <Image
      source={require('../assets/floral.png')}
      
        className="w-48 h-48 mt-40"
        
        resizeMode="contain"
      />
      <View className="mb-40">
      <Text className="p-10">Welcome</Text>
        <Link href="/signup" asChild>
          <TouchableOpacity className="bg-[#de5d83] rounded-full justify-center items-center mb-4">
            <Text className="p-6">Sign Up</Text>
          </TouchableOpacity>
        </Link>
        <Link href="/login" asChild>
          <TouchableOpacity className="bg-[#de5d83] rounded-full justify-center items-center">
            <Text className="p-6">Log In</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

export default Index;
