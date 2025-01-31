import React, { useRef } from 'react';
import { clsx } from 'clsx';
import { ButtonContext } from '../context/buttonContext';


type ButtonGroupRootProps = {
    customRootClass?: string | '';
    children: React.ReactNode;
    className?: string;
    itemRefs?:String[];
}

const ButtonGroupRoot = ({ customRootClass = '', children, className,itemRefs, ...props }: ButtonGroupRootProps) => {
    const buttonGroupRef = useRef(null)
    const nextItem = () => {
            const currentRef = buttonGroupRef.current;
            console.log(buttonGroupRef.parentNode)
            
        };
    
        const previousItem = () => {
            const currentRef = buttonGroupRef?.current;
           
        };
    
        const sendValues = {
            nextItem,
            previousItem,
           
        };
    console.log(buttonGroupRef.current)
   

    return (
        <div className={clsx( className)} {...props} ref= {buttonGroupRef}>
            <ButtonContext.Provider value={sendValues}>
            {children}
            </ButtonContext.Provider>
            
        </div>
    );
};

export default ButtonGroupRoot;
