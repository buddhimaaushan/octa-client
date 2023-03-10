type Props = {
  src: any;

  className?: string;
  alt?: string;
};

const Image = ({ src, className, alt }: Props) => {
  return (
    <div className="cursor-pointer ">
      <img
        className={`${className}  h-24 rounded-xl overflow-hidden border-none dark:bg-primaryLight bg-blue-50  `}
        src={src}
        alt={alt}
      />
    </div>
  );
};

export default Image;
