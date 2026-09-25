const projects = [
    {
        name: 'Website Portofolio Pribadi',
        desc: 'Website portofolio ini sendiri, dibuat menggunakan React, TypeScript, dan Tailwind CSS untuk menampilkan profil, skill, dan karya saya.',
        link: 'https://github.com/Fadil2112N/portofolio-ts',
    },
]

function Project() {
    return (
        <section id="projects" className="px-6 py-16">
            <h2 className="text-2xl font-bold text-center mb-10">Project Saya</h2>
            <div className="max-w-md mx-auto">
                {projects.map((project) => (
                    <div key={project.name} className="border rounded-lg p-6 text-center">
                        <h3 className="font-semibold mb-2">{project.name}</h3>
                        <p className="text-gray-500 text-sm mb-4">{project.desc}</p>

                        <a href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 text-sm underline"
                    >
                    Lihat di GitHub
                    </a>
                    </div>
                ))}


                
            </div>
        </section>
    )
}

export default Project 

    
    

