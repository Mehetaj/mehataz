"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Navigation from "@/components/navigation"
import { FloatingCylinders } from "@/components/floating-cylinders"

export default function Work() {
   

    const projects = [
        {
            id: 1,
            title: "sharlee",
            category: "Branding",
            link: "/work/sharlee",
        },
        {
            id: 2,
            title: "act responsable",
            category: "Web Development",
            link: "/work/act-responsable",
        },
        {
            id: 3,
            title: "dua lipa",
            category: "Portrait",
            link: "/work/dua-lipa",
        },
        {
            id: 4,
            title: "cocolyze",
            category: "UX/UI Design",
            link: "/work/cocolyze",
        },
        {
            id: 5,
            title: "les indécis",
            category: "Branding",
            link: "/work/les-indecis",
        },
        {
            id: 6,
            title: "game of the goose",
            category: "Game Design",
            link: "/work/game-of-the-goose",
        },
        {
            id: 7,
            title: "l'équipe explore",
            category: "Illustration",
            link: "/work/lequipe-explore",
        },
        {
            id: 8,
            title: "silhouette",
            category: "Portrait",
            link: "/work/silhouette",
        },
    ]

    return (
        <main className="relative min-h-screen overflow-hidden bg-white dark:bg-slate-900 transition-colors duration-300">

            <FloatingCylinders />


            {/* Navigation */}
            <Navigation />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-start justify-center min-h-screen px-4 py-20">
                <div className="max-w-6xl mx-auto w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-12"
                    >
                        <h1 className="text-5xl md:text-6xl font-medium tracking-wide text-slate-700 dark:text-slate-200 border-b border-slate-300 dark:border-slate-700 pb-4">
                            WORK
                            <span className="text-lg ml-4 text-slate-500 dark:text-slate-400">9</span>
                        </h1>
                    </motion.div>

                    <div className="grid grid-cols-1 gap-0">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 * index }}
                                className="border-b border-slate-300 dark:border-slate-700 py-6"
                            >
                                <Link href={project.link} className="group grid grid-cols-1 md:grid-cols-2 items-center">
                                    <div className="text-xl md:text-2xl font-light text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                                        → {project.title}
                                    </div>
                                    <div className="text-right text-slate-500 dark:text-slate-400">{project.category}</div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}

