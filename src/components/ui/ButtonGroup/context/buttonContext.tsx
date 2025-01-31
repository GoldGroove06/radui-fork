import { createContext } from 'react';

export type ButtonContextType = {
    nextItem: () => void;
    previousItem: () => void;
};

export const ButtonContext = createContext<ButtonContextType>({
    nextItem: () => {},
    previousItem: () => {}
});