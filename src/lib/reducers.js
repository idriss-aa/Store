import { actions } from './actions';

const initialState = {
    items : JSON.parse(localStorage.getItem("items")) !== null ? JSON.parse(localStorage.getItem("items")) : [] 
}
 
const saveToLocalstorage = object => {
    localStorage.setItem("items", JSON.stringify(object));
 }

export const onlineStoreApp = (state = initialState, action) =>{
   switch(action.type){
    case actions.ADD_TO_CART : return Object.assign({}, state , {items : [...state.items, action.payload]})
    case actions.UPDATE_CART : return Object.assign({}, state, {
        items : state.items.map((item) => {
            return item.id === action.payload.id ?
            Object.assign({}, item, { quantity : action.payload.quantity } ): item;
        }) 
    })
        
    case actions.REMOVE_FROM_CART : 
      return Object.assign({}, state, {
        items : state.items.filter((item) => {
        return item.id != action.payload
    })
   })

    case actions.SAVE_CART: saveToLocalstorage(action.payload.items) ;
      return state

    case actions.RESET_CART: localStorage.clear();
      return  Object.assign({}, state, { items : [] })
 
    default :
      return state;
 }
}