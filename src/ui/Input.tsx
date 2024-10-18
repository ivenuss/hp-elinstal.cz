import React, { forwardRef } from "react";

interface InputProps {
  textarea?: boolean;
  className?: string;
  rows?: number;
  error?: boolean;
  transparent?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ textarea, className = "", error, transparent, ...props }, ref) => {
    const cn =
      "w-full py-3.5 px-4 border-2 outline-none border-[#EBECEE] rounded-md";

    return textarea ? (
      <textarea ref={ref as any} className={cn} {...props} />
    ) : (
      <input ref={ref} className={cn} {...props} />
    );
  }
);
