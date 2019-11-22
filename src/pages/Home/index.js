import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../util/format';
import {
    Container,
    List,
    ProductImg,
    SubTitle,
    TextTitulo,
    TextPreco,
    ButtonAdicionar,
    NumberButton,
    TextButton,
    ContainerButton,
} from './style';

import api from '../../services/api';

class Home extends Component {
    state = {
        products: [],
    };

    async componentDidMount() {
        const response = await api.get(`/products`);
        this.setState({ products: response.data });
    }

    handleAddCart = id => {
        const { addToCart, navigation } = this.props;
        addToCart(id);
        navigation.navigate('Cart');
    };

    render() {
        const { products } = this.state;
        const { amount } = this.props;

        return (
            <List
                data={products}
                keyExtractor={product => String(product.id)}
                renderItem={({ item }) => (
                    <Container>
                        <ProductImg source={{ uri: item.image }} />
                        <SubTitle>
                            <TextTitulo>{item.title}</TextTitulo>
                            <TextPreco>{formatPrice(item.price)}</TextPreco>
                        </SubTitle>
                        <ButtonAdicionar
                            onPress={() => this.handleAddCart(item.id)}
                        >
                            <ContainerButton>
                                <Icon
                                    name="add-shopping-cart"
                                    size={24}
                                    color="#fff"
                                />
                                <NumberButton>
                                    {amount[item.id] || 0}
                                </NumberButton>
                            </ContainerButton>
                            <TextButton>ADICIONAR</TextButton>
                        </ButtonAdicionar>
                    </Container>
                )}
            />
        );
    }
}

const mapStateToProps = state => ({
    amount: state.cart.reduce((amount, product) => {
        amount[product.id] = product.amount;
        return amount;
    }, {}),
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
