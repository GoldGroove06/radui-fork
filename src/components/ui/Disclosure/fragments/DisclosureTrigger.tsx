import React, { useContext } from 'react';
import clsx from 'clsx';
import { DisclosureContext } from '../contexts/DisclosureContext';
import { DisclosureItemContext } from '../contexts/DisclosureItemContext';
import CollapsiblePrimitive from '~/core/primitives/Collapsible';
import RovingFocusGroup from '~/core/utils/RovingFocusGroup';

export type DisclosureTriggerProps = {
    children: React.ReactNode;
    className?: string;
}

const DisclosureTrigger = ({ children, className }:DisclosureTriggerProps) => {
    const { activeItem, setActiveItem, rootClass } = useContext(DisclosureContext);
    const { itemValue } = useContext(DisclosureItemContext);

    const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (activeItem === itemValue) {
            setActiveItem(null);
        } else if (activeItem !== itemValue) {
            setActiveItem(itemValue);
        }
    };

    return (
        <RovingFocusGroup.Item>
            <CollapsiblePrimitive.Trigger asChild>
                <button
                    type='button'
                    className={clsx(`${rootClass}-trigger`, className)}
                    onClick={onClickHandler}
                    aria-expanded={activeItem === itemValue}
                    aria-haspopup='true'
                >

                    {children}
                </button>
            </CollapsiblePrimitive.Trigger>
        </RovingFocusGroup.Item>
    );
};

export default DisclosureTrigger;
