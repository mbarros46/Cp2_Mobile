import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MBProvider, useMBContext } from './providers/MBProvider';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import { Ionicons } from '@expo/vector-icons';

type RootTabParamList = {
  Produtos: undefined;
  Carrinho: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

function TabNavigatorWithBadge() {
  const { mbCart } = useMBContext();
  const mbCartItemsCount = mbCart.reduce((total: number, item) => total + (item.quantity || 0), 0);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          if (route.name === 'Produtos') {
            iconName = focused ? 'list' : 'list-outline';
          } else {
            iconName = focused ? 'cart' : 'cart-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Produtos" component={HomePage} />
      <Tab.Screen
        name="Carrinho"
        component={CartPage}
        options={{
          tabBarBadge: mbCartItemsCount > 0 ? mbCartItemsCount : undefined,
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <MBProvider>
      <NavigationContainer>
        <TabNavigatorWithBadge />
      </NavigationContainer>
    </MBProvider>
  );
}
