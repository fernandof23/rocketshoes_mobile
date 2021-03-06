import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './pages/Home';
import Cart from './pages/cart';
import Header from './component/header';

const Routes = createAppContainer(
    createStackNavigator(
        {
            Home,
            Cart,
        },
        {
            defaultNavigationOptions: navigation => ({
                header: <Header {...navigation} />,
            }),
            cardStyle: {
                backgroundColor: '#191920',
            },
        }
    )
);

export default Routes;
