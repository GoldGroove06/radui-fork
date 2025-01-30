import React from 'react';
import { clsx } from 'clsx';


type ButtonGroupRootProps = {
    customRootClass?: string | '';
    children: React.ReactNode;
    className?: string;
    itemRefs?:String[];
}

const ButtonGroupRoot = ({ customRootClass = '', children, className,itemRefs, ...props }: ButtonGroupRootProps) => {
   console.log(children)

   

    return (
        <div className={clsx( className)} {...props}>
            {children}
        </div>
    );
};

export default ButtonGroupRoot;
