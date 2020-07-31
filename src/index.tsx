import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';

import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './assets/style/global-styles';
import theme from './assets/style/theme';
import { ThemeProvider } from './assets/style/theme-components';

import configureStore from './store';
const store = configureStore();
// const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <GlobalStyle/>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                    <App />
            </ThemeProvider>
        </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
