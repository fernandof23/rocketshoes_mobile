import Reactotron from 'reactotron-react-native';
import asyncStorage from '@react-native-community/async-storage';

if (__DEV__) {
    const tron = Reactotron.setAsyncStorageHandler(asyncStorage)
        .configure()
        .useReactNative()
        .connect();

    console.tron = tron;

    tron.clear();
}
