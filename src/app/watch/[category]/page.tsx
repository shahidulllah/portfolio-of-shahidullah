/* eslint-disable @typescript-eslint/no-explicit-any */
export default async function CategoryPage({ params }: any) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/watch/playlists/${params.category}`
  );
  const playlists = await res.json();

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {playlists.map((pl: any) => (
        <a
          key={pl.slug}
          href={`/watch/${params.category}/${pl.slug}`}
          className="border p-4 rounded"
        >
          <h3>{pl.title}</h3>
        </a>
      ))}
    </div>
  );
}
