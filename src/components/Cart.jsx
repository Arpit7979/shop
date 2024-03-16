import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { cartTotal, clearCart, decreaseCartQuantity, increaseCartQuantity, removeFromCart } from '../features/cartSlice'

const Cart = () => {
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch();
  useEffect(()=>{dispatch(cartTotal())},[cart,dispatch])
  return (
    <div className="cart-container">
    <h2>Shopping Cart</h2>
    {
      cart.cartItems.length===0?(
        <div className="empty-cart">
          <h3>Your Shopping Cart is Empty</h3>
          <Link to={"/"}>
            <span>Start Shopping</span>
          </Link>
        </div>
      ):(
        <div>
          <div className="title">
            <h3 className="product-title">Product</h3>
            <h3 className="price">Price</h3>
            <h3 className="quantity">Quantity</h3>
            <h3 className="total">Total</h3>
          </div>
          <div className="cart-items">
            {
              cart.cartItems.map(item=>(
                <div className="cart-item" key={item.id}>
                 <div className="cart-product">
                  <img src={item.image} alt="" />
                  <div>
                    <h3>{item.name}</h3>
                    <p>{item.disc}</p>
                    <button onClick={()=>dispatch(removeFromCart(item))}>Remove</button>
                  </div>
                 </div>
                 <div className="cart-price">
                  RS {item.price}
                 </div>
                 <div className="cart-quantity">
                  <button onClick={()=>dispatch(decreaseCartQuantity(item))}>-</button>
                  <div className="count">{item.cartQuantity}</div>
                  <button onClick={()=>dispatch(increaseCartQuantity(item))}>+</button>
                 </div>
                 <div className="cart-total-price">
                  RS {item.price*item.cartQuantity}
                 </div>
                </div>
              ))
            }
          </div>
          <div className="cart-summary">
            <button onClick={()=>dispatch(clearCart())} className='clear-cart'>Clear Cart</button>
            <div className="cart-checkout">
              <div className="subtotal">
                <span>Subtotal</span>
                <span>{cart.cartTotalAmount}</span>
              </div>
              <p>Taxes and charges applicable at checkout</p>
              <button>Checkout</button>
              <Link to={"/"}>
                <span className='continue-shopping'>Continue Shopping</span>
              </Link>
            </div>
          </div>
        </div>
      )
    }
    </div>
  )
}

export default Cart
