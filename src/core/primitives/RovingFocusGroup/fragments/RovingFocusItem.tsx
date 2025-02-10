import React, { useContext, useRef } from 'react';
import { RovingFocusGroupContext } from '../contexts/RovingFocusGroupContext';

export interface RovingFocusItemProps {
    children: any
}

function RovingFocusItem({children} : RovingFocusItemProps) {
    const {refArray, handleClick, handleDownKey} = useContext(RovingFocusGroupContext)
    const ref = useRef(null)
    refArray.push(ref)
    return (
        // React.cloneElement(children, {onClick:() => handleClick(ref), onKeyDown:(e) => {handleDownKey(e, ref)}, tabIndex:-1, ref:ref})
        <div onClick={() => handleClick(ref)} onKeyDown={(e) => {handleDownKey(e, ref)}} tabIndex={-1} ref={ref}>
            {children}
        </div>
    );
}

export default RovingFocusItem;