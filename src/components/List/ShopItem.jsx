import './ShopItem.css';

function ShopItem(props) {
  return (
    <div className='shop-item'>
        <img className='shop-item__img' src={props.item.img} alt='item'/>
        <div className='shop-item__name'>{props.item.name}</div>
        <div className='shop-item__color'>{props.item.color}</div>    
        <div className='shop-item__price'>${props.item.price}</div>
        <div className='shop-item__add-button'>ADD TO CART</div>
    </div>
  )
}

export default ShopItem;
