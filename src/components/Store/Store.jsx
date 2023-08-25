 import IconSwitch from "../IconSwitch/IconSwitch";
 import CardsView from "../Cards/CardsView";
 import ListView from "../List/ListView";

 import './Store.css'

 import { useState } from "react"; 

 function Store(props) {  
    const initialIcon = 'view_list';
    const initialShowCardView = true;
    const initialShowListView = false;

    const cardsClass = 'store__cards-view';
    const listClass = 'store__list-view';

    const [icon, setIcon] = useState(initialIcon);
    const [showCardView, setShowCardView] = useState(initialShowCardView);
    const [showListView, setShowListView] = useState(initialShowListView);

    const onSwitch = () => { 
        setIcon(icon === 'view_list' ? 'view_module' : 'view_list');
        setShowListView((prev)=> !prev)
        setShowCardView((prev)=> !prev);
        
        };

  return (
    <div className="store">         
            <IconSwitch 
                icon={icon}
                onSwitch={onSwitch}
            />
             <div>
                {showCardView && <CardsView 
                    cards={props.products}
                    cardsClass={cardsClass}
                />}
            </div>
            <div>
                {showListView && <ListView
                    items={props.products}
                    listClass={listClass}
                /> }  
            </div> 
            
            
    </div>

  )
}

export default Store;