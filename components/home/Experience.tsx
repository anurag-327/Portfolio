import { Briefcase } from "lucide-react";

const EXPERIENCES = [
    {
        role: "Systems Engineer",
        company: "Tata Consultancy Services (TCS)",
        location: "Lucknow / Trivandrum",
        period: "Jul 2025 – Present",
        points: [
            "Completed Initial Learning Program (ILP) with training in Java, SQL, Spring Boot, Angular, and web development.",
            "Architecting a centralized Forms Integration Module, streamlining data collection workflows and ensuring seamless cross-platform interoperability across internal systems."
        ]
    },
    {
        role: "Founding Engineer",
        company: "Codolio",
        location: "Remote",
        period: "May 2024",
        points: [
            "Built and deployed a cloud-native notification microservice in Go using Redis and Asynq, delivering 5,000+ alerts daily.",
            "Implemented a real-time leaderboard using Redis Sorted Sets, serving 13,500+ users with instant API updates.",
            "Improved backend performance by optimizing MongoDB queries and streamlining data pipelines.",
            "Automated full-stack CI/CD pipelines using GitHub Actions, Vercel, AWS EC2, and PM2.",
            "Implemented a collaborative sheet feature with public sharing and role-based access control.",
            "Created Formwix, an internal form builder in React, TypeScript, Zod, and React Hook Form.",
            "Led frontend development and built 80% of the platform UI using Next.js, React, and Tailwind CSS."
        ]
    }
];

export default function Experience() {
    return (
        <div className="space-y-4 md:p-4">
            <div className="flex items-center gap-2">
                <Briefcase className="size-4" />
                <h2 className="font-medium bg-gradient-to-r from-black to-gray-600 dark:from-white dark:to-gray-500 text-transparent bg-clip-text text-muted-foreground">
                    Work Experience
                </h2>
            </div>

            <div className="relative pl-2">
                {/* Vertical line connecting items */}
                <div className="absolute left-[3px] top-2 bottom-2 w-px bg-zinc-200 dark:bg-zinc-800" />

                <div className="space-y-8">
                    {EXPERIENCES.map((exp, index) => (
                        <div key={index} className="relative pl-6">
                            {/* Dot on the timeline */}
                            <span className="absolute -left-[10.5px] top-2 h-3.5 w-3.5 rounded-full  border-white dark:border-black bg-zinc-300 dark:bg-zinc-600" />

                            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                                <h3 className="font-medium text-zinc-900 dark:text-zinc-100 text-sm md:text-base">{exp.role}</h3>
                                <span className="text-xs text-zinc-500 dark:text-zinc-500 font-mono whitespace-nowrap">{exp.period}</span>
                            </div>

                            <div className="text-xs text-zinc-500 dark:text-zinc-400 mb-3 flex items-center gap-2">
                                <span>{exp.company}</span>
                                <span>•</span>
                                <span>{exp.location}</span>
                            </div>

                            <ul className="list-disc list-outside ml-3 space-y-1.5 text-sm text-zinc-600 dark:text-zinc-400 marker:text-zinc-300 dark:marker:text-zinc-700">
                                {exp.points.map((pt, i) => (
                                    <li key={i}>{pt}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
