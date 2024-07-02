import { Link } from 'react-router-dom' 
import './Item.css'

const Item = (props) => {
  return (
    <div className='item'>
      <Link to={`/product/${props.id}`}><img src={props.image} alt="" /></Link>
       <p>{props.name}</p>
       <div className="item-prices">
         <div className="item-price-new">
            <p>${props.new_price}</p>
         </div>
        <div className="item-price-old">
            <p>${props.old_price}</p>
        </div>
       </div>
    </div>
  )
}

export default Item