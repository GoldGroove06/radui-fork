import React, { PropsWithChildren, useEffect, useRef } from "react";
import clsx from "clsx";
import Primitive from '~/core/primitives/Primitive';



// export type ButtonGroupProps = {
//     buttons: { value:string }[];
 
// } & PropsWithChildren

const ButtonGroup = ({children, buttons}) => {
    const buttonGroupRef = useRef(null)
    const handleDownKey =(e, index) => {

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
    return( 
        <div ref={buttonGroupRef}>
            {buttons.map((item, index) => {
                return (
                  <Primitive.button key={index} value={item.value} className="px-4 py-2 border border-gray-700 bg-white text-black hover:bg-gray-100 hover:border-gray-900 focus:bg-gray-200 focus:border-gray-900" onKeyDown={(e) => handleDownKey(e, index)}>
                    {item.value}
                  </Primitive.button>
                );
            })
        }
        </div>
    )
}



export default ButtonGroup;