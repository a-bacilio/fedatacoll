import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "reduxjs-toolkit-persist/lib/storage";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "reduxjs-toolkit-persist";
import authReducer from "./slices/authSlice";
import cartReducer from "./slices/cartSlice";
import { productsApi } from "./store/querys/products-query";
import { authAPI } from "./store/querys/auth-query";
import { checkoutAPI } from "./store/querys/checkout-query";
import { ordersAPI } from "./store/querys/orders-query";
import prescriptionReducer from "./slices/prescriptionSlice";
import { prescriptionAPI } from "./store/querys/prescription-query";
import { projectsAPI } from "./store/querys/projects-query";
import { questionsAPI } from "./store/querys/questions-query";
import { formquestionsAPI } from "./store/querys/formquestions-query";

const persistConfig = {
  key: "root",
  storage,
};

const reducers = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  prescription: prescriptionReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  // este sera el estado global de la apliaccion
  reducer: {
    persistedReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [authAPI.reducerPath]: authAPI.reducer,
    [checkoutAPI.reducerPath]: checkoutAPI.reducer,
    [ordersAPI.reducerPath]: ordersAPI.reducer,
    [prescriptionAPI.reducerPath]: prescriptionAPI.reducer,
    [projectsAPI.reducerPath]: projectsAPI.reducer,
    [questionsAPI.reducerPath]: questionsAPI.reducer,
    [formquestionsAPI.reducerPath]: formquestionsAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        /* ignore persistance actions */
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([
      productsApi.middleware,
      authAPI.middleware,
      checkoutAPI.middleware,
      ordersAPI.middleware,
      prescriptionAPI.middleware,
      projectsAPI.middleware,
      questionsAPI.middleware,
      formquestionsAPI.middleware,
    ]),
});

export const persistor = persistStore(store);
