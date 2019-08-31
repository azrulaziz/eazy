import { createStore } from "redux"
import listReducer from './reducers/listReducer'

let store = createStore(listReducer)

export default store