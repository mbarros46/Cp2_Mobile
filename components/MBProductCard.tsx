import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface MBProductCardProps {
  product: {
    id: number;
    title: string;
    description: string;
    image: string;
  };
  onPress: () => void;
  onAddToCart: () => void;
}

export default function MBProductCard({ product, onPress, onAddToCart }: MBProductCardProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        source={{ uri: product.image }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={2}>{product.title}</Text>
        <Text style={styles.description} numberOfLines={2}>{product.description}</Text>
        <TouchableOpacity style={styles.addButton} onPress={onAddToCart}>
          <Ionicons name="cart-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  image: {
    width: '100%',
    height: 150,
  },
  content: {
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: '#007AFF',
    padding: 8,
    borderRadius: 20,
    alignSelf: 'flex-end',
  },
});