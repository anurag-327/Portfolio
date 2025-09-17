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
      className={clsx("space-y-1 text-zinc-600 dark:text-zinc-400", className)}
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
        "list-decimal list-inside space-y-1 text-zinc-600 dark:text-zinc-400",
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
  return <li className={clsx("", className)}>• {children}</li>;
}

export function OrderedListItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <li className={clsx("", className)}>{children}</li>;
}

export function Code({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <pre
      className={clsx(
        "bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-300 p-4 rounded-lg overflow-x-auto mb-4",
        className
      )}
    >
      <code>{children}</code>
    </pre>
  );
}
