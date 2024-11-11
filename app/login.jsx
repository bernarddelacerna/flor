import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter(); // Initialize the router

  const handleLogin = () => {
    // Basic validation
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    // Here you would typically send the data to your backend
    console.log('Logging in with:', { email, password });

    // Simulate a successful login
    Alert.alert('Success', 'Login successful!', [
      { text: 'OK', onPress: () => router.push('/home') } // Navigate to home on confirmation
    ]);

    // Clear fields after login
    setEmail('');
    setPassword('');
  };

  return (
    <View className="flex-1 justify-center items-center bg-[#e6a6be] p-4">
      <Text className="text-2xl mb-4">Login</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        className="border p-2 w-full mb-2"
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        className="border p-2 w-full mb-4"
      />
      <TouchableOpacity
        className="bg-[#ffc1cc] rounded-full justify-center items-center w-full p-4"
        onPress={handleLogin}
      >
        <Text className="text-black">Log In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
