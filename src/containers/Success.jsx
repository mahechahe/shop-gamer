import React, {useContext} from 'react'
import AppContext from '../context/AppContext'
import '../styles/components/Success.css'
import ChartMap from '../components/Map';

function Success() {
  const {state} = useContext(AppContext);
  console.log(state);
  const {buyer} = state;

  return (
    <div className='Success'>
      <div className='Success-content'>
        <h2>{`Estiven, Gracias por tu compra`}</h2>
        <span>Tu pedido llegara en 3 dias a tu dirrecion:</span>
        <div className='Success-map'>
          <ChartMap/>
        </div>
      </div>
    </div>
  )
}

export default Success