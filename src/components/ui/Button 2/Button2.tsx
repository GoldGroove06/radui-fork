import React, { forwardRef } from "react";
import { PropsWithChildren } from "react";

export type Button2Props = {
  ref?: React.Ref<HTMLButtonElement>;
} &  PropsWithChildren ;

const Button2 = forwardRef<HTMLButtonElement, Button2Props>(
  ({ children, ...props }, ref) => {
    return (
      <button ref={ref} className="px-4 py-2 border border-gray-700 bg-white text-black hover:bg-gray-100 hover:border-gray-900 focus:bg-gray-200 focus:border-gray-900" {...props}>
        {children}
      </button>
    );
  }
);

export default Button2;
