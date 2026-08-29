import React from 'react';

export default function ImagesCarousel({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full overflow-x-auto snap-x snap-mandatory gap-4 scroll-smooth">
      {React.Children.map(children, (child) => (
        <div className="snap-start shrink-0">
          {child}
        </div>
      ))}
    </div>
  );
}