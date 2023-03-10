type Props = {
  className: string;
  src: string;
  controls?: boolean;
};

const Video = ({ className, src, controls = false }: Props) => {
  return (
    <div className="cursor-pointer ">
      <video
        controls={controls}
        className={`${className} rounded-xl overflow-hidden border-none dark:bg-primaryLight bg-blue-50 `}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
