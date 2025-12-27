import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[88vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl mb-2">Bruh, you&apos;re in the void</h1>
        <Link
          href="/"
          className="px-4 text-sm py-2 hover:underline text-zinc-800 dark:text-zinc-200 hover:opacity-70 "
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
