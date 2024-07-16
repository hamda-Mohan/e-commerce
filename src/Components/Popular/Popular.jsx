import React, { useEffect, useState } from 'react'; // Import React, useEffect, and useState
import './Popular.css'; // Import CSS for styling the component
import data_product from '../Assets/data'; // Import data_product for displaying items
import Item from '../Item/Item'; // Import Item component to display each item

const Popular = () => {
  const [products, setProducts] = useState([]); // State to store fetched products

  // Using useEffect to perform side effects
  useEffect(() => {
    console.log('Popular component has mounted');

    // Simulating a data fetch with a timeout
    const timeoutId = setTimeout(() => {
      setProducts(data_product); // Set products state with fetched data
      console.log('Data fetched successfully');
    }, 1000); // Simulate a delay for fetching data

    // Cleanup function to run when the component unmounts
    return () => {
      console.log('Popular component will unmount');
      clearTimeout(timeoutId); // Clear the timeout to prevent potential issues
    };
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1> {/* Title */}
      <hr /> {/* Horizontal line */}
      <div className='popular-item'>
        {products.map((item, i) => (
          <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        ))}
      </div>
    </div>
  );
}

export default Popular;
