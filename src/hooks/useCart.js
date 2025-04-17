import React, {createContext, useContext, useState, useCallback} from 'react';

const CartContext = createContext(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({children}) => {
  const [items, setItems] = useState([]);

  const addItem = useCallback(item => {
    setItems(prevItems => {
      const existingItem = prevItems.find(i => i.id === item.id);
      if (existingItem) {
        return prevItems.map(i =>
          i.id === item.id ? {...i, quantity: (i.quantity || 0) + 1} : i,
        );
      } else {
        return [...prevItems, {...item, quantity: 1}];
      }
    });
  }, []);

  const removeItem = useCallback(itemId => {
    setItems(prevItems => {
      const itemToRemove = prevItems.find(i => i.id === itemId);
      if (itemToRemove && itemToRemove.quantity && itemToRemove.quantity > 1) {
        return prevItems.map(i =>
          i.id === itemId ? {...i, quantity: i.quantity - 1} : i,
        );
      } else {
        return prevItems.filter(i => i.id !== itemId);
      }
    });
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const value = {
    items,
    addItem,
    removeItem,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
