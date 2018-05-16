import 'regenerator-runtime/runtime';
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { store, history } from './store/createStore'

// Add the below lines if redux persistance is required
// import { store, persistor, history } from './store/createStore'
// import { PersistGate } from 'redux-persist/integration/react'

import App from './pages/_App';

import 'sanitize.css/sanitize.css'
import './index.css'

const rootDiv = document.querySelector('#root');

ReactDOM.render((
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <App />
            </div>
        </ConnectedRouter>
    </Provider>
), rootDiv)
