import React, {useContext} from 'react'
import { Product } from './Product'
import '../styles/components/Products.css';
import AppContext from '../context/AppContext';

const Products = () => {
  const {state, addToCart} = useContext(AppContext);
  const {products} = state;
  console.log(products);

  const handleAddToCart = (product) => {
    addToCart(product)
  }

  return (
    <div className='Products'>
        <div className='Products-items'>
            {products.map((product, index) => (
                <Product index={index} key={product.id} product={product} handleAddToCart={handleAddToCart}/>
            ))}
        </div>
    </div>
  )
}

export default Products