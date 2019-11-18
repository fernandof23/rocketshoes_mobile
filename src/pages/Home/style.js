import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const List = styled.FlatList.attrs({
    showsHorizontalScrollIndicator: false,
    horizontal: true,
})``;

export const Container = styled.View`
    width: 220px;
    height: 358px;
    border-radius: 10px;
    margin-left: 20px;
    margin-top: 30px;
    background: #fff;
`;

export const ProductImg = styled.Image`
    width: 200px;
    height: 200px;
    border-radius: 10px;
    align-self: center;
`;

export const SubTitle = styled.View`
    margin-top: auto;
    margin-left: 20px;
    margin-right: 14px;
    padding: 5px;
`;

export const TextTitulo = styled.Text`
    font-size: 16px;
    line-height: 21px;
    font-weight: bold;
    color: #333;
`;

export const TextPreco = styled.Text`
    font-size: 21px;
    font-weight: bold;
    line-height: 25px;
    margin-top: 5px;
`;

export const ButtonAdicionar = styled(RectButton)`
    display: flex;
    flex-direction: row;
    align-items: center;
    background: #7159c1;
    border-radius: 4px;
    width: 200px;
    height: 42px;
    margin: 10px;
`;

export const ContainerButton = styled.View`
    display: flex;
    flex-direction: row;
    padding: 10px;
    width: 53px;
    height: 42px;
    background: rgba(0, 0, 0, 0.1);
`;

export const NumberButton = styled.Text`
    margin-left: 3px;
    color: #fff;
    font-weight: bold;
`;

export const TextButton = styled.Text`
    color: #fff;
    padding-left: 37px;
    padding-top: 13px;
    padding-bottom: 13px;
    font-weight: bold;
`;
