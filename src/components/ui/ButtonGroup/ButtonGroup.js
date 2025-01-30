import React, { PropsWithChildren, useEffect, useRef } from "react";
import clsx from "clsx";
import ButtonGroupRoot from './fragments/ButtonGroupRoot';
import Button2 from '~/components/ui/Button 2/Button2';

// export type ButtonGroupProps = {
//     buttons: { value:string }[];
 
// } & PropsWithChildren

const ButtonGroup = ({children, buttons}) => {
    const itemRefs = useRef([]);
    const handleItemClick = (index) => {
         itemRefs.current[index].focus();
      };

    const handleKeyDown = (event, index) => {
        console.log(event.key)
          if (event.key === "ArrowLeft") {
            itemRefs.current[index - 1].focus();
          }
          if (event.key === "ArrowRight") {
            itemRefs.current[index + 1].focus();
          }
          
         }
    return( 
        
        <ButtonGroupRoot>
            {buttons.map((button, index) => (
                <Button2 ref={(el) => (itemRefs.current[index] = el)} onClick={() => handleItemClick(index)} onKeyDown={() => handleKeyDown(event, index)}> {button.value} </Button2>
            )
            )}
    
        </ButtonGroupRoot>
        )
}



export default ButtonGroup;