import { ReactNode } from "react";
import clsx from "clsx";
import { Info, AlertTriangle, CheckCircle, XCircle } from "lucide-react";

type InfoBoxProps = {
    children: ReactNode;
    variant?: "info" | "warning" | "success" | "error" | "neutral";
    title?: string;
    className?: string;
};

const variants = {
    info: "bg-blue-50 dark:bg-blue-900/10 border-blue-100 dark:border-blue-900/30 text-blue-900 dark:text-blue-100",
    warning: "bg-amber-50 dark:bg-amber-900/10 border-amber-100 dark:border-amber-900/30 text-amber-900 dark:text-amber-100",
    success: "bg-green-50 dark:bg-green-900/10 border-green-100 dark:border-green-900/30 text-green-900 dark:text-green-100",
    error: "bg-red-50 dark:bg-red-900/10 border-red-100 dark:border-red-900/30 text-red-900 dark:text-red-100",
    neutral: "bg-zinc-50 dark:bg-zinc-900/50 border-zinc-100 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100",
};

const icons = {
    info: Info,
    warning: AlertTriangle,
    success: CheckCircle,
    error: XCircle,
    neutral: Info,
};

export default function InfoBox({
    children,
    variant = "neutral",
    title,
    className,
}: InfoBoxProps) {
    const Icon = icons[variant];

    return (
        <div
            className={clsx(
                "rounded-xl border p-5 md:p-6 my-8",
                variants[variant],
                className
            )}
        >
            {(title) && (
                <div className="flex items-center gap-2 mb-3 font-semibold">
                    <Icon className="w-5 h-5 opacity-80" />
                    <h4 className="m-0 text-inherit">{title}</h4>
                </div>
            )}
            <div className="text-sm md:text-base leading-relaxed opacity-90">
                {children}
            </div>
        </div>
    );
}
