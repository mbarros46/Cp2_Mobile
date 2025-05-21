"use client"

import { createContext, useState, useContext, useEffect } from "react"
import { useColorScheme } from "react-native"

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const deviceTheme = useColorScheme()
  const [isDarkMode, setIsDarkMode] = useState(true) // Começamos com tema escuro por padrão

  useEffect(() => {
    // Podemos usar o tema do dispositivo como padrão inicial se quisermos
    // setIsDarkMode(deviceTheme === 'dark');
  }, [deviceTheme])

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev)
  }

  const theme = {
    isDarkMode,
    toggleTheme,
    colors: isDarkMode
      ? {
          background: "#121212",
          card: "#1E1E1E",
          text: "#FFFFFF",
          subtext: "#AAAAAA",
          primary: "#FF5722",
          secondary: "#2196F3",
          accent: "#FFC107",
          border: "#333333",
          danger: "#F44336",
          success: "#4CAF50",
          tabBar: "#0A0A0A",
          tabBarInactive: "#777777",
          searchBar: "#333333",
        }
      : {
          background: "#F5F5F5",
          card: "#FFFFFF",
          text: "#212121",
          subtext: "#757575",
          primary: "#FF5722",
          secondary: "#2196F3",
          accent: "#FFC107",
          border: "#E0E0E0",
          danger: "#F44336",
          success: "#4CAF50",
          tabBar: "#FFFFFF",
          tabBarInactive: "#9E9E9E",
          searchBar: "#EEEEEE",
        },
  }

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext)
