import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Wrapper = styled.SafeAreaView``;

export const Container = styled.View`
    display: flex;
    margin: 15px;
    background: #fff;
    padding: 20px;
    border-radius: 5px;
`;

export const List = styled.View``;

export const ContainerList = styled.View`
    display: flex;
    align-self: center;
    margin-bottom: 20px;
`;

export const ContainerProduct = styled.View`
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
`;

export const ProductImage = styled.Image`
    width: 80px;
    height: 80px;
`;

export const ContentText = styled.View`
    width: 163px;
    height: 60px;
    margin-top: 10px;
    margin-left: 10px;
`;

export const TitleProduct = styled.Text`
    font-size: 14px;
    line-height: 18px;
`;

export const TitlePrice = styled.Text`
    font-size: 16px;
    line-height: 19px;
    font-weight: bold;
    margin-top: 5px;
`;

export const IconDelete = styled.View`
    margin-left: 28px;
    margin-top: 28px;
`;

export const ContainerSubTotal = styled.View`
    display: flex;
    flex-direction: row;
    background: #eee;
    padding: 10px;
    width: 305;
    height: 40;
    border-radius: 4px;
    justify-content: space-between;
    align-items: center;
`;

export const AmountInfos = styled.View`
    display: flex;
    flex-direction: row;
`;

export const AmountProduct = styled.Text`
    border: 1px solid #eee;
    background: #fff;
    color: #666;
    width: 51px;
    height: 26px;
    margin-left: 5px;
    margin-right: 5px;
    border-radius: 3px;
    padding-left: 11px;
    padding-top: 5px;
    font-size: 14px;
    line-height: 16px;
`;

export const SubTotalProduct = styled.Text`
    font-size: 16px;
    font-weight: bold;
    line-height: 19px;
    color: #000;
`;

export const ContainerResultado = styled.View`
    display: flex;
    align-items: center;
    margin-top: 30px;
`;

export const TotalContainer = styled.View`
    margin-bottom: 30px;
`;

export const TextTotal = styled.Text`
    align-self: center;
    color: #999;
    font-size: 16px;
    font-weight: bold;
    line-height: 19px;
`;

export const PriceTotal = styled.Text`
    color: #000;
    font-size: 30px;
    font-weight: bold;
    line-height: 35px;
    letter-spacing: -1.6px;
    margin-top: 5px;
`;

export const ButtonFinish = styled(RectButton)`
    width: 315px;
    height: 42px;
    background: #7159c1;
    align-self: center;
    border-radius: 6px;
`;

export const TextButton = styled.Text`
    color: #fff;
    font-size: 14px;
    line-height: 16px;
    font-weight: bold;
    align-self: center;
    padding: 13px;
`;

export const EmpytContainer = styled.View`
    align-self: center;
    align-items: center;
    padding: 5px;
`;

export const TextEmpyt = styled.Text`
    padding-top: 20px;
    font-weight: bold;
    color: #000;
    font-size: 24px;
`;
