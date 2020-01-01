import './styles/main_styles.css';

import './styles/bootstrap4/bootstrap.min.css';
import './plugins/fontawesome-free-5.0.1/css/fontawesome-all.css';
import './plugins/OwlCarousel2-2.2.1/owl.carousel.css';
import './plugins/OwlCarousel2-2.2.1/owl.theme.default.css';
import './styles/responsive.css';
import './plugins/slick-1.8.0/slick.css';



import React from 'react';
import ReactDOM from 'react-dom';
import {createBrowserHistory} from "history";
import thunk from "redux-thunk";
import {routerMiddleware, ConnectedRouter} from "connected-react-router";
import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import createRootReducer from 'reducers';
import {Provider} from "react-redux";

import routes from 'routes';


const history = createBrowserHistory();
const middlewares = [thunk, routerMiddleware(history)];
const store = createStore(
    createRootReducer(history),
    composeWithDevTools(applyMiddleware(...middlewares))
);


ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            {routes}
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);

