"use client";

import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import Image from "next/image";
import { useState } from "react";
import AudioPlayer from "@/components/ui/AudioPlayer";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative min-h-screen bg-black text-white font-sans overflow-hidden">
      {/* 🔊 Player de Áudio */}
      <AudioPlayer />

      {/* 🌌 Background Dinâmico */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 animate-bg"></div>

      {/* 🌟 Partículas Neon */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-48 h-48 bg-cyan-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-20 animate-spin-slow"></div>
      </div>

      {/* 🚀 Título High-Tech */}
      <header className="p-5 text-center relative z-10">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 neon-flicker">
          Honda Twister 2008
        </h1>
      </header>

      <main className="container mx-auto px-4 relative z-10">
        {/* 🚀 Seção da Moto */}
        <section className="relative flex justify-center items-center py-20">
          <Tilt tiltMaxAngleX={30} tiltMaxAngleY={30} scale={1.2}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: 1,
                y: [0, -20, 20, -30, 30, -10, 10, 0], // 🔥 MOVIMENTO INSANO DA MOTO!
                rotate: [0, 2, -2, 2, -2, 1, -1, 0], // 🔥 TREME QUE NEM TURBO!
                transition: { repeat: Infinity, duration: 1, ease: "linear" }
              }}
              className="relative w-full max-w-4xl h-[500px] rounded-lg overflow-hidden shadow-[0_0_50px_rgba(0,255,255,0.9)] border-4 border-transparent animate-rgb"
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              {/* 🔥 Moto com Glow RGB */}
              <div className="relative w-full h-full">
                <Image
                  src="https://i.ibb.co/zhXjD4G/0002-removebg-preview.png"
                  alt="Honda Twister 2008"
                  width={1000}
                  height={600}
                  priority
                  className="transition-transform duration-300 ease-in-out object-contain"
                  style={{ transform: isHovered ? "scale(1.08)" : "scale(1)" }}
                />
              </div>
              <div className="absolute inset-0 bg-rgb blur-2xl opacity-40 animate-glow"></div>
              <motion.h2
                className="absolute bottom-10 left-10 text-5xl font-bold text-cyan-300 animate-glow"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                O Futuro em Duas Rodas
              </motion.h2>
            </motion.div>
          </Tilt>
        </section>

        {/* ⚡ Tecnologia Avançada - Agora com efeito de TURBO! */}
        <section className="py-20">
          <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
            Tecnologia Avançada
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["TurboBoost", "Hologram Display", "Pilotagem AI"].map((feature, index) => (
              <motion.div
                key={feature}
                className="bg-black/40 backdrop-blur-lg p-6 rounded-xl shadow-[0_0_30px_rgba(0,255,255,0.9)] border-[4px] border-transparent animate-rgb animate-spin-fast"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: 1,
                  scale: [1, 1.1, 1],
                  rotate: [0, 360], // 🔥 RODA IGUAL TURBINA!
                  backgroundColor: ["#ff0000", "#00ff00", "#0000ff", "#ff00ff", "#ff0000"], // 🌈 CORES INSANAS
                  transition: { repeat: Infinity, duration: 2, ease: "linear" }
                }}
                whileHover={{ scale: 1.2, boxShadow: "0px 0px 40px rgba(0,255,255,0.9)" }}
              >
                <h3 className="text-2xl font-semibold text-white mb-2">{feature}</h3>
                <p className="text-gray-300">
                  Tecnologia inovadora que redefine a experiência de pilotagem no futuro.
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      {/* 🚀 Rodapé */}
      <footer className="text-center py-5 bg-black/40">
        <p className="text-gray-400">&copy; 2025 Honda Twister. Todos os direitos reservados.</p>
      </footer>

      {/* 🔥 ESTILOS ANIMADOS */}
      <style jsx>{`
        @keyframes rgb-border {
          0% { border-color: #ff0000; }
          25% { border-color: #00ff00; }
          50% { border-color: #0000ff; }
          75% { border-color: #ff00ff; }
          100% { border-color: #ff0000; }
        }

        @keyframes spin-fast {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .animate-rgb {
          animation: rgb-border 1s infinite linear;
        }

        .animate-spin-fast {
          animation: spin-fast 0.5s infinite linear;
        }
      `}</style>
    </div>
  );
}
