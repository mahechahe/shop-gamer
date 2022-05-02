import React, {useContext} from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import AppContext from '../context/AppContext'
import'../styles/components/Payment.css'
import {handleSumTotal} from '../components/handleSumTotal';
import { useNavigate  } from 'react-router-dom';
// Api Key Google Maps: AIzaSyCLk1Y3YAk69dS1ofw9_eisA4Jj_YDvRcs

function Payments() {
  const {state, addNewOrder} = useContext(AppContext);
  const {cart, buyer} = state;
  const navigate = useNavigate();

  const paypalOptions = {
    clientId: 'AaEyrSPxE7dOIGAbvxK4zjxwtzbd5LmJ7Uf2oUMFE1dXHUyHmT3SowKgAEzbyssXOD9e9kKq08NhU4B0',
    intent: 'capture',
    currency: 'USD'
  }

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect'
  }

  const handlePaymentSuccess = (data) => {
    if(data.status === 'COMPLETED'){
      const newOrder = {
        buyer,
        product: cart,
        payment: data
      }
      addNewOrder(newOrder);
      navigate('/checkout/success')
    }
  }
  


  return (
    <div className='Payment'>
      <div className='Payment-content'>
        <h3>Resumen del pedido:</h3>
        {cart.map((item, index) => (
          <div className="Payment-item" key={index}>
            <div className='Payment-element'>
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div> 
          </div>
        ))}
        <div className='Payment-button'>
          <PayPalButton
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      currency_code: 'USD',
                      value: handleSumTotal(cart),
                    },
                  },
                ],
              });
            }}
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amout={handleSumTotal(cart)}
            onPaymentStart={() => console.log('Start payment')}
            onSuccess={(data) => handlePaymentSuccess(data)}
            onApprove={(data) => handlePaymentSuccess(data)}
            onPaymentError={(error) => console.log(error)}
            onPaymentCancel={(data) => console.log(data)}
          />
        </div>
      </div>
      <div></div>
    </div>
  )
}


export default Payments