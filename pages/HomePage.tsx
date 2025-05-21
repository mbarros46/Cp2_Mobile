import React, { useState, useEffect } from 'react';
import { View, FlatList, TextInput, StyleSheet, Dimensions } from 'react-native';
import { useMBContext } from '../providers/MBProvider';
import MBProductCard from '../components/MBProductCard';
import { MBStorageService } from '../services/MBStorageService';

export default function HomePage({ navigation }) {
  const [mbProducts, setMBProducts] = useState([]);
  const [mbSearchText, setMBSearchText] = useState('');
  const { mbCart, setMBCart } = useMBContext();

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const products = await MBStorageService.getProducts();
      setMBProducts(products);
    } catch (error) {
      console.error('Error loading products:', error);
    }
  };

  const mbFilteredProducts = mbProducts.filter(product => 
    product.title.toLowerCase().includes(mbSearchText.toLowerCase()) ||
    product.description.toLowerCase().includes(mbSearchText.toLowerCase())
  );

  const mbHandleAddToCart = (product) => {
    const existingItem = mbCart.find(item => item.id === product.id);
    if (existingItem) {
      setMBCart(mbCart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setMBCart([...mbCart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar produtos..."
        value={mbSearchText}
        onChangeText={setMBSearchText}
      />
      <FlatList
        data={mbFilteredProducts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <MBProductCard
            product={item}
            onPress={() => navigation.navigate('ProductDetails', { product: item })}
            onAddToCart={() => mbHandleAddToCart(item)}
          />
        )}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  searchInput: {
    margin: 10,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  listContainer: {
    padding: 10,
  },
});