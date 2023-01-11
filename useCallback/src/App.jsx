import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [product, setProduct] = useState('');
  const [productList, setProductList] = useState([]);

  return (
    <div>
      <form onSubmit={e => handleSubmit(e)}>

      </form>
    </div>
  )

  function handleSubmit(e){
    e.preventDefault();

    setProductList([...productList, product]);
    setProduct('');
  }

  function listModifier(list){
    const spacedList = list.map(list => list.split('').join(''));

    return spacedList;
  }
}

export default App
