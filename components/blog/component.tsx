import { ReactNode } from "react";
import clsx from "clsx";

export function List({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <ul
      className={clsx(
        "list-disc pl-6 space-y-2 text-zinc-700 dark:text-zinc-300 my-4",
        className
      )}
    >
      {children}
    </ul>
  );
}

export function OrderedList({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <ol
      className={clsx(
        "list-decimal pl-6 space-y-2 text-zinc-700 dark:text-zinc-300 my-4",
        className
      )}
    >
      {children}
    </ol>
  );
}

export function ListItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <li className={clsx("pl-1 leading-relaxed", className)}>{children}</li>;
}

export function OrderedListItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <li className={clsx("pl-1 leading-relaxed", className)}>{children}</li>;
}

export function Code({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className="my-6 rounded-lg overflow-hidden border border-zinc-800 bg-[#121212]">
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-zinc-800 bg-white/5">
        <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
      </div>
      <div className="overflow-x-auto p-4 md:p-6">
        <pre className={clsx("font-mono text-sm leading-relaxed text-zinc-300 !bg-transparent !p-0 !m-0", className)}>
          <code>{children}</code>
        </pre>
      </div>
    </div>
  );
}
