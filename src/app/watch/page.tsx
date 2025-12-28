/* eslint-disable @typescript-eslint/no-explicit-any */
// app/watch/page.tsx
export default async function WatchPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/watch/categories`);
  const categories = await res.json();

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {categories.map((cat: any) => (
        <a
          key={cat.slug}
          href={`/watch/${cat.slug}`}
          className="border rounded p-6 text-center hover:bg-gray-100"
        >
          {cat.title}
        </a>
      ))}
    </div>
  );
}
