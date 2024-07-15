import React, { useState, createContext } from "react";
import all_product from '../Components/Assets/all_product.js'; // Importing product data from all_product.js

export const ShopContext = createContext(null); // Creating a ShopContext to manage shopping-related state

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length + 1; index++) {
        cart[index] = 0; // Initializing cart with default quantities for each product
    }
    return cart;
}

const ShopContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(getDefaultCart()); // State to manage cart items

    // Function to clear the cart
    const clearCart = () => {
        setCartItems({}); // Clears all items from the cart
    };

    // Function to add an item to the cart
    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 })); // Increases quantity of an item in the cart
    }

    // Function to remove an item from the cart
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 })); // Decreases quantity of an item in the cart
    }

    // Function to calculate total cart amount
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item)); // Fetches product info
                totalAmount += itemInfo.new_price * cartItems[item]; // Calculates total amount based on item prices and quantities
            }
        }
        return totalAmount;
    }

    // Function to calculate total number of items in the cart
    const getTotalCartItems = () => {
        let totalItems = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItems += cartItems[item]; // Counts total items in the cart
            }
        }
        return totalItems;
    }

    // Context value containing all necessary data and functions
    const contextValue = { all_product, cartItems, addToCart, removeFromCart, clearCart, getTotalCartAmount, getTotalCartItems };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children} {/* Provides the context value to its children components */}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider; // Exporting the ShopContextProvider component
