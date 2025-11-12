const VideoSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <video
            controls
            className="w-full rounded-lg shadow-lg"
            preload="metadata"
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
