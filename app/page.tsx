"use client"

import { motion } from "framer-motion"
import Tilt from "react-parallax-tilt"
import Image from "next/image"
import { useState } from "react"

export default function Home() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <header className="p-5">
        <h1 className="text-4xl font-bold text-center">Honda Twister 2008</h1>
      </header>

      <main className="container mx-auto px-4">
        <section className="py-20">
          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative w-full h-[60vh] rounded-lg overflow-hidden"
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              <Image
                src="/twister-2008.jpg"
                alt="Honda Twister 2008"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 ease-in-out"
                style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <motion.h2
                className="absolute bottom-10 left-10 text-5xl font-bold"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                O Futuro em Duas Rodas
              </motion.h2>
            </motion.div>
          </Tilt>
        </section>

        <section className="py-20">
          <h2 className="text-3xl font-bold mb-10 text-center">Características Principais</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Potência", "Agilidade", "Estilo"].map((feature, index) => (
              <motion.div
                key={feature}
                className="bg-gray-800 p-6 rounded-lg"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <h3 className="text-xl font-semibold mb-2">{feature}</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="py-20">
          <h2 className="text-3xl font-bold mb-10 text-center">Entre em Contato</h2>
          <form className="max-w-md mx-auto">
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2">
                Nome
              </label>
              <input type="text" id="name" className="w-full p-2 bg-gray-800 rounded" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">
                E-mail
              </label>
              <input type="email" id="email" className="w-full p-2 bg-gray-800 rounded" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-2">
                Mensagem
              </label>
              <textarea id="message" rows={4} className="w-full p-2 bg-gray-800 rounded"></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-blue-600 text-white py-2 rounded"
            >
              Enviar
            </motion.button>
          </form>
        </section>
      </main>

      <footer className="text-center py-5">
        <p>&copy; 2025 Honda Twister. Todos os direitos reservados.</p>
      </footer>
    </div>
  )
}

