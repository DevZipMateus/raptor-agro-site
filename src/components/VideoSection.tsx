const VideoSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <video
            controls
            className="w-full rounded-lg shadow-lg"
            preload="metadata"
            onLoadStart={() => console.log("VideoSection: Iniciando carregamento...")}
            onCanPlay={() => console.log("VideoSection: Vídeo pronto para reproduzir")}
            onError={(e) => {
              console.error("VideoSection: Erro ao carregar vídeo:", e);
              const video = e.currentTarget as HTMLVideoElement;
              console.error("VideoSection error code:", video.error?.code);
              console.error("VideoSection error message:", video.error?.message);
            }}
          >
            <source src="/drone.mp4" type="video/mp4" />
            Seu navegador não suporta vídeos HTML5.
          </video>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
