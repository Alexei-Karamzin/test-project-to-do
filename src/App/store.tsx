import {AnyAction, combineReducers} from "redux";
import {ThunkDispatch} from "redux-thunk";
import {useDispatch} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import {projectsReducer} from "../Features/projects-reducer";
import {tasksReducer} from "../Features/tasks-reducer";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const rootReducer = combineReducers({
    projects: projectsReducer,
    tasks: tasksReducer
})

const persistConfig = {
    key: 'root',
    storage,
    //stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
};

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
})

export const persistor = persistStore(store)
export const useAppDispatch = () => useDispatch<AppDispatchType>()

// types

type AppDispatchType = ThunkDispatch<AppRootStateType, void, AnyAction> // удалить
export type RootReducerType = typeof rootReducer
export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store
