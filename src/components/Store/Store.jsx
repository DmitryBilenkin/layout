 import IconSwitch from "../IconSwitch/IconSwitch";
 import CardsView from "../Cards/CardsView";
 import ListView from "../List/ListView";

 import './Store.css'

 import { useState } from "react"; 

 function Store(props) {  
    const initialIcon = 'view_list';
    const initialClassCards = 'store__cards-view';
    const initialClassList = 'store__list-view none';

    const [icon, setIcon] = useState(initialIcon);
    const [cardsClass, setCardsClass] = useState(initialClassCards);
    const [listClass, setListClass] = useState(initialClassList);

    const onSwitch = () => { 
        setIcon(icon === 'view_list' ? 'view_module' : 'view_list');
        setListClass(cardsClass === 'store__cards-view' ? 'store__list-view' : 'store__list-view none')
        setCardsClass(listClass === 'store__list-view' ? 'store__cards-view': 'store__cards-view none');
        
        };

  return (
    <div className="store">         
            <IconSwitch 
                icon={icon}
                onSwitch={onSwitch}
            />
                 
            <CardsView 
                cards={props.products}
                cardsClass={cardsClass}
            />
            <ListView
                items={props.products}
                listClass={listClass}
            />   
    </div>

  )
}

export default Store;