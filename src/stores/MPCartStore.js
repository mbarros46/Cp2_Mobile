"use client"

import { createContext, useState, useEffect } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"

export const CartContext = createContext()

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([])

  // Carregar carrinho salvo no AsyncStorage ao iniciar
  useEffect(() => {
    const loadCart = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem("@cart")
        if (jsonValue != null) {
          setCartItems(JSON.parse(jsonValue))
        }
      } catch (e) {
        console.error("Erro ao carregar carrinho:", e)
      }
    }
    loadCart()
  }, [])

  // Salvar carrinho no AsyncStorage sempre que mudar
  useEffect(() => {
    const saveCart = async () => {
      try {
        await AsyncStorage.setItem("@cart", JSON.stringify(cartItems))
      } catch (e) {
        console.error("Erro ao salvar carrinho:", e)
      }
    }
    saveCart()
  }, [cartItems])

  // Adiciona produto ao carrinho (incrementa quantidade se já existir)
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const index = prevItems.findIndex((item) => item.id === product.id)
      if (index !== -1) {
        const newItems = [...prevItems]
        newItems[index].quantity += 1
        return newItems
      } else {
        return [...prevItems, { ...product, quantity: 1 }]
      }
    })
  }

  // Remove 1 unidade do produto do carrinho ou remove completamente
  const removeFromCart = (productId) => {
    setCartItems((prevItems) => {
      const index = prevItems.findIndex((item) => item.id === productId)
      if (index !== -1) {
        const newItems = [...prevItems]
        if (newItems[index].quantity > 1) {
          newItems[index].quantity -= 1
          return newItems
        } else {
          return newItems.filter((item) => item.id !== productId)
        }
      }
      return prevItems
    })
  }

  // Calcula o valor total do carrinho
  const getTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, getTotal }}>{children}</CartContext.Provider>
  )
}
