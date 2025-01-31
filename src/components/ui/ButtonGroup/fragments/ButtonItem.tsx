import React, { useContext, useState } from 'react';

import { ButtonContext } from '../context/buttonContext';
import Button2 from '../../Button 2/Button2';
import TogglePrimitive from '~/core/primitives/Toggle';


export type ButtonItemProps = {
    children?: React.ReactNode;
    value?: any;
    props?: any;
};

const ButtonItem = ({ children, value = null, ...props }:ButtonItemProps) => {
    const { nextItem, previousItem } = useContext(ButtonContext);


    const [isFocused, setIsFocused] = useState(false);

    const ariaProps:any = {};
    const dataProps:any = {};

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

   

      

    const handleKeyDown = (e:any) => {
        if (e.key === 'ArrowRight') {
            // prevent scrolling when pressing arrow keys
            e.preventDefault();
            nextItem();
        }
        if (e.key === 'ArrowLeft') {
            // prevent scrolling when pressing arrow keys
            e.preventDefault();
            previousItem();
        }
    };


    return <TogglePrimitive
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...ariaProps}
        {...dataProps}
        data-rad-ui-batch-element
        onKeyDown={handleKeyDown}
        {...isFocused ? { 'data-rad-ui-focus-element': '' } : {}}
        {...props}

    >{children}</TogglePrimitive>;
};

export default ButtonItem;
