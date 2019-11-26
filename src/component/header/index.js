import React from 'react';
import { useSelector } from 'react-redux';

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
    const cartSize = useSelector(state => state.cart.length);

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
                    <TextBasket>{cartSize}</TextBasket>
                </Basket>
            </Container>
        </Wrapper>
    );
}
