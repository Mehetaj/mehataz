"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Navigation from "@/components/navigation"
import Image from "next/image"
import { FloatingCylinders } from "@/components/floating-cylinders"

export default function About() {


    return (
        <main className="relative min-h-screen overflow-hidden bg-white  transition-colors duration-300">

            <FloatingCylinders />


            {/* Navigation */}
            <Navigation />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-start justify-center min-h-screen px-4 py-20">
                <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-8"
                    >
                        <h1 className="text-5xl md:text-9xl font-medium tracking-wide text-slate-700  border-b border-slate-300  pb-4 mb-8">
                            ABOUT
                        </h1>

                        <div className="text-slate-700  space-y-6">
                            <p className="text-2xl">
                                Hey, my name is Mehataz Khandokar. I&apos;m a full-stack web developer specializing in React, Next.js, Node.js, and Express.js.
                                I have experience in frontend and backend development, creating multi-client service websites, portfolio projects,
                                and management platforms. I&apos;m also a problem solver, passionate about UI/UX design, and always eager to explore
                                new technologies, improve my coding skills, and build innovative solutions.
                            </p>

                            <Link
                                href="/resume.pdf"
                                className="inline-flex items-center text-slate-600  hover:text-slate-900  transition-colors"
                            >
                                ↓ resume
                            </Link>
                        </div>

                        <div className="mt-12">
                            <div className="w-24 h-24 relative">
                                <svg viewBox="0 0 100 100" className="w-full h-full">
                                    <circle cx="50" cy="50" r="40" fill="none" stroke="#6E7A97" strokeWidth="2" />
                                    <path d="M50,10 A40,40 0 0,1 90,50" fill="none" stroke="#6E7A97" strokeWidth="2" />
                                    <text x="50" y="55" textAnchor="middle" fontSize="10" fill="#6E7A97">
                                        designing
                                    </text>
                                    <text x="50" y="45" textAnchor="middle" fontSize="10" fill="#6E7A97">
                                        coding
                                    </text>
                                    <text x="30" y="30" textAnchor="middle" fontSize="10" fill="#6E7A97">
                                        playing
                                    </text>
                                    <text x="70" y="30" textAnchor="middle" fontSize="10" fill="#6E7A97">
                                        building
                                    </text>
                                </svg>
                            </div>
                        </div>
                    </motion.div>


                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative h-full min-h-[400px]"
                    >
                        <Image
                            src="/profile.jpg?height=1200&width=900"
                            alt="Md Mehataz Khandokar"

                            fill
                            className="object-cover rounded-lg"
                            priority
                        />
                    </motion.div>
                </div>
            </div>
        </main>
    )
}

