import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import asyncStorage from '@react-native-community/async-storage';

if (__DEV__) {
    const tron = Reactotron.setAsyncStorageHandler(asyncStorage)
        .configure()
        .use(reactotronRedux())
        .useReactNative()
        .connect();

    console.tron = tron;

    tron.clear();
}
