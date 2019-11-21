import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';
import asyncStorage from '@react-native-community/async-storage';

if (__DEV__) {
    const tron = Reactotron.setAsyncStorageHandler(asyncStorage)
        .configure()
        .use(reactotronRedux())
        .useReactNative()
        .use(reactotronSaga())
        .connect();

    console.tron = tron;

    tron.clear();
}
