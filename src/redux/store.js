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
import authReducer from "./slices/auth/authSlice";
import { authAPI } from "./store/querys/auth-query";
import { projectsAPI } from "./store/querys/projects-query";
import { questionsAPI } from "./store/querys/questions-query";
import { formquestionsAPI } from "./store/querys/formquestions-query";

const persistConfig = {
  key: "root",
  storage,
};

const reducers = combineReducers({
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  // este sera el estado global de la apliaccion
  reducer: {
    persistedReducer,
    [authAPI.reducerPath]: authAPI.reducer,
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
      authAPI.middleware,
      projectsAPI.middleware,
      questionsAPI.middleware,
      formquestionsAPI.middleware,
    ]),
});

export const persistor = persistStore(store);
