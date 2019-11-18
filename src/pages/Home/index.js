import React, { Component } from 'react';
import { List } from './style';

import api from '../../services/api';

export default class Home extends Component {
    state = {
        product: [],
    };

    async componentDidMount() {
        const response = await api.get(`/products`);
        this.setState({ product: response.data });
        console.tron.log(response);
    }

    render() {
        return <List />;
    }
}
