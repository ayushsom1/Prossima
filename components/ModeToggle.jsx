"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={theme === "dark" ? "moon" : "sun"}
        initial={false}
      >
        <motion.circle
          cx="12"
          cy="12"
          r="5"
          variants={{
            sun: { 
              scale: 1.2,
              fill: "orange",
              transition: { duration: 0.7, ease: "easeInOut" }
            },
            moon: { 
              scale: 0,
              transition: { duration: 0.7, ease: "easeInOut" }
            }
          }}
        />
        <motion.g
          variants={{
            sun: { 
              rotate: 360,
              transition: { duration: 1, ease: "easeInOut" }
            },
            moon: { 
              rotate: 0,
              transition: { duration: 1, ease: "easeInOut" }
            }
          }}
        >
          {[...Array(12)].map((_, i) => (
            <motion.line
              key={i}
              x1="12"
              y1="1"
              x2="12"
              y2="3"
              variants={{
                sun: { 
                  scale: 1,
                  opacity: 1,
                  transition: { delay: i * 0.05, duration: 0.5 }
                },
                moon: { 
                  scale: 0,
                  opacity: 0,
                  transition: { delay: i * 0.05, duration: 0.5 }
                }
              }}
              transform={`rotate(${i * 30} 12 12)`}
            />
          ))}
        </motion.g>
        <motion.path
          d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
          variants={{
            sun: { 
              scale: 0,
              opacity: 0,
              transition: { duration: 0.7, ease: "easeInOut" }
            },
            moon: { 
              scale: 1,
              opacity: 1,
              transition: { duration: 0.7, ease: "easeInOut" }
            }
          }}
        />
        <motion.circle
          cx="12"
          cy="12"
          r="9"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          variants={{
            sun: { 
              scale: 1.1,
              opacity: 0.2,
              transition: { duration: 0.7, ease: "easeInOut" }
            },
            moon: { 
              scale: 0,
              opacity: 0,
              transition: { duration: 0.7, ease: "easeInOut" }
            }
          }}
        />
        {/* Creative moon elements */}
        <motion.path
          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"
          fill="currentColor"
          variants={{
            sun: { scale: 0, opacity: 0, x: 20, y: -20 },
            moon: { 
              scale: 1, 
              opacity: 1,
              x: 0,
              y: 0,
              transition: { delay: 0.2, duration: 0.5, type: "spring" }
            }
          }}
        />
        <motion.path
          d="M19 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
          fill="currentColor"
          variants={{
            sun: { scale: 0, opacity: 0, x: -15, y: 15 },
            moon: { 
              scale: 1, 
              opacity: 1,
              x: 0,
              y: 0,
              transition: { delay: 0.3, duration: 0.5, type: "spring" }
            }
          }}
        />
        <motion.path
          d="M17 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
          fill="currentColor"
          variants={{
            sun: { scale: 0, opacity: 0, x: 15, y: 15 },
            moon: { 
              scale: 1, 
              opacity: 1,
              x: 0,
              y: 0,
              transition: { delay: 0.4, duration: 0.5, type: "spring" }
            }
          }}
        />
      </motion.svg>
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}