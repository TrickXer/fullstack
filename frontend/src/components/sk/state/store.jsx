/* eslint-disable no-unused-vars */
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import eventReducer from './tickets/eventslice'
import ticketReducer from './tickets/ticketslice'
import checkoutReducer from './tickets/checkoutslice'


// configurations for redux-persist
const persistConfig = {
    key: "root",
    version: 1,
    storage
}

// explicit reducer combining
const reducer = combineReducers({
    events: eventReducer,
    tickets: ticketReducer,
    checkout: checkoutReducer,
})

// contains persisted form of the reducers
const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
    reducer: reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})

export const persistor = persistStore(store)