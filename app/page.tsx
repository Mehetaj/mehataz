"use client"

import Link from "next/link"
import { FloatingCylinders } from "@/components/floating-cylinders";
import Navigation from "@/components/navigation";

export default function Home() {





  return (
    <main className="relative min-h-screen overflow-hidden bg-gray-50 dark:bg-gray-900 transition-colors duration-300">

      <FloatingCylinders />



      <Navigation />
      {/* Content container */}
      <div className="relative z-10 min-h-screen flex flex-col">


        {/* Main content */}
        <div className="flex-1 flex flex-col justify-center items-center px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-700 dark:text-gray-200 tracking-wide leading-tight">
            <div>
              HEY, I&apos;M <span className="font-medium">MD MEHATAZ KHANDOKAR</span>
            </div>
            <div className="mt-2">
              BUT YOU CAN CALL ME <span className="font-medium">MEHATAZ</span>
            </div>
          </h1>
          <p className="mt-6 text-gray-600 dark:text-gray-300 text-lg">
            I&apos;m a Full-Stack Developer,
            <br />& Competitive Programmer
          </p>
          <div className="mt-10 flex gap-8 text-gray-600 dark:text-gray-300">
            <Link
              href="/work"
              className="flex items-center hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <span className="mr-2">→</span> see my works
            </Link>
            <Link
              href="/about"
              className="flex items-center hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <span className="mr-2">→</span> more about me
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

