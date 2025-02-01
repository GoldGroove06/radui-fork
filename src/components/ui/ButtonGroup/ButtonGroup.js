import React, { PropsWithChildren, useEffect, useRef } from "react";
import clsx from "clsx";
import ButtomGroupRoot from "./fragments/ButtonGroupRoot";
import ButtonItem from "./fragments/ButtonItem";



// export type ButtonGroupProps = {
//     buttons: { value:string }[];
 
// } & PropsWithChildren

const ButtonGroup = ({children, buttons}) => {

    
    return( 
        <ButtomGroupRoot>
       
            {buttons.map((item, index) => {
                return (
                  <ButtonItem key={index} value={item.value} index={index} length={buttons.length}>
                    {item.value}
                  </ButtonItem>
                );
            })
        }
       
        </ButtomGroupRoot>
    )
}



export default ButtonGroup;