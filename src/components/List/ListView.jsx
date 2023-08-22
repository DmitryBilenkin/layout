import ShopItem from "./ShopItem";
import './ListView.css'

function ListView(props) {
  return (
    <div className={props.listClass}>
        <ShopItem item={props.items[0]}/>
        <ShopItem item={props.items[1]}/>
        <ShopItem item={props.items[2]}/>
        <ShopItem item={props.items[3]}/>
        <ShopItem item={props.items[4]}/>
        <ShopItem item={props.items[5]}/>
    </div>
  )
}

export default ListView;
