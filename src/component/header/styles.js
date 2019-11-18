import styled from 'styled-components/native';

import logo from '../../assets/logo.png';

export const Wrapper = styled.SafeAreaView`
    display: flex;
    margin: 0;
    padding: 0;
`;

export const DivLogo = styled.TouchableOpacity``;

export const Container = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: #141419;
    padding: 20px;
`;

export const Logo = styled.Image.attrs({
    source: logo,
    resizeMode: 'cover',
})`
    width: 184px;
    height: 24px;
`;

export const Basket = styled.TouchableOpacity`
    height: 24px;
    width: 24px;
    flex: 1;
    align-items: flex-end;
    justify-content: flex-end;
`;

export const TextBasket = styled.Text`
    background: #7159c1;
    position: absolute;
    text-align: center;
    top: -8;
    right: -8;
    color: #fff;
    width: 18px;
    height: 18px;
    border-radius: 9px;
    font-size: 12px;
    overflow: hidden;
    padding: 2px;
`;
