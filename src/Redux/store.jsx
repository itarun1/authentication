import { createStore, combineReducers, applyMiddleware} from 'redux'
import { foodItemsReducer } from './FoodItems/reducer'
import { loginReducer } from './Login/reducer'
import thunk from 'redux-thunk'

export const rootReducer = combineReducers({login: loginReducer,
 foodItems: foodItemsReducer
})

export const store = createStore(rootReducer,applyMiddleware(thunk));