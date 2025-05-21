import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { useMBContext } from '../providers/MBProvider';
import MBCartItem from '../components/MBCartItem';

export default function CartPage() {
  const { mbCart, setMBCart } = useMBContext();

  const mbHandleQuantityChange = (productId: number, change: number) => {
    setMBCart(mbCart.map(item => {
      if (item.id === productId) {
        const newQuantity = item.quantity + change;
        if (newQuantity <= 0) {
          return null;
        }
        return { ...item, quantity: newQuantity };
      }
      return item;
    }).filter(Boolean));
  };

  const mbHandleRemoveItem = (productId: number) => {
    setMBCart(mbCart.filter(item => item.id !== productId));
  };

  const mbCalculateTotal = () => {
    return mbCart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <View style={styles.container}>
      {mbCart.length === 0 ? (
        <Text style={styles.emptyText}>Seu carrinho está vazio</Text>
      ) : (
        <>
          <FlatList
            data={mbCart}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <MBCartItem
                item={item}
                onQuantityChange={mbHandleQuantityChange}
                onRemove={mbHandleRemoveItem}
              />
            )}
            contentContainerStyle={styles.listContainer}
          />
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>
              Total: R$ {mbCalculateTotal().toFixed(2)}
            </Text>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  listContainer: {
    padding: 10,
  },
  emptyText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
    color: '#666',
  },
  totalContainer: {
    padding: 20,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'right',
  },
});