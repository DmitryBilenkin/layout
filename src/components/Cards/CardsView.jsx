import ShopCard from "./ShopCard"
import './CardsView.css'

function CardsView(props) {
  return (
    <div className={props.cardsClass}>
      <ShopCard card={props.cards[0]}/>
      <ShopCard card={props.cards[1]}/>
      <ShopCard card={props.cards[2]}/>
      <ShopCard card={props.cards[3]}/>
      <ShopCard card={props.cards[4]}/>
      <ShopCard card={props.cards[5]}/>
    </div>
  )
}
export default CardsView
