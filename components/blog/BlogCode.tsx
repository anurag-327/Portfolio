export default function BlogCode({ code }: { code: string }) {
  return (
    <pre className="bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-300 p-4 rounded-lg overflow-x-auto mb-4">
      <code>{code}</code>
    </pre>
  );
}
