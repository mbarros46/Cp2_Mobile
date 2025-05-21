"use client"

import { useContext } from "react"
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image, SafeAreaView } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { CartContext } from "../stores/MPCartStore"
import { useTheme } from "../components/MPThemeProvider"

export default function MPCartScreen() {
  const { cartItems, addToCart, removeFromCart, getTotal } = useContext(CartContext)
  const theme = useTheme()

  const renderItem = ({ item }) => (
    <View style={[styles.item, { backgroundColor: theme.colors.card }]}>
      <Image source={item.image} style={styles.itemImage} />

      <View style={styles.itemDetails}>
        <Text style={[styles.itemTitle, { color: theme.colors.text }]}>{item.title}</Text>
        <Text style={[styles.itemPrice, { color: theme.colors.primary }]}>R$ {item.price.toFixed(2)}</Text>
      </View>

      <View style={styles.quantityContainer}>
        <TouchableOpacity
          style={[styles.quantityButton, { backgroundColor: theme.colors.border }]}
          onPress={() => removeFromCart(item.id)}
        >
          <Ionicons name="remove" size={16} color={theme.colors.text} />
        </TouchableOpacity>

        <Text style={[styles.quantity, { color: theme.colors.text }]}>{item.quantity}</Text>

        <TouchableOpacity
          style={[styles.quantityButton, { backgroundColor: theme.colors.primary }]}
          onPress={() => addToCart(item)}
        >
          <Ionicons name="add" size={16} color="#FFF" />
        </TouchableOpacity>
      </View>
    </View>
  )

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      {cartItems.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Ionicons name="cart-outline" size={80} color={theme.colors.subtext} />
          <Text style={[styles.emptyText, { color: theme.colors.text }]}>Seu carrinho está vazio</Text>
          <Text style={[styles.emptySubtext, { color: theme.colors.subtext }]}>
            Adicione motocicletas do catálogo para começar
          </Text>
        </View>
      ) : (
        <>
          <FlatList
            data={cartItems}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            contentContainerStyle={styles.listContainer}
            showsVerticalScrollIndicator={false}
          />

          <View style={[styles.summaryContainer, { backgroundColor: theme.colors.card }]}>
            <View style={styles.summaryRow}>
              <Text style={[styles.summaryText, { color: theme.colors.text }]}>Subtotal</Text>
              <Text style={[styles.summaryValue, { color: theme.colors.text }]}>R$ {getTotal().toFixed(2)}</Text>
            </View>

            <View style={styles.summaryRow}>
              <Text style={[styles.summaryText, { color: theme.colors.text }]}>Frete</Text>
              <Text style={[styles.summaryValue, { color: theme.colors.success }]}>Grátis</Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.summaryRow}>
              <Text style={[styles.totalText, { color: theme.colors.text }]}>Total</Text>
              <Text style={[styles.totalValue, { color: theme.colors.primary }]}>R$ {getTotal().toFixed(2)}</Text>
            </View>

            <TouchableOpacity style={[styles.checkoutButton, { backgroundColor: theme.colors.primary }]}>
              <Text style={styles.checkoutButtonText}>Finalizar Compra</Text>
              <Ionicons name="arrow-forward" size={20} color="#FFF" />
            </TouchableOpacity>
          </View>
        </>
      )}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    padding: 16,
  },
  item: {
    flexDirection: "row",
    borderRadius: 12,
    marginBottom: 16,
    padding: 12,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  itemImage: {
    width: 70,
    height: 70,
    borderRadius: 8,
    marginRight: 12,
    resizeMode: "contain",
    backgroundColor: "#000",
  },
  itemDetails: {
    flex: 1,
    justifyContent: "center",
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: "bold",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  quantityButton: {
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  quantity: {
    fontSize: 16,
    fontWeight: "bold",
    marginHorizontal: 12,
    minWidth: 20,
    textAlign: "center",
  },
  summaryContainer: {
    padding: 16,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    elevation: 8,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: -4 },
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  summaryText: {
    fontSize: 16,
  },
  summaryValue: {
    fontSize: 16,
    fontWeight: "500",
  },
  divider: {
    height: 1,
    backgroundColor: "#E0E0E0",
    marginVertical: 12,
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  totalValue: {
    fontSize: 20,
    fontWeight: "bold",
  },
  checkoutButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    borderRadius: 25,
    marginTop: 16,
  },
  checkoutButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 8,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  emptyText: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 16,
    textAlign: "center",
  },
})
