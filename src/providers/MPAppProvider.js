import { CartProvider } from "../stores/MPCartStore"

export const MPAppProvider = ({ children }) => {
  return <CartProvider>{children}</CartProvider>
}
