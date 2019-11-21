import React from 'react';
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
    Container,
    Logo,
    Wrapper,
    Basket,
    TextBasket,
    DivLogo,
} from './styles';

function header({ cart, navigation }) {
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
                    <TextBasket>{cart}</TextBasket>
                </Basket>
            </Container>
        </Wrapper>
    );
}

export default connect(state => ({ cart: state.cart.length }))(header);
