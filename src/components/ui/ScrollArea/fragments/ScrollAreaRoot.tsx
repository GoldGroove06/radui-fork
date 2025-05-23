import React, { useEffect, useRef } from 'react';
import clsx from 'clsx';

import { customClassSwitcher } from '~/core';
import { ScrollAreaContext } from '../context/ScrollAreaContext';

const COMPONENT_NAME = 'ScrollArea';

type ScrollAreaRootProps = {
    children: React.ReactNode;
    className?: string;
    customRootClass?: string;
};

const ScrollAreaRoot = ({ children, className = '', customRootClass = '', ...props }: ScrollAreaRootProps) => {
    const rootClass = customClassSwitcher(customRootClass, COMPONENT_NAME);
    const scrollXThumbRef = useRef<HTMLDivElement>(null);
    const scrollAreaViewportRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        initializeThumbHeight();
    }, [scrollXThumbRef, scrollAreaViewportRef]);

    const initializeThumbHeight = () => {
        // Container height
        const scrollAreaContainerHeight = scrollAreaViewportRef?.current?.clientHeight || 0;
        // Full height
        const scrollAreaHeight = scrollAreaViewportRef?.current?.scrollHeight || 0;

        const factor = scrollAreaHeight / scrollAreaContainerHeight;
        const finalHeight = (scrollAreaContainerHeight / factor);

        if (scrollXThumbRef.current) {
            scrollXThumbRef.current.style.height = `${finalHeight}px`;
        }
    };

    const handleScroll = () => {
        // The full height of all the content inside the scrollable element [Visible Area Height]
        const scrollAreaContainerHeight = scrollAreaViewportRef.current?.clientHeight || 0;

        // The full height of all the content inside the scrollable element [Total Content Height]
        const scrollAreaHeight = scrollAreaViewportRef.current?.scrollHeight || 0;

        // The current scroll position of the scrollable element [Scroll Position]
        const scrollTopPosition = scrollAreaViewportRef.current?.scrollTop || 0;

        // The height of the scroll thumb [Scroll Thumb Height]
        const scrollThumbHeight = scrollXThumbRef.current?.clientHeight || 0;

        const scrollThumbPosition = (scrollTopPosition / (scrollAreaHeight - scrollAreaContainerHeight)) * (scrollAreaContainerHeight - scrollThumbHeight);

        if (scrollXThumbRef.current) {
            scrollXThumbRef.current.style.top = `${scrollThumbPosition}px`;
        }
    };

    return <ScrollAreaContext.Provider value={{ rootClass, scrollXThumbRef, scrollAreaViewportRef, handleScroll }}>
        <div className={clsx(rootClass, className)} {...props} >{children}</div>
    </ScrollAreaContext.Provider>;
};

export default ScrollAreaRoot;
