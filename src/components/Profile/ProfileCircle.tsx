type Props = {
  color: string;
  img: string;
  size?: number;
};

const ProfileCircle = ({ img, color, size = 16 }: Props) => {
  return (
    <div className="relative h-full flex justify-center items-center cursor-pointer trans-btn active:scale-95">
      <img
        src={img}
        alt="profile"
        className={`bg-${color}-200 w-${size} h-${size} outline outline-${
          size <= 14 ? 2 : 4
        } hover:outline-${size <= 14 ? 4 : 8}  outline-offset-${
          size <= 14 ? 2 : 4
        }   outline-${color}-500 rounded-full drop-shadow-lg m-4 transition-all duration-100 ease-in-out`}
      />
    </div>
  );
};

export default ProfileCircle;
