import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
    Container,
    Logo,
    Wrapper,
    Basket,
    TextBasket,
    DivLogo,
} from './styles';

export default function header({ navigation }) {
    return (
        <Wrapper>
            <Container>
                <DivLogo
                    onPress={() => {
                        navigation.navigate('Home');
                    }}
                >
                    <Logo />
                </DivLogo>

                <Basket
                    onPress={() => {
                        navigation.navigate('Cart');
                    }}
                >
                    <Icon name="shopping-basket" size={24} color="#fff" />
                    <TextBasket>24</TextBasket>
                </Basket>
            </Container>
        </Wrapper>
    );
}
