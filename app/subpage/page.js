import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-4">
      <h1 className="font-semibold text-2xl">Here is a subpage</h1>
      <Link className="underline" href="/">
        Home page
      </Link>
    </main>
  );
}
