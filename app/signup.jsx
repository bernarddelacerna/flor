import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import { Link } from 'expo-router';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Basic validation
    if (!username || !email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    // Here you would typically send the data to your backend
    console.log('Signing up with:', { username, email, password });

    // Clear fields after sign up
    setUsername('');
    setEmail('');
    setPassword('');
    Alert.alert('Success', 'Sign up successful!');
  };

  return (
    <View className="flex-1 justify-center items-center bg-[#e6a6be] p-4">
      <Text className="text-2xl mb-5">Sign Up</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        className="border p-2 w-full mb-2"
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        className="border p-2 w-full mb-2"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        className="border p-2 w-full mb-4"
      />
      

      <View><Link href="login" asChild>
      <TouchableOpacity className="bg-[#ffc1cc] rounded-full justify-center items-center w-full p-3">
      <Text className="text-black">Sign Up</Text>
        </TouchableOpacity>
      </Link></View>
    </View>
  );
};

export default SignUp;
