import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { smoothScrollTo } from '../utils/smoothScroll'

const links = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

function Navbar() {
  const [open, setOpen] = useState(false)

  function handleNavClick(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
    e.preventDefault()
    smoothScrollTo(id)
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 flex justify-between items-center px-6 md:px-10 py-5 bg-gray-900 border-b border-gray-700">
      <div className="leading-tight">
        <p className="font-bold text-sm sm:text-base md:text-lg tracking-wide text-white whitespace-nowrap">
          FADIL ADI MAULANA
        </p>
        <p className="text-[10px] sm:text-xs text-gray-400 tracking-widest uppercase">
          Web Developer
        </p>
      </div>

      {/* Desktop nav */}
      <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-200">
        {links.map((link) => (
          <motion.a
            key={link.id}
            href={`#${link.id}`}
            onClick={(e) => handleNavClick(e, link.id)}
            whileTap={{ scale: 0.9 }}
            className="hover:text-indigo-400 transition-colors duration-300 ease-in-out"
          >
            {link.label}
          </motion.a>
        ))}
      </nav>

      {/* Mobile hamburger button */}
      <motion.button
        whileTap={{ scale: 0.85 }}
        onClick={() => setOpen((prev) => !prev)}
        className="md:hidden flex flex-col gap-1.5 p-2 z-50"
        aria-label="Toggle menu"
      >
        <motion.span
          animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
          className="block w-6 h-0.5 bg-white"
        />
        <motion.span
          animate={open ? { opacity: 0 } : { opacity: 1 }}
          className="block w-6 h-0.5 bg-white"
        />
        <motion.span
          animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
          className="block w-6 h-0.5 bg-white"
        />
      </motion.button>

      {/* Mobile nav overlay */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 w-full bg-gray-900 border-b border-gray-700 flex flex-col items-center gap-4 py-6 text-sm font-medium text-gray-200"
          >
            {links.map((link) => (
              <motion.a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                whileTap={{ scale: 0.9 }}
                className="hover:text-indigo-400 transition-colors duration-300 ease-in-out"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar