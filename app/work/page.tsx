"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Navigation from "@/components/navigation"
import { FloatingCylinders } from "@/components/floating-cylinders"
import { useEffect, useState } from "react"

export default function Work() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const projects = [
        {
            id: 1,
            title: "Mehetaz's Portfolio",
            link: "https://mehataz.netlify.app/",
            github: "https://github.com/Mehetaj/mehataz"
        },
        {
            id: 2,
            title: "JobPaw",
            link: "https://jobpaw-react.vercel.app/",
            github: "https://github.com/MH-Fahim11/jobpaw-React"
        },
        {
            id: 3,
            title: "Official Website",
            link: "https://officialwebsite.vercel.app/",
            github: "https://github.com/Mehetaj/jerins-client"
        },
        {
            id: 4,
            title: "Bistro Boss",
            link: "https://bistro-boss-4c0b8.web.app/",
            github: "https://github.com/Mehetaj/bistro-boss-client"
        },
        {
            id: 5,
            title: "Career Solution",
            link: "https://career-solution-website.vercel.app/", 
            github: "https://github.com/Mehetaj/career-solution"
        }
    ];

    return (
        <main className="relative min-h-screen overflow-hidden bg-white  transition-colors duration-300">
            
            {/* Render only on client-side */}
            {isClient && <FloatingCylinders />}

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
                        <h1 className="text-5xl md:text-9xl font-medium tracking-wide text-slate-700  border-b border-slate-300  pb-4">
                            WORK
                            <span className="text-lg ml-4 text-slate-500 ">9</span>
                        </h1>
                    </motion.div>

                    <div className="grid grid-cols-1 gap-0">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 * index }}
                                className="border-b border-slate-300  py-6"
                            >
                                <Link href={project.link} className="group grid grid-cols-1 md:grid-cols-2 items-center">
                                    <div className="text-xl md:text-5xl font-light text-slate-700  group-hover:text-slate-900  transition-colors">
                                        → {project.title}
                                    </div>
                                    <div className="text-right text-slate-500 ">
                                        <Link href={project.github}>Github Code</Link>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}
