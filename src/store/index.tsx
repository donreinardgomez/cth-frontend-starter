import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import reducer from './reducers';

const enhancer = composeWithDevTools(applyMiddleware(thunk));
export const store = createStore(reducer, enhancer);
export default reducer;
