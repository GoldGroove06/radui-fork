import React, { useContext, useState } from 'react';

import {ButtonContext} from './ButtonGroupRoot';
import Primitive from '~/core/primitives/Primitive';


// export type ButtonItemProps = {
//     children?: React.ReactNode;
//     value?: any;
//     props?: any;
// };

const ButtonItem = ({ children, index, ...props }) => {
    const { buttonGroupRef } = useContext(ButtonContext);
    const handleDownKey =(e, index) => {
        console.log(index);
            if (e.key === 'ArrowRight') {  
                // prevent scrolling when pressing arrow keys
                e.preventDefault();
                buttonGroupRef.current.children[index + 1].focus();  
            }
            if (e.key === 'ArrowLeft') {
                // prevent scrolling when pressing arrow keys
                e.preventDefault();
                buttonGroupRef.current.children[index - 1].focus();  
            }
        }

    return (
        <Primitive.button className="px-4 py-2 border border-gray-700 bg-white text-black hover:bg-gray-100 hover:border-gray-900 focus:bg-gray-200 focus:border-gray-900" onKeyDown={(e) => handleDownKey(e, index)} {...props}>
            {children}
         </Primitive.button>
    )
};

export default ButtonItem;
