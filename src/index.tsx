import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.scss'
import App from './App'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { legacy_createStore as createStore, compose, applyMiddleware } from 'redux'
import { featuring, logger } from './midlewares'
import rootReducer from './reducers/rootReducer'


declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk, logger, featuring)
)
const store = createStore(rootReducer, enhancer);

const el = document.getElementById('app')

if (el === null) throw new Error('Root container missing in index.html')

const root = ReactDOM.createRoot(el)
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
)