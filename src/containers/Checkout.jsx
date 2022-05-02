import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import '../styles/components/Checkout.css'
import AppContext from '../context/AppContext'
import {handleSumTotal} from '../components/handleSumTotal';

function Checkout() {

  const {state, removeFromCart} = useContext(AppContext);
  const { cart } = state;

  const handleRemove = index => {
    removeFromCart(index);
  };

  return (
    <div className='Checkout'>
      <div className='Checkout-content'>
        {cart.length > 0 ? <h3>Lista de pedidos:</h3> : <h3>Sin pedidos...</h3>}
        {cart.map((item, index) => (
          <div className='Checkout-item' key={index}>
            <div className='Checkout-element'>
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
            <button type='button' onClick={() => handleRemove(index)}><i className='fas fa-trash-alt' title='Eliminar'></i></button>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className='Checkout-sidebar'>
          <h3>{`Precio Total: $ ${handleSumTotal(cart)}`}</h3>
          <Link to="/checkout/information">
            <button type='button'>Continuar pedido</button>
          </Link>
        </div>
      )}
      
    </div>
  )
}

export default Checkout