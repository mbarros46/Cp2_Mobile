import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useMBContext } from '../providers/MBProvider';
import { Ionicons } from '@expo/vector-icons';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  ProductDetails: { product: {
    id: number;
    title: string;
    description: string;
    image: string;
    price?: number;
  }};
};

type ProductDetailsScreenRouteProp = RouteProp<RootStackParamList, 'ProductDetails'>;
type ProductDetailsScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'ProductDetails'>;

type Props = {
  route: ProductDetailsScreenRouteProp;
  navigation: ProductDetailsScreenNavigationProp;
};

export default function ProductDetailsPage({ route, navigation }: Props) {
  const { product } = route.params;
  const { mbCart, setMBCart } = useMBContext();

  const mbHandleAddToCart = () => {
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
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: product.image }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.content}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.price}>R$ {product.price?.toFixed(2) || '0.00'}</Text>
        
        <TouchableOpacity style={styles.addButton} onPress={mbHandleAddToCart}>
          <Ionicons name="cart-outline" size={24} color="white" />
          <Text style={styles.addButtonText}>Adicionar ao Carrinho</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  image: {
    width: '100%',
    height: 300,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
    lineHeight: 24,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 20,
  },
  addButton: {
    backgroundColor: '#007AFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 10,
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});