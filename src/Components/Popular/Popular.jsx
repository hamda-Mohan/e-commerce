import React from 'react'; // Import React
import './Popular.css'; // Import CSS for styling the component
import data_product from '../Assets/data'; // Import data_product for displaying items
import Item from '../Item/Item'; // Import Item component to display each item

const Popular = () => {
  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1> {/* Title */}
      <hr /> {/* Horizontal line */}
      <div className='popular-item'>
        {data_product.map((item, i) => (
          <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        ))}
      </div>
    </div>
  );
}

export default Popular;
