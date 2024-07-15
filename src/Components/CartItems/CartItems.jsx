import React, { useContext, useState } from 'react'; // Import React and hooks from 'react'
import './CartItems.css'; // Import CSS for styling the component
import remove_icon from '../Assets/cart_cross_icon.png'; // Import the remove icon image
import { ShopContext } from '../../Context/ShopContext'; // Import ShopContext for accessing global state

// The CartItems component displays the items in the cart and provides functionality for checking out.
const CartItems = () => {
    // Retrieve context values using the useContext hook
    const { all_product, cartItems, removeFromCart, getTotalCartAmount, clearCart } = useContext(ShopContext);

    // State to store the receipt information after checkout
    const [receipt, setReceipt] = useState(null);

    // Handle the checkout process
    const handleCheckout = () => {
        // Filter the products to get only the ones that are in the cart
        const purchasedItems = all_product.filter(e => cartItems[e.id] > 0);
        // Calculate the total amount
        const totalAmount = getTotalCartAmount();
        // Create receipt data with purchased items, total amount, and the current date
        const receiptData = {
            purchasedItems,
            totalAmount,
            date: new Date().toLocaleString()
        };
        // Set the receipt state to the created receipt data
        setReceipt(receiptData);
        // Clear the cart after checkout
        clearCart();
    };

    return (
        <div className="cartitems">
            {/* Header row for the cart items */}
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {/* Render each product in the cart */}
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                        <div key={e.id}>
                            <div className="cartitems-format cartitems-format-main">
                                <img src={e.image} alt="" className='carticon-product-icon' />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                                <p>${e.new_price * cartItems[e.id]}</p>
                                <img src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="Remove item" />
                            </div>
                            <hr />
                        </div>
                    );
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Totals</h1>
                    <div>
                        {/* Subtotal row */}
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        {/* Shipping fee row */}
                        <div className="cartitems-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        {/* Total amount row */}
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    {/* Button to trigger checkout */}
                    <button onClick={handleCheckout}>GET THE RECEIPT</button>
                </div>
            </div>
            {/* Display the receipt after checkout */}
            {receipt && (
                <div className="receipt">
                    <h2>Receipt</h2>
                    <p>Date: {receipt.date}</p>
                    <hr />
                    {receipt.purchasedItems.map(item => (
                        <div key={item.id} className="receipt-item">
                            <p>{item.name} x {cartItems[item.id]}</p>
                            <p>${item.new_price * cartItems[item.id]}</p>
                        </div>
                    ))}
                    <hr />
                    <h3>Total: ${receipt.totalAmount}</h3>
                </div>
            )}
        </div>
    );
};

export default CartItems;
