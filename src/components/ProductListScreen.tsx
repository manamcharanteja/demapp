
import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Product } from '../../types';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';
import { products } from '../data/products';

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handleProductPress = () => {
    navigation.navigate('ProductDetail', { productId: product.id });
  };

  return (
    <TouchableOpacity onPress={handleProductPress} style={styles.productItem}>
      <Image source={{ uri: product.imageUrl }} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productPrice}>${product.price.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );
};

const ProductListScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductItem product={item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.productList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  productList: {
    paddingBottom: 20,
  },
  productItem: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 5,
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  productImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  productInfo: {
    marginTop: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 14,
    color: 'gray',
  },
});

export default ProductListScreen;