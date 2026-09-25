function Navbar() {
    return (
        <header className="sticky top-0 z-50 flex justify-between items-center px-6 md:px-10 py-5 bg-white border-b border-gray-200">
            <div className="leading-tight">
                <h1 className="font-bold text-lg tracking-wide">FADIL ADI MAULANA</h1>
                <p className="text-xs text-gray-500 tracking-widest uppercase">
                    Web Developer
                </p>
            </div>

            <nav className="flex gap-6 text-sm font-medium">
                <a href="#hero" className="hover:text-indigo-600 transition-colors">
                    Home
                </a>
                <a href="#about" className="hover:text-indigo-600 transition-colors">
                    About
                </a>
                <a href="#skills" className="hover:text-indigo-600 transition-colors">
                    Skills
                </a>
                <a href="#projects" className="hover:text-indigo-600 transition-colors">
                    Projects
                </a>
                <a href="#contact" className="hover;text-indigo-600 transition-colors">
                    Contact
                </a>
            
            </nav>
        </header>
    )
}
export default Navbar 