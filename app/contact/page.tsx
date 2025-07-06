"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Navigation from "@/components/navigation"
import { FloatingCylinders } from "@/components/floating-cylinders"


export default function Contact() {


  return (
    <main className="relative min-h-screen overflow-hidden bg-white  transition-colors duration-300">
      {/* 3D Background */}
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
            <h1 className="text-5xl md:text-6xl font-medium tracking-wide text-slate-700  border-b border-slate-300  pb-4">
              CONTACT
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-2xl text-slate-600  mb-4">MAIL</h2>
              <Link
                href="mailto:mehetajkhandaker@gmail.com"
                className="text-xl text-slate-700  hover:text-slate-900  transition-colors flex items-center"
              >
                → mehetajkhandaker@gmail.com
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h2 className="text-2xl text-slate-600  mb-4">SOCIAL MEDIAS</h2>
              <div className="space-y-3">
                <Link
                  href="https://www.linkedin.com/in/mehetaj-khandaker-/"
                  target="_blank"
                  className="text-xl text-slate-700  hover:text-slate-900  transition-colors flex items-center"
                >
                  → LinkedIn
                </Link>
                <Link
                  href="https://www.instagram.com/_mehetaj/"
                  target="_blank"
                  className="text-xl text-slate-700  hover:text-slate-900  transition-colors flex items-center"
                >
                  → instagram
                </Link>
                <Link
                  href="https://www.facebook.com/profile.php?id=100083754050543"
                  target="_blank"
                  className="text-xl text-slate-700  hover:text-slate-900  transition-colors flex items-center"
                >
                  → Facebook
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  )
}

