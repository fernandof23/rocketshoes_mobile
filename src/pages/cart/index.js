import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
    EmpytContainer,
    TextEmpyt,
    Wrapper,
} from './styles';

export default function Cart() {
    const cart = useSelector(state =>
        state.cart.map(product => ({
            ...product,
            subTotal: formatPrice(product.price * product.amount),
        }))
    );

    const total = useSelector(state =>
        formatPrice(
            state.cart.reduce((fimTotal, product) => {
                return fimTotal + product.price * product.amount;
            }, 0)
        )
    );

    const dispatch = useDispatch();

    function decrement(product) {
        dispatch(CartActions.updateCartRequest(product.id, product.amount - 1));
    }

    function increment(product) {
        dispatch(CartActions.updateCartRequest(product.id, product.amount + 1));
    }
    return (
        <Wrapper>
            <Container>
                {cart.length ? (
                    <>
                        <List>
                            {cart.map(product => (
                                <ContainerList key={product.id}>
                                    <ContainerProduct>
                                        <ProductImage
                                            source={{ uri: product.image }}
                                        />
                                        <ContentText>
                                            <TitleProduct>
                                                {product.title}
                                            </TitleProduct>
                                            <TitlePrice>
                                                {product.priceFormatted}
                                            </TitlePrice>
                                        </ContentText>
                                        <IconDelete>
                                            <Icon
                                                name="delete-forever"
                                                size={24}
                                                color="#7159c1"
                                                onPress={() =>
                                                    dispatch(
                                                        CartActions.RemoveFromCart(
                                                            product.id
                                                        )
                                                    )
                                                }
                                            />
                                        </IconDelete>
                                    </ContainerProduct>
                                    <ContainerSubTotal>
                                        <AmountInfos>
                                            <Icon
                                                name="remove-circle-outline"
                                                size={24}
                                                color="#7159c1"
                                                onPress={() =>
                                                    decrement(product)
                                                }
                                            />
                                            <AmountProduct>
                                                {product.amount}
                                            </AmountProduct>
                                            <Icon
                                                name="add-circle-outline"
                                                size={24}
                                                color="#7159c1"
                                                onPress={() =>
                                                    increment(product)
                                                }
                                            />
                                        </AmountInfos>
                                        <SubTotalProduct>
                                            {product.subTotal}
                                        </SubTotalProduct>
                                    </ContainerSubTotal>
                                </ContainerList>
                            ))}
                        </List>

                        <ContainerResultado>
                            <TotalContainer>
                                <TextTotal>TOTAL</TextTotal>
                                <PriceTotal>{total}</PriceTotal>
                            </TotalContainer>
                            <ButtonFinish>
                                <TextButton>FINALIZAR PEDIDO</TextButton>
                            </ButtonFinish>
                        </ContainerResultado>
                    </>
                ) : (
                    <EmpytContainer>
                        <Icon
                            name="remove-shopping-cart"
                            size={70}
                            color="#ECECEC"
                        />
                        <TextEmpyt>Seu Carrinho está vazio.</TextEmpyt>
                    </EmpytContainer>
                )}
            </Container>
        </Wrapper>
    );
}
