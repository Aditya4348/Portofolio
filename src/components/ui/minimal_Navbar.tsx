"use client"

import type React from "react"
import { Link, useLocation } from "react-router-dom"
import { Home, User, FolderGit, BriefcaseBusiness, FileBadge } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  icon: React.ReactNode
  to: string
  label: string
}

const navItems: NavItem[] = [
  {
    icon: <Home className="w-5 h-5" />,
    to: "/",
    label: "Home",
  },
  {
    icon: <User className="w-5 h-5" />,
    to: "/about",
    label: "About",
  },
  {
    icon: <BriefcaseBusiness className="w-5 h-5" />,
    to: "/experience",
    label: "Experience",
  },
]

export function MinimalNavbar() {
  const location = useLocation()

  return (
    <div className="fixed inset-x-0 top-auto bottom-8 lg:top-8 lg:bottom-auto flex justify-center z-50 px-6">
      <nav className="bg-white/95 backdrop-blur-sm border border-gray-200 shadow-sm rounded-full px-6 py-3 max-w-max">
        <ul className="flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = location.pathname === item.to

            return (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={cn(
                    "group relative flex flex-col items-center gap-1 transition-all duration-200",
                    "hover:scale-110 focus:outline-none",
                  )}
                >
                  <span
                    className={cn(
                      "transition-colors duration-200",
                      isActive ? "text-blue-600" : "text-gray-500 group-hover:text-gray-900",
                    )}
                  >
                    {item.icon}
                  </span>

                  <span
                    className={cn(
                      "text-xs font-medium transition-colors duration-200",
                      isActive ? "text-blue-600" : "text-gray-500 group-hover:text-gray-900",
                    )}
                  >
                    {item.label}
                  </span>

                  {/* Active indicator */}
                  {isActive && (
                    <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"></span>
                  )}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}
