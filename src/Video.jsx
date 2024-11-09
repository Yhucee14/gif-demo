import gif from './assets/gif.mp4'

const Video = () => {
  return (
    <div className="w-full h-[300px]">
      <video
        src={gif}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Video;
