"use client"

import { useContext } from "react"
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { Ionicons } from "@expo/vector-icons"
import { CartContext } from "../stores/MPCartStore"
import { useTheme } from "../components/MPThemeProvider"

export default function MPProductCard({ product }) {
  const { addToCart } = useContext(CartContext)
  const navigation = useNavigation()
  const theme = useTheme()

  const handleViewDetails = () => {
    navigation.navigate("ProductDetail", { product })
  }

  return (
    <TouchableOpacity onPress={handleViewDetails} activeOpacity={0.9}>
      <View style={[styles.card, { backgroundColor: theme.colors.card }]}>
        <View style={styles.imageContainer}>
          <Image source={product.image} style={styles.image} />
        </View>
        <View style={styles.contentContainer}>
          <Text style={[styles.title, { color: theme.colors.text }]}>{product.title}</Text>
          <Text style={[styles.description, { color: theme.colors.subtext }]} numberOfLines={2}>
            {product.description}
          </Text>
          <View style={styles.footer}>
            <Text style={[styles.price, { color: theme.colors.primary }]}>R$ {product.price.toFixed(2)}</Text>
            <TouchableOpacity
              style={[styles.addButton, { backgroundColor: theme.colors.primary }]}
              onPress={() => addToCart(product)}
            >
              <Ionicons name="cart" size={18} color="#FFF" />
              <Text style={styles.addButtonText}>Adicionar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    marginBottom: 16,
    overflow: "hidden",
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  imageContainer: {
    width: "100%",
    height: 180,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  contentContainer: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 6,
  },
  description: {
    fontSize: 14,
    marginBottom: 12,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
  },
  addButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  addButtonText: {
    color: "#FFF",
    fontWeight: "bold",
    marginLeft: 4,
  },
})
