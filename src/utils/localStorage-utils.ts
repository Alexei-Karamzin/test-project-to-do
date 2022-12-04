import {AppRootStateType} from "../App/store";

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

export const saveState = (state: AppRootStateType) => {
    try {
        const serializedProjects = JSON.stringify(state);
        const serializedState = JSON.stringify(state);
        localStorage.setItem('projects', serializedState);
        localStorage.setItem('tasks', serializedState);
    } catch {
        // ignore write errors
    }
};