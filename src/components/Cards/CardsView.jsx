import ShopCard from "./ShopCard"
import './CardsView.css'

function CardsView(props) {
  return (
    <div className={props.cardsClass}>
      {props.cards.map((card)=>{
        return <ShopCard card={card}/>
      })}
    </div>
  )
}
export default CardsView
