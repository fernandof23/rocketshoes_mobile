import React from 'react';
import './config/ReactotronConfig';
import { StatusBar } from 'react-native';
import Routes from './routes';

export default function app() {
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#141419" />
            <Routes />
        </>
    );
}
