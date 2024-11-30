import { ReactNode, Dispatch } from "react";

export interface userProps {
    id: number;
    nickname: string;
    created_at: string;
    updated_at: string;
}

export interface UserContextType {
    user: userProps | null;
    setUser: Dispatch<React.SetStateAction<userProps | null>>;
}

export interface buttonNavProps {
    tittle: string;
    icon: string;
    action?: () => void;
}

export interface zenQuotesProps {
    q: string;
    a: string;
    c?: string;
    h?: string;
}

export interface inspirationProps {
    tittle: string;
}

export interface buttonTemplete {
    tittle: string;
    icon: string;
    variant: string;
    action?: () => void;
}

export interface presentationProps {
    id: number;
    title: string;
    creator_id: string;
    created_at: string;
    updated_at?: string;
}

export interface modalProps {
    isOpen: boolean;
    closeModal: () => void;
}

export interface postProps {
    nickname: string;
    title: string;
}

export interface presentationsContextType {
    presentationList: presentationProps[];
    loadingPresentation: boolean;
    addPresentation: (presentation: presentationProps) => void;
    deletePresentation: (id: number) => void;
}

export type childrenContext = {
    children: ReactNode;
};

export type ActionPresentation =
    | {
          type: "SET_INITIAL";
          presentations: presentationProps[]; // Para inicializar con múltiples presentaciones
      }
    | {
          type: "ADD_PRESENTATION";
          presentations: presentationProps; // Para agregar una sola presentación
      }
    | {
          type: "DELETE_PRESENTATION";
          presentations: number; // Para eliminar por ID
      };

export type DispatchPresentation = Dispatch<ActionPresentation>;

export type ReducerPresentations = {
    presentations: presentationProps[];
    dispatch: DispatchPresentation;
};
