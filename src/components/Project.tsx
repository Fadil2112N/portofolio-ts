import { motion } from 'framer-motion'

const projects = [
  {
    name: 'Website Portofolio Pribadi',
    desc: 'Website portofolio ini sendiri, dibuat menggunakan React, TypeScript, dan Tailwind CSS untuk menampilkan profil, skill, dan karya saya.',
    link: 'https://github.com/Fadil2112N/portofolio-ts',
  },
]

function Project() {
  return (
    <section id="projects" className="px-6 py-16 bg-gray-800">
      <h2 className="text-2xl font-bold text-center mb-10 text-white">
        Project Saya
      </h2>
      <div className="max-w-md mx-auto grid gap-6">
        {projects.map((project) => (
          <motion.a
            key={project.name}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03, y: -4 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="block border border-gray-700 rounded-lg p-6 text-center bg-gray-900 shadow-md hover:border-indigo-400 hover:shadow-indigo-500/20 transition-colors"
          >
            <h3 className="font-semibold mb-2 text-white">{project.name}</h3>
            <p className="text-gray-400 text-sm mb-4">{project.desc}</p>
            <span className="text-indigo-400 text-sm underline">
              Lihat di GitHub
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  )
}

export default Project