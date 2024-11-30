import { createContext, useReducer, useEffect } from "react";
import GetPresentationList from "../services/GetPresentationList";
import {
    childrenContext,
    presentationProps,
    ReducerPresentations,
    ActionPresentation,
} from "../interface";

export const PresentationsProvider = createContext<
    ReducerPresentations | undefined
>(undefined);

const presentationReducer = (
    state: presentationProps[],
    action: ActionPresentation
): presentationProps[] => {
    switch (action.type) {
        case "SET_INITIAL":
            return [...action.presentations];
        case "ADD_PRESENTATION":
            return [...state, action.presentations];
        case "DELETE_PRESENTATION":
            return state.filter(
                (presentation) => presentation.id !== action.presentations
            );
        default:
            return state;
    }
};

function PresentationsContext({ children }: childrenContext) {
    const { presentationList } = GetPresentationList();

    const initialState: presentationProps[] = [];
    const [presentations, dispatch] = useReducer(
        presentationReducer,
        initialState
    );

    useEffect(() => {
        if (presentationList?.length && presentationList.length > 0 && presentations.length === 0) {
            dispatch({ type: "SET_INITIAL", presentations: presentationList });
        }
    }, [presentationList]);

    return (
        <PresentationsProvider.Provider value={{ presentations, dispatch }}>
            {children}
        </PresentationsProvider.Provider>
    );
}

export default PresentationsContext;
