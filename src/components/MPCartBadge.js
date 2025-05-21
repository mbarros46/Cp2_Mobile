"use client"

import { useContext } from "react"
import { View, Text, StyleSheet } from "react-native"
import { CartContext } from "../stores/MPCartStore"

export default function JTVCartBadge() {
  const { cartItems } = useContext(CartContext)
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  if (totalQuantity === 0) return null

  return (
    <View style={styles.badge}>
      <Text style={styles.text}>{totalQuantity}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  badge: {
    position: "absolute",
    right: -6,
    top: -3,
    backgroundColor: "red",
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 1,
    minWidth: 18,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 12,
  },
})
