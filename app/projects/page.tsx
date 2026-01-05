
import React from "react";
import { projects, currentProjects } from "./data";
import Link from "next/link";
import { ExternalLink, Github, ArrowUpRight, ArrowLeft } from "lucide-react";

export const metadata = {
    title: "Projects | Anurag Srivastav",
    description: "List of my projects and experiments.",
};

export default function ProjectsPage() {
    return (
        <section className="max-w-3xl mx-auto md:px-6 mt-16 pb-20">
            <div className="mb-12">
                <Link
                    href="/"
                    className="group inline-flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-300 transition-colors"
                >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </Link>
            </div>
            <header className="mb-20">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 text-zinc-900 dark:text-white">
                    Things <br />
                    <span className="text-zinc-500 dark:text-zinc-400">
                        I&apos;ve built.
                    </span>
                </h1>
                <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
                    I love building things. Here are some of the projects I&apos;ve worked
                    on. Many of them are open-source, so if you see something that piques
                    your interest, check out the code and contribute!
                </p>
            </header>

            <div className="space-y-24">
                {/* Current Focus Section */}
                {currentProjects.length > 0 && (
                    <section>
                        <h2 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-8">
                            Current Focus
                        </h2>
                        <div className="flex flex-col">
                            {currentProjects.map((project, index) => (
                                <ProjectListItem
                                    key={`current-${index}`}
                                    project={project}
                                    isLast={index === currentProjects.length - 1}
                                />
                            ))}
                        </div>
                    </section>
                )}

                {/* Top Projects Section */}
                <section>
                    <h2 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-8">
                        Projects
                    </h2>
                    <div className="flex flex-col">
                        {projects.slice(0, 4).map((project, index) => (
                            <ProjectListItem
                                key={`top-${project.id}`}
                                project={project}
                                isLast={index === 3}
                            />
                        ))}
                    </div>
                </section>

                {/* Other Projects Section */}
                <section>
                    <div className="mb-8">
                        <h2 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-4">
                            Other Projects
                        </h2>
                        <p className="text-zinc-500 dark:text-zinc-400 text-sm max-w-2xl leading-relaxed">
                            Built at the start of my journey. Full of bugs, security concerns, and spaghetti code. I honestly don&apos;t even remember where they are hosted anymore—so I can&apos;t take them down even if I wanted to.
                        </p>
                    </div>
                    <div className="flex flex-col">
                        {projects.slice(4).map((project, index) => (
                            <ProjectListItem
                                key={`other-${project.id}`}
                                project={project}
                                isLast={index === projects.length - 5}
                            />
                        ))}
                    </div>
                </section>
            </div>
        </section>
    );
}

interface Project {
    id: number;
    name: string;
    description: string;
    stack?: string;
    toolsused?: string;
    link?: string;
    url?: string;
    code?: string;
    logo?: string | null;
}

function ProjectListItem({ project, isLast }: { project: Project, isLast: boolean }) {
    const mainLink = project.link || project.url || project.code;
    const demoLink = project.link || project.url;

    return (
        <div className={`group block py-8 ${!isLast ? "border-b border-zinc-100 dark:border-zinc-800" : ""}`}>
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                        {/* Show tools if available, this covers the stack usually */}
                        {project.toolsused ? (
                            <div className="flex flex-wrap gap-2">
                                {project.toolsused.split(',').map((tool, i) => (
                                    <span key={i} className="px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300 text-[10px] font-bold uppercase tracking-wider">
                                        {tool.trim()}
                                    </span>
                                ))}
                            </div>
                        ) : (
                            // Fallback to stack if toolsused is missing
                            project.stack && (
                                <span className="px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300 text-[10px] font-bold uppercase tracking-wider">
                                    {project.stack}
                                </span>
                            )
                        )}
                    </div>

                    <h3 className="font-bold text-xl text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-3 flex items-center gap-2">
                        {project.name}
                        {mainLink && (
                            <Link href={mainLink as string} target="_blank" className="opacity-0 group-hover:opacity-100 transition-opacity text-zinc-400 hover:text-blue-500">
                                <ArrowUpRight size={18} />
                            </Link>
                        )}
                    </h3>

                    <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl mb-4">
                        {project.description}
                    </p>

                    <div className="flex items-center gap-4">
                        {project.code && (
                            <Link
                                href={project.code}
                                target="_blank"
                                className="flex items-center gap-1.5 text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
                            >
                                <Github size={14} />
                                <span>Code</span>
                            </Link>
                        )}
                        {demoLink && (
                            <Link
                                href={demoLink as string}
                                target="_blank"
                                className="flex items-center gap-1.5 text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
                            >
                                <ExternalLink size={14} />
                                <span>Demo</span>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

