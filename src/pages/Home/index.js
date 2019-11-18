import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
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

export default class Home extends Component {
    state = {
        products: [],
    };

    async componentDidMount() {
        const response = await api.get(`/products`);
        this.setState({ products: response.data });
    }

    render() {
        const { products } = this.state;
        console.tron.log(products);
        return (
            <List
                data={products}
                keyExtractor={products => products.id}
                renderItem={({ item }) => (
                    <Container>
                        <ProductImg source={{ uri: item.image }} />
                        <SubTitle>
                            <TextTitulo>{item.title}</TextTitulo>
                            <TextPreco>{item.price}</TextPreco>
                        </SubTitle>
                        <ButtonAdicionar>
                            <ContainerButton>
                                <Icon
                                    name="add-shopping-cart"
                                    size={24}
                                    color="#fff"
                                />
                                <NumberButton>3</NumberButton>
                            </ContainerButton>
                            <TextButton>ADICIONAR</TextButton>
                        </ButtonAdicionar>
                    </Container>
                )}
            />
        );
    }
}
