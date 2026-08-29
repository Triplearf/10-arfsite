import React from "react";

interface GridBackgroundProps {
  children?: React.ReactNode;
  size?: number;
  color?: string;
}

export default function GridBackground({
  children,
  size = 32,
  color = "rgba(255, 255, 255, 0.05)",
}: GridBackgroundProps) {
  return (
    <div className="relative min-h-full w-full">
      {/* Background Grid Pattern */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundSize: `${size}px ${size}px`,
          backgroundImage: `
            linear-gradient(to right, ${color} 1px, transparent 1px),
            linear-gradient(to bottom, ${color} 1px, transparent 1px)
          `,
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        }}
      />

      {/* Content wrapper sitting above grid */}
      <div className="relative z-10 flex min-h-full flex-col">
        {children}
      </div>
    </div>
  );
}