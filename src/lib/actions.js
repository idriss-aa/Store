/*
* action types
* 
*/

export const actions = {
    GET_ITEMS : "GET_ITEMS",
    ADD_TO_CART : "ADD_TO_CART",
    UPDATE_CART : "UPDATE_CART",
    REMOVE_FROM_CART : "REMOVE_FROM_CART",
    SAVE_CART: "SAVE_CART",
    RESET_CART:"RESET_CART"
}

/*
* action creators
* 
*/

const uid = () => Math.random().toString(34).split(2)


export const addToCart = (item, quantity) => {
    return {
        type:actions.ADD_TO_CART,
        payload: {id:uid(), quantity:quantity, details: item}
    }
}

export const updateCart = (id, quantity) => {
    return {
        type:actions.UPDATE_CART,
        payload: {id: id , quantity}
    }
}

export const removeFromCart = (id) => {
    return {
        type:actions.REMOVE_FROM_CART,
        payload: id
    }
}

export const saveCart = (items) => {
    return {
        type:actions.SAVE_CART,
        payload: { items : items }
    }
}

export const resetCart = () => {
    return {
        type:actions.RESET_CART,
    }
}

