import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter, Route} from 'react-router-dom';
import { Provider } from "react-redux";
import ScrollToTop from './components/ScrollToTop'
import store from "./store";
import './index.scss';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <ScrollToTop>
                <Route path="/" component={App} />
            </ScrollToTop>
        </BrowserRouter>
    </Provider>
    , 
    document.getElementById('root')
);
