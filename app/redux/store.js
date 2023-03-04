import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Reducers
import expenseReducer from './ExpenseSlice';

// add the reducers that need to be persisted
const reducersToPersist = ['expense'];

const persistConfig = {
  key: 'expenseRoot',
  storage: AsyncStorage,
  whitelist: reducersToPersist
};

const reducers = combineReducers({
  expense: expenseReducer
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk, logger] // Note: logger should be the last item in the middleware
});

const persistor = persistStore(store);

export { store, persistor };
