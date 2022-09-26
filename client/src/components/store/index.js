import { createStore, applyMiddleware, compose } from "redux";
import reducer from "../reducer";
import thunk from "redux-thunk";

const store = createStore(reducer, compose(applyMiddleware(thunk)));

store.subscribe(() => {
    console.log("Subscripcion: ", store.getState());
})

export default store;