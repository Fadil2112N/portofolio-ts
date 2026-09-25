const skills = [
    { title: 'HTML',
        desc: 'Membuat struktur dan kerangka dasar sebuah halaman website.',
    },
    {
        title: 'CSS',
        desc: 'Mendesain tampilan halaman agar rapi, menarik, dan enak dilihat.',
    },
    {
        title: 'JavaScript',
        desc: 'Menambahkan interaksi dan fungsi dinamis pada sebuah website.',

    }
]

function Skills() {
    return (
        <section className="px-6 py-16 bg-gray-50">
            <h2 className="text-2xl font-bold text-center mb-10">Yang Saya Kerjakan</h2>
            <div className="hrid gap-8 md:grid-cols-3 max-w-5xl ms-auto">
                {skills.map((skill) => (
                    <div key={skill.title} className="text-center">
                        <h3 className="font-semibold text-lg mb-2">{skill.title}</h3>
                        <p className="text-gray-500 text-sm">{skill.desc}</p>
                        </div>
                ))}

                
            </div>
        </section>
    )
}

export default Skills 