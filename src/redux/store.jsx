import { createStore } from "redux";
import flightReducer from "./flightReducer";




// create store

const store = createStore(flightReducer);


export default store;