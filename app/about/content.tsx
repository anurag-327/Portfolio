"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AboutContent() {
    return (
        <main className="min-h-screen font-sans selection:bg-zinc-900/20 dark:selection:bg-white/20">
            <div className="max-w-3xl mx-auto md:px-6 mt-16 pb-20">
                {/* Back Link */}
                <Link
                    href="/"
                    className="group inline-flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-300 transition-colors mb-12"
                >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </Link>

                {/* Header */}
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 text-zinc-900 dark:text-white">
                    I build the tools <br />
                    <span className="text-zinc-500 dark:text-zinc-400">
                        I wish I had.
                    </span>
                </h1>

                {/* Intro */}
                <div className="prose prose-lg max-w-none text-zinc-600 dark:text-zinc-400 space-y-6 mb-20 leading-relaxed">
                    <p>
                        I&apos;m a tech nerd at heart. I started my journey as a generalist full-stack developer, but over time, I found my true calling in the depths of <strong className="text-zinc-900 dark:text-white font-medium">backend engineering</strong>—where milliseconds matter and scalability is the only currency.
                    </p>
                </div>

                {/* Current Focus Section */}
                <section className="mb-20">
                    <h2 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-8">Current Focus</h2>

                    <div className="grid gap-12">
                        {/* Neuron */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-medium text-zinc-900 dark:text-white flex items-center gap-3">
                                Neuron
                                <span className="bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 text-xs px-2 py-0.5 rounded-full font-mono">Archive</span>
                            </h3>
                            <p className="text-zinc-600 dark:text-zinc-400 text-base leading-7 max-w-2xl">
                                I&apos;m currently building Neuron, a secure remote code execution infrastructure. It handles untrusted code execution across multiple languages primarily for competitive programming platforms.
                            </p>
                            <p className="text-zinc-600 dark:text-zinc-400 text-base leading-7 max-w-2xl">
                                It&apos;s an engineering playground where I&apos;m solving deep systems challenges—from architecting warm/cold container pools to optimizing kernel-level resource isolation. I&apos;m currently in the third phase of optimization, pushing latency down to the bare minimum.
                            </p>
                            <div className="pt-2">
                                <Link href="https://neuron-labs.xyz/journey" target="_blank" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-700 dark:text-zinc-300 border-b border-zinc-300 dark:border-zinc-700 pb-0.5 hover:border-zinc-900 dark:hover:border-zinc-300 transition-colors">
                                    Check out Neuron Journey
                                </Link>
                            </div>
                        </div>

                        {/* Codolio */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-medium text-zinc-900 dark:text-white">Founding Engineer @ Codolio</h3>
                            <p className="text-zinc-600 dark:text-zinc-400 text-base leading-7 max-w-2xl">
                                I served as a Founding Engineer at Codolio, where I manage the entire lifecycle of the platform. From designing the frontend and architecting the backend to handling deployments and building browser extensions, I own the stack end-to-end.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Node to Go Section - Simplified */}
                <section className="mb-20">
                    <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-6">Node.js to Go: A Love Story</h2>
                    <div className="space-y-6 text-zinc-600 dark:text-zinc-400 max-w-2xl">
                        <p>
                            Node.js was my go-to for a long time. It was familiar, flexible, and got the job done, so I stuck with it.
                        </p>
                        <p>
                            At some point, I wanted to learn Go. And the best way I know to learn a language is simple — <span className="text-zinc-900 dark:text-zinc-200">actually build things with it.</span> So I started using Go for backend work.
                        </p>
                        <p>
                            Since then, Go slowly became my favorite. I liked how simple and predictable it felt, how easy concurrency was with goroutines, and how confident I felt shipping backend code.
                        </p>
                        <p className="border-l-2 border-zinc-200 dark:border-zinc-800 pl-4 italic text-zinc-500">
                            Today, Go is my primary backend language — not because Node was bad, but because Go just felt right.
                        </p>
                    </div>
                </section>

                {/* Projects Section - Minimal List */}
                <section className="mb-20">
                    <h2 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-8">Why buy when you can build?</h2>

                    <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-12 max-w-2xl">
                        I don&apos;t just build tutorial apps. I build the stuffs I need for my own digital existence. If I need a tool, my first instinct isn&apos;t to find a SaaS—it&apos;s to open my IDE.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4">
                        <ProjectItem
                            title="Neuron"
                            desc="A distributed code execution platform. I engineered it to handle high concurrency safely, learning deep lessons about Docker internals and OS-level resource management along the way."
                        />
                        <ProjectItem
                            title="Formwix"
                            desc="A config-based form builder library. I wanted a way to generate complex, dynamic forms from simple JSON configurations, so I built a library to handle state, validation, and rendering automatically."
                        />
                        <ProjectItem
                            title="Personal OAuth Provider"
                            desc="Why rely on simplistic auth libraries? I implemented my own OAuth2 provider to truly understand the flow of tokens, sessions, and security protocols."
                        />
                        <ProjectItem
                            title="Custom Analytics Logger"
                            desc="I wanted to know who visits my site without handing data to Google. So I built a high-throughput logging service (using Supabase) tailored exactly to my metrics."
                        />
                    </div>
                </section>

                {/* Connect Section */}
                <section className="pt-10 border-t border-zinc-200 dark:border-zinc-900">
                    <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-6">Let&apos;s Connect</h2>
                    <p className="text-zinc-600 dark:text-zinc-400 max-w-xl mb-8 text-base">
                        I&apos;m always engineering something new. If you want to chat about distributed systems, Go, or just geek out over tech, feel free to reach out.
                    </p>

                    <div className="flex gap-6">
                        <a href="https://twitter.com/itsAnurag_sri" target="_blank" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors font-medium">
                            Twitter (X)
                        </a>
                        <a href="https://github.com/anurag-327" target="_blank" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors font-medium">
                            GitHub
                        </a>
                        <a href="https://linkedin.com/in/anuragsr327" target="_blank" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors font-medium">
                            LinkedIn
                        </a>
                    </div>
                </section>
            </div>
        </main>
    );
}

function ProjectItem({ title, desc }: { title: string, desc: string }) {
    return (
        <div className="group relative flex flex-col h-full bg-zinc-50/50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-lg hover:shadow-zinc-200/50 dark:hover:shadow-black/20 p-6">
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{title}</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{desc}</p>
        </div>
    );
}
