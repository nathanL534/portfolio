import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type GradientTextProps = {
  children: ReactNode;
  className?: string;
};

export function GradientText({ children, className }: GradientTextProps) {
  return (
    <span
      className={cn(
        "bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent",
        "[background-size:200%_200%] animate-[gradientMove_6s_linear_infinite]",
        className
      )}
    >
      {children}
    </span>
  );
}


