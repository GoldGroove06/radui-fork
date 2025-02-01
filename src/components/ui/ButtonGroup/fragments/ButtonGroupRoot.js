import React, { createContext, useRef } from 'react';
import { clsx } from 'clsx';




// type ButtonGroupRootProps = {
//     customRootClass?: string | '';
//     children: React.ReactNode;
//     className?: string;
//     itemRefs?:String[];
// }
export  const ButtonContext = createContext();

const ButtonGroupRoot = ({ customRootClass = '', children, className,length, ...props }) => {
   
    const buttonGroupRef = useRef(null)
    

   

    return (
        <div className={clsx( className)} {...props} ref={buttonGroupRef}>
            <ButtonContext.Provider value={{buttonGroupRef}} length={length}>
                {children}
            </ButtonContext.Provider>
        </div>
    );
};

export default ButtonGroupRoot;
