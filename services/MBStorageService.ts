import AsyncStorage from '@react-native-async-storage/async-storage';
import productsData from '../assets/products.json';

const MB_PRODUCTS_KEY = '@MB_products';

export const MBStorageService = {
  async getProducts() {
    try {
      const storedProducts = await AsyncStorage.getItem(MB_PRODUCTS_KEY);
      if (storedProducts) {
        return JSON.parse(storedProducts);
      }
      // If no stored products, save the default ones
      await this.saveProducts(productsData);
      return productsData;
    } catch (error) {
      console.error('Error getting products:', error);
      return [];
    }
  },

  async saveProducts(products) {
    try {
      await AsyncStorage.setItem(MB_PRODUCTS_KEY, JSON.stringify(products));
    } catch (error) {
      console.error('Error saving products:', error);
    }
  },

  async clearProducts() {
    try {
      await AsyncStorage.removeItem(MB_PRODUCTS_KEY);
    } catch (error) {
      console.error('Error clearing products:', error);
    }
  }
};