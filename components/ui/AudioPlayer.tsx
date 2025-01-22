import { useEffect, useRef } from "react";

const AudioPlayer = () => {
  const twistaoRef = useRef<HTMLAudioElement | null>(null);
  const randandanRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const playAudio = async () => {
      if (twistaoRef.current && randandanRef.current) {
        twistaoRef.current.volume = 1.0; // Volume MÁXIMO 🚀
        randandanRef.current.volume = 1.0; // Volume MÁXIMO 🚀

        try {
          await Promise.all([twistaoRef.current.play(), randandanRef.current.play()]); // 🔊 Ambos tocam juntos!
        } catch (err) {
          console.warn("Autoplay bloqueado pelo navegador", err);
        }
      }
    };

    playAudio();
  }, []);

  return (
    <>
      <audio ref={twistaoRef} src="twistao.mp3" loop />
      <audio ref={randandanRef} src="randandan.mp3" loop />
    </>
  );
};

export default AudioPlayer;
