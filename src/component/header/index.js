import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Logo, Wrapper, Basket, TextBasket } from './styles';

export default function header({ navigation }) {
    return (
        <Wrapper>
            <Container>
                <Logo />
                <Basket
                    onPress={() => {
                        navigation.navigate('Cart');
                    }}
                >
                    <Icon name="shopping-basket" size={4} color="#fff" />
                    <TextBasket>24</TextBasket>
                </Basket>
            </Container>
        </Wrapper>
    );
}
