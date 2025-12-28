import Link from "next/link";
import { FolderGit2 } from "lucide-react";

const FEATURED_PROJECTS = [
    {
        name: "Neuron",
        description: "Secure, high-concurrency remote code execution engine.",
        link: "https://neuron-dev.vercel.app/",
        tech: ["Go", "Docker", "Redis"],
    },
    {
        name: "Formwix",
        description: "Config-based React form builder with Zod validation.",
        link: "https://formwix-docs.vercel.app/",
        tech: ["React", "TS", "Zod"],
    },
    {
        name: "Codolio",
        description: "Track, analyze & share. Codolio helps you navigate and track your coding journey to success.",
        link: "https://codolio.com",
        tech: ["Founding Engineer", "Full Stack"],
    },
    {
        name: "QuickSign",
        description: "OAuth provider for seamless user authentication.",
        link: "https://quick-sign.vercel.app",
        tech: ["React", "Node.js", "Mongo"],
    },
];

export default function SelectedProjects() {
    return (
        <div className="space-y-4 p-4">
            <div className="flex items-center gap-2 justify-between">
                <div className="flex items-center gap-2">
                    <FolderGit2 className="size-4" />
                    <h2 className="font-medium bg-gradient-to-r from-black to-gray-600 dark:from-white dark:to-gray-500 text-transparent bg-clip-text text-muted-foreground">
                        Selected Projects
                    </h2>
                </div>
                <Link
                    href="/projects"
                    className="text-xs text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
                >
                    View all →
                </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
                {FEATURED_PROJECTS.map((project) => (
                    <a
                        key={project.name}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all"
                    >
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                {project.name}
                            </h3>
                        </div>

                        <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-3 line-clamp-2">
                            {project.description}
                        </p>

                        <div className="flex gap-2 flex-wrap">
                            {project.tech.map((t) => (
                                <span key={t} className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}
