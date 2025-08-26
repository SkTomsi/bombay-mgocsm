export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen relative md:max-w-prose mx-auto mt-20 max-md:px-5 py-5">
      <article className="flex flex-col w-full overflow-auto no-scrollbar mx-auto max-w-7xl gap-4 ">
        {children}
      </article>
    </div>
  );
}

EventsLayout.metadata = {
  title: "Events",
  description: "Events",
};
