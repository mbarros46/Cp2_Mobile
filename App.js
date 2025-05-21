"use client"
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native"
import { StatusBar } from "react-native"
import MPNavigator from "./src/navigation/MPNavigator"
import { CartProvider } from "./src/stores/MPCartStore"
import { ThemeProvider, useTheme } from "./src/components/MPThemeProvider"

const AppContent = () => {
  const theme = useTheme()

  const navigationTheme = theme.isDarkMode
    ? {
        ...DarkTheme,
        colors: {
          ...DarkTheme.colors,
          primary: theme.colors.primary,
          background: theme.colors.background,
          card: theme.colors.tabBar,
          text: theme.colors.text,
          border: theme.colors.border,
        },
      }
    : {
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          primary: theme.colors.primary,
          background: theme.colors.background,
          card: theme.colors.tabBar,
          text: theme.colors.text,
          border: theme.colors.border,
        },
      }

  return (
    <>
      <StatusBar
        barStyle={theme.isDarkMode ? "light-content" : "dark-content"}
        backgroundColor={theme.colors.background}
      />
      <NavigationContainer theme={navigationTheme}>
        <CartProvider>
          <MPNavigator />
        </CartProvider>
      </NavigationContainer>
    </>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}
