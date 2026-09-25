import fotoProfil from '../assets/foto-profil.png.jpg'

function Hero() {
  return (
    <section id="hero" className="px-6 py-16 max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h2 className="text-3xl font-bold text-indigo-600 mb-4">Tentang Fadil Adi Maulana</h2>
        <p className="text-gray-600 leading-relaxed">
          Halo! Saya Fadil Adi Maulana, saat ini duduk di bangku SMA kelas 10.
          Saya punya rasa ingin tahu yang besar dan selalu senang mencoba
          hal-hal baru, salah satunya adalah dunia pemrograman dan teknologi web
          yang sedang saya pelajari sekarang.
        </p>
        <p className="text-gray-600 leading-relaxed mt-4">
          Di luar layar komputer, saya juga suka bermain basket. Buat saya,
          basket dan coding punya kemiripan — sama-sama butuh latihan terus-menerus,
          kesabaran, dan kemauan untuk terus belajar dari kesalahan sampai bisa
          jadi lebih baik.
        </p>
      </div>
      <img
        src={fotoProfil}
        alt="Foto Fadil Adi Maulana"
        className="rounded-lg w-full h-auto object-cover"
      />
    </section>
  )
}

export default Hero