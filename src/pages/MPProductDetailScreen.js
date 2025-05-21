"use client"

import { useContext } from "react"
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Dimensions, SafeAreaView } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { CartContext } from "../stores/MPCartStore"
import { useTheme } from "../components/MPThemeProvider"

const { width } = Dimensions.get("window")

export default function MPProductDetailScreen({ route }) {
  const { product } = route.params
  const { addToCart } = useContext(CartContext)
  const theme = useTheme()

  // Dados fictícios de especificações para as motos
  const specs = {
    engine: product.title.includes("250") ? "250cc" : "450cc",
    power: product.title.includes("250") ? "40 HP" : "55 HP",
    weight: product.title.includes("250") ? "105 kg" : "112 kg",
    suspension: "Showa/KYB Premium",
    brakes: "Disco hidráulico",
    transmission: "5 velocidades",
  }

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.colors.background }]}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.imageContainer}>
          <Image source={product.image} style={styles.image} resizeMode="cover" />
        </View>

        <View style={[styles.contentContainer, { backgroundColor: theme.colors.card }]}>
          <View style={styles.header}>
            <Text style={[styles.title, { color: theme.colors.text }]}>{product.title}</Text>
            <Text style={[styles.price, { color: theme.colors.primary }]}>R$ {product.price.toFixed(2)}</Text>
          </View>

          <Text style={[styles.description, { color: theme.colors.subtext }]}>{product.description}</Text>

          <View style={styles.specsContainer}>
            <Text style={[styles.specsTitle, { color: theme.colors.text }]}>Especificações Técnicas</Text>

            <View style={styles.specsGrid}>
              <View style={[styles.specItem, { backgroundColor: theme.colors.background }]}>
                <Ionicons name="speedometer-outline" size={24} color={theme.colors.primary} />
                <Text style={[styles.specLabel, { color: theme.colors.subtext }]}>Motor</Text>
                <Text style={[styles.specValue, { color: theme.colors.text }]}>{specs.engine}</Text>
              </View>

              <View style={[styles.specItem, { backgroundColor: theme.colors.background }]}>
                <Ionicons name="flash-outline" size={24} color={theme.colors.primary} />
                <Text style={[styles.specLabel, { color: theme.colors.subtext }]}>Potência</Text>
                <Text style={[styles.specValue, { color: theme.colors.text }]}>{specs.power}</Text>
              </View>

              <View style={[styles.specItem, { backgroundColor: theme.colors.background }]}>
                <Ionicons name="barbell-outline" size={24} color={theme.colors.primary} />
                <Text style={[styles.specLabel, { color: theme.colors.subtext }]}>Peso</Text>
                <Text style={[styles.specValue, { color: theme.colors.text }]}>{specs.weight}</Text>
              </View>

              <View style={[styles.specItem, { backgroundColor: theme.colors.background }]}>
                <Ionicons name="cog-outline" size={24} color={theme.colors.primary} />
                <Text style={[styles.specLabel, { color: theme.colors.subtext }]}>Transmissão</Text>
                <Text style={[styles.specValue, { color: theme.colors.text }]}>{specs.transmission}</Text>
              </View>
            </View>
          </View>

          <TouchableOpacity
            style={[styles.addButton, { backgroundColor: theme.colors.primary }]}
            onPress={() => addToCart(product)}
          >
            <Ionicons name="cart" size={20} color="#FFF" />
            <Text style={styles.addButtonText}>Adicionar ao Carrinho</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  imageContainer: {
    width: "100%",
    height: 250,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  contentContainer: {
    flex: 1,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: -20,
    padding: 24,
  },
  header: {
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  price: {
    fontSize: 22,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 24,
  },
  specsContainer: {
    marginBottom: 24,
  },
  specsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },
  specsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  specItem: {
    width: (width - 64) / 2,
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    alignItems: "center",
  },
  specLabel: {
    fontSize: 14,
    marginTop: 8,
  },
  specValue: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 4,
  },
  addButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 54,
    borderRadius: 27,
  },
  addButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 8,
  },
})
