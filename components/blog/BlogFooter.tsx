import Image from "next/image";

export default function BlogFooter({
  showNote = true,
}: {
  showNote?: boolean;
}) {
  return (
    <div className="border-t border-zinc-200 dark:border-zinc-800 py-8 mt-16">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center font-bold text-lg text-zinc-500">
          <Image
            src="/images/avatar.jpg"
            alt="avatar"
            height={40}
            className="grayscale hover:grayscale-0 transition duration-500 dark:shadow-[inset_-5px_-18px_38px_22px_#000000]"
            width={40}
          />
        </div>
        <div className="flex flex-col justify-center items-start h-fit">
          <div className="font-semibold text-lg text-zinc-900 dark:text-zinc-100">
            Anurag Srivastav
          </div>
          <div className="text-zinc-500 dark:text-zinc-400 text-sm">
            Founding Engineer @ Codolio
          </div>
        </div>
      </div>

      {showNote && (
        <div className="bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800 rounded-xl p-6 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          <span className="font-semibold text-zinc-900 dark:text-zinc-200">Note: </span>
          Everything shared in this blog comes from my current understanding and experience. I write to document my learnings.
          If you have feedback or suggestions, I&apos;d love to hear them!
        </div>
      )}
    </div>
  );
}
