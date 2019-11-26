import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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

export default function Home({ navigation }) {
    const amount = useSelector(state =>
        state.cart.reduce((setAmount, product) => {
            setAmount[product.id] = product.amount;
            return setAmount;
        }, {})
    );

    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function loadProducts() {
            const response = await api.get(`/products`);
            setProducts(response.data);
        }
        loadProducts();
    }, []);

    const dispatch = useDispatch();
    function handleAddCart(id) {
        dispatch(CartActions.addToCart(id, navigation));
    }

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
                    <ButtonAdicionar onPress={() => handleAddCart(item.id)}>
                        <ContainerButton>
                            <Icon
                                name="add-shopping-cart"
                                size={24}
                                color="#fff"
                            />
                            <NumberButton>{amount[item.id] || 0}</NumberButton>
                        </ContainerButton>
                        <TextButton>ADICIONAR</TextButton>
                    </ButtonAdicionar>
                </Container>
            )}
        />
    );
}
