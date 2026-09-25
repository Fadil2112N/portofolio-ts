function Navbar() {
    return (
        <header className="flex justify-between items-center p-6">
            <h1 className="font-bold text-lg">Fadil Adi Maulana</h1>
            <nav className="flex gap-4">
                <a href="#hero">Home</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    )
}

export default Navbar