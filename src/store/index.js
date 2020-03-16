import { createStore, compose } from 'redux';

import rootReducer from '../reducers';

const configureStore = () => {
    const store = createStore(
        rootReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__() || compose,
    );
    return store;
};

export default configureStore;
