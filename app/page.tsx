"use client";

import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import Image from "next/image";
import { useState, useEffect } from "react";
import AudioPlayer from "@/components/ui/AudioPlayer";

const twisterImage = "https://i.ibb.co/zhXjD4G/0002-removebg-preview.png";

export default function Home() {
  const [twisters, setTwisters] = useState([]);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const createTwisterRain = () => {
      setTwisters(
        Array.from({ length: 30 }).map(() => ({
          id: Math.random(),
          x: Math.random() * 100,
          size: Math.random() * 80 + 30,
          duration: Math.random() * 2 + 1,
          delay: Math.random() * 3,
          rotate: Math.random() * 720,
        }))
      );
    };

    createTwisterRain();
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white font-sans overflow-hidden">
      {/* 🔊 Player de Áudio */}
      <AudioPlayer />

      {/* 🌌 Fundo dinâmico */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>

      {/* 🌟 CHUVA DE TWISTER */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {twisters.map((twister) => (
          <motion.div
            key={twister.id}
            initial={{ y: -100, opacity: 1, rotate: twister.rotate }}
            animate={{ y: "100vh", opacity: 0, rotate: twister.rotate + 360 }}
            transition={{
              duration: twister.duration,
              ease: "linear",
              repeat: Infinity,
              delay: twister.delay,
            }}
            style={{
              position: "absolute",
              left: `${twister.x}%`,
              width: `${twister.size}px`,
            }}
          >
            <Image src={twisterImage} alt="Twister Chuva" width={twister.size} height={twister.size} />
          </motion.div>
        ))}
      </div>

      {/* 🚀 Título High-Tech */}
      <header className="p-5 text-center relative z-10">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 neon-flicker">
          Honda Twister 2008 - HIPERSONIC MODE!
        </h1>
      </header>

      <main className="container mx-auto px-4 relative z-10">
        {/* 🚀 Moto Principal sem borda + MOVIMENTO ABSURDO */}
        <section className="relative flex justify-center items-center py-20">
          <Tilt tiltMaxAngleX={50} tiltMaxAngleY={50} scale={1.3}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: 1,
                y: [0, -30, 30, -40, 40, -20, 20, 0], // 🔥 MOVIMENTO INSANO
                rotate: [0, 10, -10, 20, -20, 5, -5, 0], // 🚀 EFEITO DE TURBO
                scale: [1, 1.1, 1], // 🔥 EXPANSÃO
                transition: { repeat: Infinity, duration: 0.5, ease: "easeInOut" },
              }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              className="relative w-full max-w-4xl h-[500px] rounded-lg overflow-hidden shadow-[0_0_80px_rgba(0,255,255,1)]"
            >
              {/* 🔥 Moto principal */}
              <div className="relative w-full h-full">
                <Image
                  src={twisterImage}
                  alt="Honda Twister 2008"
                  width={1000}
                  height={600}
                  priority
                  className="transition-transform duration-200 ease-in-out object-contain"
                />
              </div>
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
      </main>

      {/* 🚀 Rodapé */}
      <footer className="text-center py-5 bg-black/40">
        <p className="text-gray-400">&copy; 2025 Honda Twister. Todos os direitos reservados.</p>
      </footer>

      {/* 🔥 ESTILOS EXTRAS */}
      <style jsx>{`
        @keyframes rgb-border {
          0% { border-color: #ff0000; }
          25% { border-color: #00ff00; }
          50% { border-color: #0000ff; }
          75% { border-color: #ff00ff; }
          100% { border-color: #ff0000; }
        }

        @keyframes shake {
          0% { transform: translate(0px, 0px); }
          25% { transform: translate(2px, -2px); }
          50% { transform: translate(-2px, 2px); }
          75% { transform: translate(2px, -2px); }
          100% { transform: translate(0px, 0px); }
        }

        .animate-rgb {
          animation: rgb-border 1s infinite linear;
        }

        .animate-shake {
          animation: shake 0.1s infinite linear;
        }
      `}</style>
    </div>
  );
}
