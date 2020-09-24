import { combineReducers } from "redux"
import { persistReducer } from "redux-persist"
//tell redux-persist to use local storage
import storage from "redux-persist/lib/storage"

import userReducer from "./user/user.reducer"
import cartReducer from "./cart/cart.reducer"
import directoryReducer from "./directory/directory.reducer"
import shopReducer from "./shop/shop.reducer"

const persistConfig = {
  //from root reducer
  key: "root",
  storage,
  //whitelist the object we want to persist
  whitelist: ["cart"]
}

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
})

export default persistReducer(persistConfig, rootReducer)
