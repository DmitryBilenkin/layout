import './ShopCard.css'

function ShopCard(props) {
  return (
    <div className='shop-card'>  
          <img className='shop-card__img' src={props.card.img} alt='card'/>          
          <div className='shop-card__name'>{props.card.name}</div>          
          <div className='shop-card__color'>{props.card.color}</div>                 
          <div className='shop-card__price'>{props.card.price}</div> 
            
    </div>
  )
}

export default ShopCard