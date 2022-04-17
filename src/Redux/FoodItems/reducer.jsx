import {GET_FOODITEMS,GET_FOODITEMS_LOADING,GET_FOODITEMS_ERROR} from './action'

const initState = {
    loading: false,
    error: false,
    foodItems: []
}

export const foodItemsReducer = (store = initState, {type, payload}) => {
    switch(type) {
        case GET_FOODITEMS_LOADING:
            return {
                ...store,
                loading: true
            };
        case GET_FOODITEMS:
            return {
                ...store,
                loading: false,
                foodItems: [...payload],
                error: false
            };
        case GET_FOODITEMS_ERROR:
            return {
                ...store,
                loading: false,
                error: true
            };
        default:
            return store;
    }
}