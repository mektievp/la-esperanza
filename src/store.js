import { createStore } from 'redux';
import reducers from './js/reducers/_all';

const store = createStore(reducers);

export default store;