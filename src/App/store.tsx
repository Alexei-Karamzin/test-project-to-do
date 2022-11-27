import {ActionCreatorsMapObject, AnyAction, bindActionCreators, combineReducers} from "redux";
import thunk, {ThunkDispatch} from "redux-thunk";
import {useDispatch} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import {useMemo} from "react";

import {projectsReducer} from "../Features/projects-reducer";

export const rootReducer = combineReducers({
    projects: projectsReducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunk)
})

export const useAppDispatch = () => useDispatch<AppDispatchType>()

// types

type AppDispatchType = ThunkDispatch<AppRootStateType, void, AnyAction>
export type RootReducerType = typeof rootReducer
export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store

/*
export function useActions<T extends ActionCreatorsMapObject>(action: T) {
    const dispatch = useAppDispatch()

    const boundActions = useMemo(() => {
        return bindActionCreators(action, dispatch)
    }, [])

    return boundActions
}*/
