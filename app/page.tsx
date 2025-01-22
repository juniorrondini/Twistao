"use client";

import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import Image from "next/image";
import { useState, useEffect } from "react";
import AudioPlayer from "@/components/ui/AudioPlayer";

const twisterImage = "https://i.ibb.co/zhXjD4G/0002-removebg-preview.png";
const phrases = [
  "COMPRE TWISTÃO 2008",
  "IMEDIATAMENTE",
  "COMPRE AGORAAAAA",
  "AAAAAAAAAAAAAAA",
  "VELOCIDADE MÁXIMA",
  "O MELHOR NEGÓCIO DO MUNDO",
  "NÃO PERCA ESSA OPORTUNIDADE",
  "ACELERA, IRMÃO!!!",
];

export default function Home() {
  const [twisters, setTwisters] = useState([]);
  const [flashingTwisters, setFlashingTwisters] = useState([]);
  const [flashingPhrases, setFlashingPhrases] = useState([]);
  const [bigMessage, setBigMessage] = useState(false);

  useEffect(() => {
    // Criar chuva de Twisters
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

    // Criar Twisters piscando aleatoriamente
    const createFlashingTwisters = () => {
      setInterval(() => {
        setFlashingTwisters(
          Array.from({ length: 5 }).map(() => ({
            id: Math.random(),
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 100 + 50,
          }))
        );
      }, 300);
    };

    createFlashingTwisters();

    // Criar frases piscando rapidamente com cores aleatórias
    const createFlashingPhrases = () => {
      setInterval(() => {
        setFlashingPhrases(
          Array.from({ length: 5 }).map(() => ({
            id: Math.random(),
            text: phrases[Math.floor(Math.random() * phrases.length)],
            x: Math.random() * 80,
            y: Math.random() * 80,
            color: `hsl(${Math.random() * 360}, 100%, 50%)`, // 🎨 Cor aleatória!
          }))
        );
      }, 200);
    };

    createFlashingPhrases();

    // Mostrar mensagem GIGANTE aleatoriamente
    setInterval(() => {
      setBigMessage(true);
      setTimeout(() => {
        setBigMessage(false);
      }, 2000);
    }, 7000); // A cada 7 segundos, aparece por 2 segundos!
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

      {/* ⚡ TWISTERS PISCANDO ALEATORIAMENTE */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {flashingTwisters.map((twister) => (
          <motion.div
            key={twister.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 0.2,
              repeat: Infinity,
            }}
            style={{
              position: "absolute",
              left: `${twister.x}%`,
              top: `${twister.y}%`,
              width: `${twister.size}px`,
            }}
          >
            <Image src={twisterImage} alt="Twister Piscando" width={twister.size} height={twister.size} />
          </motion.div>
        ))}
      </div>

      {/* 🚀 FRASES PISCANDO RAPIDAMENTE */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {flashingPhrases.map((phrase) => (
          <motion.div
            key={phrase.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 0.1,
              repeat: Infinity,
            }}
            style={{
              position: "absolute",
              left: `${phrase.x}%`,
              top: `${phrase.y}%`,
              fontSize: "2rem",
              fontWeight: "bold",
              color: phrase.color,
              textShadow: `0 0 20px ${phrase.color}`,
            }}
          >
            {phrase.text}
          </motion.div>
        ))}
      </div>

      {/* 🔥 FRASE GIGANTE QUE APARECE POR 2 SEGUNDOS */}
      {bigMessage && (
        <div className="absolute inset-0 flex items-center justify-center z-50">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 0.5 }}
            className="text-white text-6xl font-extrabold text-center bg-red-600 p-10 rounded-lg shadow-[0_0_40px_rgba(255,0,0,1)]"
          >
            COMPRE TWISTÃO 2008 IMEDIATAMENTE
          </motion.div>
        </div>
      )}

      {/* 🚀 Moto Principal com MOVIMENTO INSANO */}
      <main className="container mx-auto px-4 relative z-10">
        <section className="relative flex justify-center items-center py-20">
          <Tilt tiltMaxAngleX={50} tiltMaxAngleY={50} scale={1.3}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: 1,
                y: [0, -50, 50, -70, 70, -30, 30, 0], // 🔥 MOVIMENTO HIPERATIVO
                rotate: [0, 20, -20, 40, -40, 10, -10, 0], // 🚀 GIRANDO SEM PARAR
                scale: [1, 1.2, 1], // 🔥 EXPANSÃO INSANA
                transition: { repeat: Infinity, duration: 0.3, ease: "easeInOut" },
              }}
              className="relative w-full max-w-4xl h-[500px] rounded-lg overflow-hidden"
            >
              <Image src={twisterImage} alt="Honda Twister 2008" width={1000} height={600} priority />
            </motion.div>
          </Tilt>
        </section>
      </main>
    </div>
  );
}
