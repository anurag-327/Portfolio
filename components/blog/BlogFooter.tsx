export default function BlogFooter({
  showNote = true,
}: {
  showNote?: boolean;
}) {
  return (
    <div className="border-t border-zinc-200 dark:border-zinc-700 pt-8">
      <p className="text-zinc-600 dark:text-zinc-400 mb-1">Signing out,</p>
      <p className="font-semibold text-base text-zinc-900 dark:text-zinc-200 mb-1">
        Anurag Srivastav
      </p>
      <p className="text-zinc-500 text-sm dark:text-zinc-500 italic mb-6">
        Founding Engineer, Codolio
      </p>
      {showNote && (
        <div className="bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg p-4">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            <strong>Note:</strong> Everything shared in this blog comes from my
            current understanding and experience at Codolio. I've written this
            to help others learn the way I did. If anything feels off or you
            have suggestions, feel free to share — I'm always learning too!
          </p>
        </div>
      )}
    </div>
  );
}
