import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { formatPrice } from '../../util/format';

import * as CartActions from '../../store/modules/cart/actions';

import {
    List,
    TextTotal,
    ButtonFinish,
    PriceTotal,
    ProductImage,
    TitleProduct,
    TitlePrice,
    AmountProduct,
    SubTotalProduct,
    Container,
    TotalContainer,
    ContainerResultado,
    ContainerList,
    ContainerProduct,
    ContainerSubTotal,
    TextButton,
    ContentText,
    IconDelete,
    AmountInfos,
} from './styles';

function Cart({ cart, RemoveFromCart, updateCartRequest, total }) {
    function decrement(product) {
        updateCartRequest(product.id, product.amount - 1);
    }

    function increment(product) {
        updateCartRequest(product.id, product.amount + 1);
    }
    return (
        <Container>
            <List
                data={cart}
                keyExtractor={cart => cart.id}
                renderItem={({ item }) => (
                    <ContainerList>
                        <ContainerProduct>
                            <ProductImage source={{ uri: item.image }} />
                            <ContentText>
                                <TitleProduct>{item.title}</TitleProduct>
                                <TitlePrice>{item.priceFormatted}</TitlePrice>
                            </ContentText>
                            <IconDelete>
                                <Icon
                                    name="delete-forever"
                                    size={24}
                                    color="#7159c1"
                                    onPress={() => RemoveFromCart(item.id)}
                                />
                            </IconDelete>
                        </ContainerProduct>
                        <ContainerSubTotal>
                            <AmountInfos>
                                <Icon
                                    name="remove-circle-outline"
                                    size={24}
                                    color="#7159c1"
                                    onPress={() => decrement(item)}
                                />
                                <AmountProduct>{item.amount}</AmountProduct>
                                <Icon
                                    name="add-circle-outline"
                                    size={24}
                                    color="#7159c1"
                                    onPress={() => increment(item)}
                                />
                            </AmountInfos>
                            <SubTotalProduct>{item.subTotal}</SubTotalProduct>
                        </ContainerSubTotal>
                    </ContainerList>
                )}
            />

            <ContainerResultado>
                <TotalContainer>
                    <TextTotal>TOTAL</TextTotal>
                    <PriceTotal>{total}</PriceTotal>
                </TotalContainer>
                <ButtonFinish>
                    <TextButton>FINALIZAR PEDIDO</TextButton>
                </ButtonFinish>
            </ContainerResultado>
        </Container>
    );
}

const mapStateToProps = state => ({
    cart: state.cart.map(product => ({
        ...product,
        subTotal: formatPrice(product.price * product.amount),
    })),
    total: formatPrice(
        state.cart.reduce((total, product) => {
            return total + product.price * product.amount;
        }, 0)
    ),
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
