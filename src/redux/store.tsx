import { configureStore } from '@reduxjs/toolkit';

import messageReducer from './slices';

const store = configureStore({
    reducer: {
        message: messageReducer,
    },
});
export default store;
