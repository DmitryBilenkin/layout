import ShopItem from "./ShopItem";
import './ListView.css'

function ListView(props) {
  return (
    <div className={props.listClass}>     
      {props.items.map((item)=>{
        return <ShopItem item={item}/>
      })
      }      
    </div>
  )
};

export default ListView;
