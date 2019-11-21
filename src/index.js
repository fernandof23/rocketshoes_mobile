import React from 'react';
import './config/ReactotronConfig';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import Routes from './routes';
import store from './store/index';

export default function app() {
    return (
        <Provider store={store}>
            <StatusBar barStyle="light-content" backgroundColor="#141419" />
            <Routes />
        </Provider>
    );
}
