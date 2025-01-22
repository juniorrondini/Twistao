import { useEffect, useRef } from "react";

const AudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const playAudio = async () => {
      if (audioRef.current) {
        audioRef.current.volume = 0.5; // Define o volume inicial

        try {
          await audioRef.current.play(); // Tenta iniciar o autoplay
        } catch (err) {
          console.warn("Autoplay bloqueado pelo navegador", err);
        }
      }
    };

    playAudio();
  }, []);

  return <audio ref={audioRef} src="twistao.mp3" loop />;
};

export default AudioPlayer;
