import { combineReducers } from "redux"
import { persistReducer } from "redux-persist"
//tell redux-persist to use local storage
import storage from "redux-persist/lib/storage"

import userReducer from "./user/user.reducer"
import cartReducer from "./cart/cart.reducer"

const persistConfig = {
  //from root reducer
  key: "root",
  storage,
  whitelist: ["cart"]
}

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer
})

export default persistReducer(persistConfig, rootReducer)
