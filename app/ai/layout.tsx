export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4 py-8 md:py-10 px-20 w-full overflow-hidden">
      <div className="inline-block text-center justify-center">
        {children}
      </div>
    </div>
  );
}
