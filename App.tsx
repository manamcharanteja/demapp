/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 */ 

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductListScreen from './src/components/ProductListScreen';
import ProductDetailScreen from './src/components/ProductDetailScreen';
import CartScreen from './src/components/CartScreen';
import CheckoutScreen from './src/components/CheckoutScreen';
import { CartProvider } from './src/hooks/useCart';
import { RootStackParamList } from './src/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ProductList">
          <Stack.Screen name="ProductList" component={ProductListScreen} options={{ title: 'Products' }} />
          <Stack.Screen name="ProductDetail" component={ProductDetailScreen} options={{ title: 'Product Detail' }} />
          <Stack.Screen name="Cart" component={CartScreen} options={{ title: 'Cart' }} />
          <Stack.Screen name="Checkout" component={CheckoutScreen} options={{ title: 'Checkout' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  }
});
export default App;
