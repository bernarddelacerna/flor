import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert, ScrollView } from 'react-native';

const Checkout = ({ orderDetails, onConfirmPayment }) => {
  const [customerName, setCustomerName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('Credit Card');
  const [cardNumber, setCardNumber] = useState('');
  const [address, setAddress] = useState('');

  const handleConfirm = () => {
    if (!customerName || !email || !phoneNumber || !cardNumber || !address) {
      Alert.alert('Incomplete Details', 'Please fill out all the required fields.');
    } else {
      onConfirmPayment({
        customerName,
        email,
        phoneNumber,
        paymentMethod,
        cardNumber,
        address,
      });
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Checkout</Text>

      {/* Customer Information */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Customer Name:</Text>
        <TextInput
          placeholder="Enter Full Name"
          style={styles.input}
          value={customerName}
          onChangeText={setCustomerName}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Email:</Text>
        <TextInput
          placeholder="Enter Email"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Phone Number:</Text>
        <TextInput
          placeholder="Enter Phone Number"
          style={styles.input}
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
        />
      </View>

      {/* Order Summary */}
      <View style={styles.orderSummary}>
        <Text style={styles.label}>Order ID:</Text>
        <Text style={styles.value}>{orderDetails.id}</Text>

        <Text style={styles.label}>Items:</Text>
        {orderDetails.items.map((item, index) => (
          <Text key={index} style={styles.value}>
            {item.name} - ${item.price.toFixed(2)}
          </Text>
        ))}

        <Text style={styles.label}>Total:</Text>
        <Text style={styles.value}>${orderDetails.total.toFixed(2)}</Text>
      </View>

      {/* Payment Method */}
      <View style={styles.paymentSection}>
        <Text style={styles.paymentTitle}>Payment Method</Text>
        <TouchableOpacity
          style={[styles.paymentOption, paymentMethod === 'Credit Card' ? styles.selectedOption : null]}
          onPress={() => setPaymentMethod('Credit Card')}
        >
          <Text style={styles.paymentText}>Credit Card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.paymentOption, paymentMethod === 'PayPal' ? styles.selectedOption : null]}
          onPress={() => setPaymentMethod('PayPal')}
        >
          <Text style={styles.paymentText}>PayPal</Text>
        </TouchableOpacity>
      </View>

      {/* Payment Details */}
      {paymentMethod === 'Credit Card' && (
        <View style={styles.cardDetails}>
          <TextInput
            placeholder="Enter Card Number"
            style={styles.input}
            value={cardNumber}
            onChangeText={setCardNumber}
            keyboardType="numeric"
          />
        </View>
      )}

      {/* Shipping Address */}
      <TextInput
        placeholder="Enter Shipping Address"
        style={styles.input}
        value={address}
        onChangeText={setAddress}
      />

      {/* Confirm Button */}
      <TouchableOpacity style={styles.button} onPress={handleConfirm}>
        <Text style={styles.buttonText}>Confirm Payment</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

// Default props to ensure safe rendering
Checkout.defaultProps = {
  orderDetails: {
    id: 'N/A',
    items: [],
    total: 0,
  },
  onConfirmPayment: ({
    customerName,
    email,
    phoneNumber,
    paymentMethod,
    cardNumber,
    address,
  }) => {
    console.log(`Customer Name: ${customerName}, Email: ${email}, Phone: ${phoneNumber}`);
    console.log(`Payment Method: ${paymentMethod}, Card: ${cardNumber}, Address: ${address}`);
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#e6a6be',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 15,
    borderRadius: 5,
    marginTop: 5,
  },
  orderSummary: {
    marginBottom: 20,
  },
  value: {
    fontSize: 16,
    marginLeft: 10,
  },
  paymentSection: {
    marginBottom: 20,
  },
  paymentTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  paymentOption: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
  selectedOption: {
    backgroundColor: '#007BFF',
  },
  paymentText: {
    fontSize: 16,
    color: '#000',
  },
  cardDetails: {
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default Checkout;
