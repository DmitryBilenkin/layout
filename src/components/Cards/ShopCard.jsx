import './ShopCard.css'

function ShopCard(props) {
  return (
    <div className='shop-card'> 
      <div className='shop-card__name'>{props.card.name}</div>
      <div className='shop-card__color'>{props.card.color}</div>   
      <img className='shop-card__img' src={props.card.img} alt='card'/> 
      <div className='shop-card__price-container' id='price-container'>         
        <div className='shop-card__price'>${props.card.price}</div>
        <div className='shop-card__add-button'>ADD TO CART</div>
      </div>         
    </div>
  )
}

export default ShopCard