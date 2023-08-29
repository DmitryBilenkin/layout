import ShopItem from "./ShopItem";
import './ListView.css'

function ListView(props) {
  return (
    <div className={props.listClass}>     
      {props.items.map((item)=>{
        return <ShopItem key={Math.random().toFixed(2)} item={item}/>
      })
      }      
    </div>
  )
};

export default ListView;
