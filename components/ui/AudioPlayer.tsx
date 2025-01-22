import { useEffect, useRef, useState } from "react";

const AudioPlayer = () => {
  const twistaoRef = useRef<HTMLAudioElement | null>(null);
  const randandanRef = useRef<HTMLAudioElement | null>(null);
  const markRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playAudio = async () => {
    if (!twistaoRef.current || !randandanRef.current || !markRef.current) {
      console.warn("Elementos de áudio não carregados corretamente.");
      return;
    }

    twistaoRef.current.volume = 1.0;
    randandanRef.current.volume = 1.0;
    markRef.current.volume = 1.0;

    try {
      await Promise.all([
        twistaoRef.current.play(),
        randandanRef.current.play(),
        markRef.current.play(),
      ]);
      setIsPlaying(true);
    } catch (err) {
      console.warn("Autoplay bloqueado pelo navegador", err);
    }
  };

  const pauseAudio = () => {
    twistaoRef.current?.pause();
    randandanRef.current?.pause();
    markRef.current?.pause();
    setIsPlaying(false);
  };

  return (
    <div className="fixed top-5 right-5 z-50 bg-gray-900/80 p-3 rounded-lg shadow-lg">
      {!isPlaying ? (
        <button onClick={playAudio} className="bg-green-500 text-white px-4 py-2 rounded">
          🔊 TOCAR MÚSICA
        </button>
      ) : (
        <button onClick={pauseAudio} className="bg-red-500 text-white px-4 py-2 rounded">
          🔇 PAUSAR MÚSICA
        </button>
      )}

      <audio ref={twistaoRef} src="twistao.mp3" loop />
      <audio ref={randandanRef} src="randandan.mp3" loop />
      <audio ref={markRef} src="mark.mp3" loop />
    </div>
  );
};

export default AudioPlayer;
