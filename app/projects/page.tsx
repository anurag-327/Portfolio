import React from "react";
import { projects, currentProjects } from "./data";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";

export const metadata = {
    title: "Projects | Anurag Srivastav",
    description: "List of my projects and experiments.",
};

export default function ProjectsPage() {
    const topProjects = projects.slice(0, 6);
    const moreProjects = projects.slice(6);

    return (
        <section className="max-w-4xl mx-auto mt-16 mb-20 px-6">
            <header className="mb-14">
                <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
                    Projects
                </h1>
                <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
                    I love building things. Here are some of the projects I&apos;ve worked
                    on. Many of them are open-source, so if you see something that piques
                    your interest, check out the code and contribute!
                </p>
            </header>

            {currentProjects.length > 0 && (
                <div className="mb-20">
                    <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-6 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                        Current Focus
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {currentProjects.map((project, index) => (
                            <div
                                key={index}
                                className="group relative block p-px rounded-xl bg-gradient-to-b from-zinc-200 to-transparent dark:from-zinc-800 dark:to-transparent overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative h-full bg-white dark:bg-zinc-900 p-6 rounded-[11px] transition-transform duration-300 group-hover:-translate-y-1">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-3">
                                            {project.logo ? (
                                                <div className="w-10 h-10 rounded-lg overflow-hidden bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center p-1">
                                                    <img
                                                        src={project.logo}
                                                        alt={project.name}
                                                        className="w-full h-full object-contain"
                                                    />
                                                </div>
                                            ) : (
                                                <div className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-lg">
                                                    {project.name.charAt(0)}
                                                </div>
                                            )}

                                            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                                                {project.name}
                                            </h3>
                                        </div>

                                        <div className="flex gap-2">
                                            {project.code && (
                                                <Link
                                                    href={project.code}
                                                    target="_blank"
                                                    className="p-2 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-full transition-all"
                                                    aria-label="Source Code"
                                                >
                                                    <Github size={18} />
                                                </Link>
                                            )}
                                            {project.link && (
                                                <Link
                                                    href={project.link}
                                                    target="_blank"
                                                    className="p-2 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-full transition-all"
                                                    aria-label="Live Demo"
                                                >
                                                    <ExternalLink size={18} />
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                    <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-6">
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <div>
                <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-8">
                    All Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                    {topProjects.map((project) => (
                        <div
                            key={project.id}
                            className="group relative flex flex-col h-full bg-zinc-50/50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-lg hover:shadow-zinc-200/50 dark:hover:shadow-black/20"
                        >
                            <div className="p-6 flex flex-col h-full">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="w-12 h-12 rounded-lg bg-white dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 flex items-center justify-center shadow-sm overflow-hidden relative">
                                        {project.logo ? (
                                            <img
                                                src={project.logo}
                                                alt={project.name}
                                                className="w-full h-full object-cover p-1"
                                            />
                                        ) : (
                                            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600">
                                                {project.name.charAt(0)}
                                            </span>
                                        )}
                                    </div>
                                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-2 group-hover:translate-x-0">
                                        {project.code && (
                                            <Link
                                                href={project.code}
                                                target="_blank"
                                                className="p-2 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-full transition-all"
                                                aria-label="Source Code"
                                            >
                                                <Github size={18} />
                                            </Link>
                                        )}
                                        {project.link && (
                                            <Link
                                                href={project.link}
                                                target="_blank"
                                                className="p-2 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-full transition-all"
                                                aria-label="Live Demo"
                                            >
                                                <ExternalLink size={18} />
                                            </Link>
                                        )}
                                    </div>
                                </div>

                                <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {project.name}
                                </h3>

                                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6 flex-grow">
                                    {project.description}
                                </p>

                                <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800/50 mt-auto">
                                    <div className="flex flex-wrap gap-2">
                                        {project.stack &&
                                            project.stack
                                                .split(",")
                                                .slice(0, 3)
                                                .map((tech, i) => (
                                                    <span
                                                        key={i}
                                                        className="text-[10px] uppercase font-semibold tracking-wider text-zinc-500 dark:text-zinc-500"
                                                    >
                                                        {tech.trim()}
                                                    </span>
                                                ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {moreProjects.length > 0 && (
                    <div>
                        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
                            More Projects
                        </h3>
                        <p className="text-zinc-600 dark:text-zinc-400 mb-6 text-sm leading-relaxed">
                            A trip down memory lane. Built years ago—some repos are lost, others are gathering dust, but they were all part of the journey.
                        </p>
                        <div className="flex flex-col gap-4">
                            {moreProjects.map((project) => (
                                <div
                                    key={project.id}
                                    className="flex items-center justify-between p-4 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800 rounded-lg group transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-20 rounded-md bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center overflow-hidden">
                                            {/* Simplified logo for list view */}
                                            {project.logo ? (
                                                <img
                                                    src={project.logo}
                                                    alt={project.name}
                                                    className="w-full h-full object-contain p-1"
                                                />
                                            ) : (
                                                <span className="font-bold text-zinc-400 dark:text-zinc-500">
                                                    {project.name.charAt(0)}
                                                </span>
                                            )}
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                                {project.name}
                                            </h4>
                                            <p className="text-xs mt-1 text-zinc-500 dark:text-zinc-500 line-clamp-1">
                                                {project.description}
                                            </p>

                                        </div>
                                    </div>

                                    <div className="flex gap-3">
                                        {project.code && (
                                            <Link
                                                href={project.code}
                                                target="_blank"
                                                className="text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors"
                                                aria-label="Source Code"
                                            >
                                                <Github size={16} />
                                            </Link>
                                        )}
                                        {project.link && (
                                            <Link
                                                href={project.link}
                                                target="_blank"
                                                className="text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors"
                                                aria-label="Live Demo"
                                            >
                                                <ExternalLink size={16} />
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
