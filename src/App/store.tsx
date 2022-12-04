import {AnyAction, combineReducers} from "redux";
import thunk, {ThunkDispatch} from "redux-thunk";
import {useDispatch} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import {projectsReducer} from "../Features/projects-reducer";
import {tasksReducer} from "../Features/tasks-reducer";
import {saveState, loadState} from "../utils/localStorage-utils";

export const rootReducer = combineReducers({
    projects: projectsReducer,
    tasks: tasksReducer
})

export const store = configureStore({
    reducer: rootReducer,
    //loadState(),
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunk),
})

store.subscribe(() => {
    saveState({
        projects: store.getState().projects,
        tasks: store.getState().tasks
    });
});

export const useAppDispatch = () => useDispatch<AppDispatchType>()

// types

type AppDispatchType = ThunkDispatch<AppRootStateType, void, AnyAction>
export type RootReducerType = typeof rootReducer
export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store
