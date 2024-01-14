// @/app/GlobalRedux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from 'redux-persist/lib/storage';

import userReducer from "./user/userSlice"

// Redux-Persist için yapılandırma
const persistConfig = {
  key: "root", // Depolama anahtarını belirtin
  storage, // localForage'i kullanarak depolama seçin
  whitelist: ["user"], // Kalıcı hale getirmek istediğiniz sliceleri belirtin
};

const rootReducer = combineReducers({
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
