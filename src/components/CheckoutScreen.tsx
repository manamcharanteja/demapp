import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CheckoutScreen = () => {
  const handlePurchase = () => {
    alert('Purchase completed!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Checkout</Text>
      <Text style={styles.message}>Confirm your order details and proceed to purchase.</Text>
      <Button title="Complete Purchase" onPress={handlePurchase} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  message: {
    fontSize: 16,
    marginBottom: 30,
    textAlign: 'center',
  },
});

export default CheckoutScreen;