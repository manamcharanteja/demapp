tsx
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { Product } from '../data/products';

interface ProductDetailScreenProps {
  route: {
    params: {
      product: Product;
    };
  };
  navigation: any;
}

const ProductDetailScreen: React.FC<ProductDetailScreenProps> = ({ route, navigation }) => {
  const { product } = route.params;
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const scale = new Animated.Value(1);

  const handleAddToCart = () => {
    Animated.sequence([
      Animated.timing(scale, {
        toValue: 1.1,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();

    setIsAddedToCart(true);
    // Here you would add the product to your cart state
    setTimeout(() => {
      setIsAddedToCart(false);
    }, 2000);
    // Navigate to the cart page after adding an item
    navigation.navigate('Cart');
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.price}>${product.price.toFixed(2)}</Text>
      </View>
      <Animated.View style={{ transform: [{ scale }] }}>
        <TouchableOpacity
          style={[
            styles.button,
            isAddedToCart && styles.addedButton,
          ]}
          onPress={handleAddToCart}
          disabled={isAddedToCart}
        >
          <Text style={styles.buttonText}>
            {isAddedToCart ? 'Added to Cart' : 'Add to Cart'}
          </Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  details: {
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  addedButton: {
    backgroundColor: '#5cb85c',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProductDetailScreen;