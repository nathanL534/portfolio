import { cn } from "@/lib/utils";
import { HTMLAttributes, ReactNode } from "react";

type BorderBeamProps = HTMLAttributes<HTMLDivElement> & {
  borderRadius?: string;
  size?: number;
  duration?: number;
  delay?: number;
  colorFrom?: string;
  colorTo?: string;
  children?: ReactNode;
};

export function BorderBeam({ 
  className, 
  borderRadius = "1rem", 
  size = 200,
  duration = 15,
  delay = 0,
  colorFrom = "#2563eb",
  colorTo = "#06b6d4",
  children,
  ...props 
}: BorderBeamProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit] overflow-hidden",
        className
      )}
      style={{ borderRadius }}
      {...props}
    >
      <div 
        className="absolute inset-0 opacity-60"
        style={{
          background: `conic-gradient(from 90deg at 50% 50%, transparent 0%, ${colorFrom} 50%, ${colorTo} 100%, transparent 100%)`,
          animation: `spin ${duration}s linear infinite`,
          animationDelay: `${delay}s`,
          maskImage: `radial-gradient(${size}px at center, transparent 70%, black 70%)`,
          WebkitMaskImage: `radial-gradient(${size}px at center, transparent 70%, black 70%)`,
        }}
      />
      {children}
    </div>
  );
}


