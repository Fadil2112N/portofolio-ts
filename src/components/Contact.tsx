function Contact() {
    return (
        <footer id="contact" className="px-6 py-16 text-center bg-gray-900 border-t border-gray-700">
            <h2 className="text-2xl font-bold mb-6">Kontak</h2>
            <div className="flex flex-col items-center gap-3">

                <a href="https://wa.me/6282117689752"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 underline hover:text-indigo-300"
                >
                    WhatsApp
                </a>

                <a href="https://instagram.com/dilmlnaa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 underline hover:text-indigo-300"
                >
                    Instagram
                </a>

                <a href="https://github.com/Fadil2112N"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 underline hover:text-indigo-300"
            
                >
                    GitHub
                </a>
            </div>
            
        </footer>
    )
}

export default Contact 