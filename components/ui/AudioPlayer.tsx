import { useEffect, useRef } from "react";

const AudioPlayer = () => {
  const twistaoRef = useRef<HTMLAudioElement | null>(null);
  const randandanRef = useRef<HTMLAudioElement | null>(null);
  const markRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const playAudio = async () => {
      if (!twistaoRef.current || !randandanRef.current || !markRef.current) {
        console.warn("Elementos de áudio não carregados corretamente.");
        return;
      }

      // Definir volume máximo
      twistaoRef.current.volume = 1.0;
      randandanRef.current.volume = 1.0;
      markRef.current.volume = 1.0;

      try {
        await Promise.all([
          twistaoRef.current.play(),
          randandanRef.current.play(),
          markRef.current.play(),
        ]);
      } catch (err) {
        console.warn("Autoplay bloqueado pelo navegador", err);
      }
    };

    // Pequeno atraso para garantir que os elementos de áudio renderizaram
    setTimeout(playAudio, 500);
  }, []);

  return (
    <>
      <audio ref={twistaoRef} src="twistao.mp3" loop />
      <audio ref={randandanRef} src="randandan.mp3" loop />
      <audio ref={markRef} src="mark.mp3" loop />
    </>
  );
};

export default AudioPlayer;
