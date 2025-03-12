"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const linkVariants = {
    closed: { opacity: 0, y: 20 },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 + i * 0.1,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  }

  return (
    <>
      {/* Logo */}
      <div className="fixed top-6 left-6 z-50">
        <Link href="/" className="block">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
              className="fill-slate-100"
            />
            <path
              d="M14.5 12C14.5 12 11 16.5 11 20C11 23.5 14.5 28 14.5 28M25.5 12C25.5 12 29 16.5 29 20C29 23.5 25.5 28 25.5 28M14.5 20H25.5"
              className="stroke-slate-600"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </Link>
      </div>

      {/* Menu Toggle Button */}
      <div className="fixed top-6 right-6 z-50">
        <button
          className="p-2 text-slate-600 hover:text-slate-900 transition-colors focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </div>

      {/* Full Screen Menu */}
      <motion.div
        className="fixed inset-0 z-40 bg-white/95 backdrop-blur-sm"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
      >
        <div className="flex flex-col items-start justify-center h-full px-12 md:px-24">
          <div className="w-full max-w-4xl mx-auto">
            <nav className="flex flex-col space-y-6">
              <motion.div custom={0} variants={linkVariants}>
                <Link
                  href="/"
                  className="group flex items-center text-5xl md:text-7xl font-light text-slate-600 hover:text-slate-900 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="opacity-50 mr-4 text-2xl md:text-3xl">01</span>
                  <span>HOME</span>
                </Link>
              </motion.div>

              <motion.div custom={1} variants={linkVariants}>
                <Link
                  href="/work"
                  className="group flex items-center text-5xl md:text-7xl font-light text-slate-600 hover:text-slate-900 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="opacity-50 mr-4 text-2xl md:text-3xl">02</span>
                  <span>WORK</span>
                </Link>
              </motion.div>

              <motion.div custom={2} variants={linkVariants}>
                <Link
                  href="/about"
                  className="group flex items-center text-5xl md:text-7xl font-light text-slate-600 hover:text-slate-900 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="opacity-50 mr-4 text-2xl md:text-3xl">03</span>
                  <span>ABOUT</span>
                </Link>
              </motion.div>

              <motion.div custom={3} variants={linkVariants}>
                <Link
                  href="/contact"
                  className="group flex items-center text-5xl md:text-7xl font-light text-slate-600 hover:text-slate-900 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="opacity-50 mr-4 text-2xl md:text-3xl">04</span>
                  <span>CONTACT</span>
                </Link>
              </motion.div>
            </nav>

            <motion.div custom={4} variants={linkVariants} className="mt-12 flex space-x-6">
              <Link
                href="https://instagram.com"
                target="_blank"
                className="flex items-center text-slate-600 hover:text-slate-900 transition-colors"
              >
                <span className="mr-2">→</span> instagram
              </Link>
              <Link
                href="https://behance.net"
                target="_blank"
                className="flex items-center text-slate-600 hover:text-slate-900 transition-colors"
              >
                <span className="mr-2">→</span> behance
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  )
}

