"use client"

import { useContext } from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createStackNavigator } from "@react-navigation/stack"
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"
import MPProductListScreen from "../pages/MPProductListScreen"
import MPCartScreen from "../pages/MPCartScreen"
import MPProductDetailScreen from "../pages/MPProductDetailScreen"
import { CartContext } from "../stores/MPCartStore"
import { useTheme } from "../components/MPThemeProvider"

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

const ProductStack = () => {
  const theme = useTheme()

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.tabBar,
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTintColor: theme.colors.text,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="ProductList" component={MPProductListScreen} options={{ headerShown: false }} />
      <Stack.Screen
        name="ProductDetail"
        component={MPProductDetailScreen}
        options={({ route }) => ({
          title: route.params?.product?.title || "Detalhes da Moto",
          headerShown: true,
        })}
      />
    </Stack.Navigator>
  )
}

export default function MPNavigator() {
  const { cartItems } = useContext(CartContext)
  const theme = useTheme()

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.tabBarInactive,
        tabBarStyle: {
          backgroundColor: theme.colors.tabBar,
          borderTopWidth: 0,
          height: 60,
          paddingBottom: 5,
          paddingTop: 5,
          elevation: 8,
          shadowOpacity: 0.1,
          shadowRadius: 4,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
          marginBottom: 3,
        },
        headerStyle: {
          backgroundColor: theme.colors.tabBar,
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTintColor: theme.colors.text,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      })}
    >
      <Tab.Screen
        name="Catálogo"
        component={ProductStack}
        options={{
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="motorbike" size={size + 4} color={color} />,
          headerShown: true,
          headerTitle: "Motocicletas Premium",
        }}
      />
      <Tab.Screen
        name="Carrinho"
        component={MPCartScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="cart" size={size + 2} color={color} />,
          headerShown: true,
          headerTitle: "Seu Carrinho",
          tabBarBadge: totalQuantity > 0 ? totalQuantity : undefined,
          tabBarBadgeStyle: { backgroundColor: theme.colors.danger },
        }}
      />
    </Tab.Navigator>
  )
}
