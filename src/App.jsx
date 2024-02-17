import React, { useState } from 'react';
import './App.css';
import ProductCard from './Product'; // Import the Product component

export default function App() {
  const [value, setValue] = useState('');
  const [responseData, setResponseData] = useState(null);

  const handleSearch = async () => {
    try {
      const userSearchText = await fetch(`https://dummyjson.com/products/search?q=${value}`);
      if (!userSearchText.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await userSearchText.json();
      setResponseData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <>
     
      <div className='form'>
      <form
        className='inner-form'
        onSubmit={(e) => {
          e.preventDefault(); 
          handleSearch();
        }}
      >
         <h1>Software school</h1>
        <input
          type="text"
          placeholder="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">search</button>
      </form>
      </div>

      <div className="product-container">
        {responseData && responseData.products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
