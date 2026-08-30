
export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-[85vh] flex-col items-center justify-center gap-5">
      {children}	
    </div>
  );
}