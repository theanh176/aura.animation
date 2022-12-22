import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import AccountReducer from "./redux/AccountReducer/account.reducer";

const composeEnhancers =
	(typeof window !== "undefined" &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
	compose;
const reducer = combineReducers({
	AccountReducer,
});

export const store = createStore(
	reducer,
	composeEnhancers(applyMiddleware(thunk))
);
