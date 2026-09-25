import fotoProfil from '../assets/foto-profil.png.jpg'

function About() {
  return (
    <section id="about" className="bg-gray-800 py-16">
      <div className="px-6 md:px-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <img
          src={fotoProfil}
          alt="Foto Fadil Adi Maulana"
          className="rounded-lg w-full h-auto object-cover shadow-md"
        />

        <div>
          <h2 className="text-2xl font-bold mb-4 text-white">Tentang Saya</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Halo! Saya Fadil Adi Maulana, saat ini duduk di bangku SMA
            kelas 10. Saya punya rasa ingin tahu yang besar dan selalu
            senang mencoba hal-hal baru, salah satunya adalah dunia
            pemrograman dan teknologi web yang sedang saya pelajari
            sekarang.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Di luar layar komputer, saya juga suka bermain basket. Buat
            saya, basket dan coding punya kemiripan — sama-sama butuh
            latihan terus-menerus, kesabaran, dan kemauan untuk terus
            belajar dari kesalahan sampai bisa jadi lebih baik.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About