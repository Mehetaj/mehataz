"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useParams } from "next/navigation"
import Navigation from "@/components/navigation"
import Image from "next/image"
import { FloatingCylinders } from "@/components/floating-cylinders"

type Project = {
  title: string;
  category: string;
  description: string;
  images: string[];
};

type ProjectsData = Record<string, Project>;


// Mock project data
const projectsData: ProjectsData  = {
  sharlee: {
    title: "Sharlee",
    category: "Branding",
    description: "Personal branding project for my portfolio and online presence.",
    images: ["/placeholder.svg?height=800&width=1200", "/placeholder.svg?height=800&width=1200"],
  },
  "act-responsable": {
    title: "Act Responsable",
    category: "Web Development",
    description: "A website for a non-profit organization focused on sustainability.",
    images: ["/placeholder.svg?height=800&width=1200", "/placeholder.svg?height=800&width=1200"],
  },
  "dua-lipa": {
    title: "Dua Lipa",
    category: "Portrait",
    description: "Digital portrait series inspired by Dua Lipa's music and aesthetic.",
    images: ["/placeholder.svg?height=800&width=1200", "/placeholder.svg?height=800&width=1200"],
  },
  cocolyze: {
    title: "Cocolyze",
    category: "UX/UI Design",
    description: "UX/UI design for an SEO analytics platform.",
    images: ["/placeholder.svg?height=800&width=1200", "/placeholder.svg?height=800&width=1200"],
  },
  "les-indecis": {
    title: "Les Indécis",
    category: "Branding",
    description: "Brand identity for a French music collective.",
    images: ["/placeholder.svg?height=800&width=1200", "/placeholder.svg?height=800&width=1200"],
  },
  "game-of-the-goose": {
    title: "Game of the Goose",
    category: "Game Design",
    description: "Modern redesign of the classic board game.",
    images: ["/placeholder.svg?height=800&width=1200", "/placeholder.svg?height=800&width=1200"],
  },
  "lequipe-explore": {
    title: "L'équipe Explore",
    category: "Illustration",
    description: "Illustration series for a sports magazine's exploration section.",
    images: ["/placeholder.svg?height=800&width=1200", "/placeholder.svg?height=800&width=1200"],
  },
  silhouette: {
    title: "Silhouette",
    category: "Portrait",
    description: "Minimalist portrait series exploring human silhouettes.",
    images: ["/placeholder.svg?height=800&width=1200", "/placeholder.svg?height=800&width=1200"],
  },
}

export default function ProjectDetail() {
  const params = useParams()
  const slug = params.slug as string

  const project = projectsData[slug] || {
    title: "Project Not Found",
    category: "",
    description: "This project doesn't exist.",
    images: [],
  }


  return (
    <main className="relative min-h-screen overflow-hidden bg-white dark:bg-slate-900 transition-colors duration-300">

      <FloatingCylinders />


      {/* Navigation */}
      <Navigation />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start justify-start min-h-screen px-4 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <Link
              href="/work"
              className="inline-block mb-6 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              ← back to work
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h1 className="text-4xl md:text-5xl font-medium tracking-wide text-slate-700 dark:text-slate-200 mb-4">
                  {project.title}
                </h1>
                <p className="text-slate-600 dark:text-slate-400 mb-2">{project.category}</p>
                <p className="text-lg text-slate-700 dark:text-slate-300 mt-6">{project.description}</p>
              </div>
            </div>
          </motion.div>

          <div className="space-y-12">
            {project.images.map((image: string, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                className="relative w-full h-[60vh]"
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${project.title} - Image ${index + 1}`}
                  fill
                  className="object-cover rounded-lg"
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 flex justify-between"
          >
            <Link
              href="/work"
              className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              ← back to work
            </Link>

            <Link
              href="/contact"
              className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              contact me →
            </Link>
          </motion.div>
        </div>
      </div>
    </main>
  )
}

