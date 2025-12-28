import Link from "next/link";
import { ArrowUpRight, Terminal } from "lucide-react";

export default function CurrentFocus() {
    return (
        <div className="space-y-4 p-4">
            <div className="flex items-center gap-2">
                <Terminal className="size-4" />
                <h2 className="font-medium bg-gradient-to-r from-black to-gray-600 dark:from-white dark:to-gray-500 text-transparent bg-clip-text text-muted-foreground">
                    Current Focus
                </h2>
            </div>

            <div className="group relative overflow-hidden rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 p-6 transition-all hover:border-zinc-300 dark:hover:border-zinc-700">
                <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-4 mb-4">
                    <div>
                        <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                            Neuron
                            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
                                Active
                            </span>
                        </h3>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                            Distributed code execution infrastructure.
                        </p>
                    </div>
                    <a
                        href="https://neuron-dev.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                    >
                        <ArrowUpRight className="size-5" />
                    </a>
                </div>

                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-lg mb-4">
                    I&apos;m building a secure, high-concurrency remote code execution engine.
                    It&apos;s designed to safely run untrusted code (C++, Python, Go, etc.) in isolated environments.
                    Currently working on <strong>warm container pools</strong> to minimize cold-start latency.
                </p>

                <div className="flex gap-3 text-xs font-mono text-zinc-500 dark:text-zinc-500">
                    <span>Go</span>
                    <span>•</span>
                    <span>Docker</span>
                    <span>•</span>
                    <span>Redis</span>
                    <span>•</span>
                    <span>gRPC</span>
                </div>
            </div>
        </div>
    );
}
