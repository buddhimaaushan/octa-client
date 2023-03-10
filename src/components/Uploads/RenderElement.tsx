import { useState } from "react";
import { MdZoomOutMap } from "react-icons/md";
import { RiCloseCircleLine } from "react-icons/ri";
import ViewMediaModal from "../ViewMediaModal";
import Image from "./Image";
import Video from "./Video";

type Props = {
  file: any;
  index: number;
  setData: Function;
  setFiles: Function;
  setFileIds: Function;
};

const RenderElement = ({
  file,
  index,
  setData,
  setFiles,
  setFileIds,
}: Props) => {
  const [hover, setHover] = useState(false);

  const handleHover = () => setHover((prev) => !prev);
  const handleClose = () => {
    setData((prev: any[]) => prev.filter((item) => item.id !== file.id));
    setFiles((prev: any[]) => prev.filter((item) => item.id !== file.id));
    setFileIds((prev: string[]) => prev.filter((item) => item !== file.id));
  };
  return (
    <div
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      className="mr-4 mb-4 overflow-hidden rounded-xl relative"
    >
      {hover && (
        <div className="py-2 h-full w-full absolute flex flex-wrap justify-center items-center dark:bg-black/80 bg-blue-50/90 dark:text-white text-blue-500 text-3xl z-10">
          {(file.type === "image" ||
            file.type === "video" ||
            file.type === "audio") && (
            <div className="mr-1 px-4 trans-ele hover:scale-105 active:scale-95 cursor-pointer">
              <ViewMediaModal
                name={file.name}
                file={file.result}
                type={file.type}
              >
                <MdZoomOutMap />
              </ViewMediaModal>
            </div>
          )}

          <div
            onClick={handleClose}
            className="px-4 trans-ele hover:scale-105 active:scale-95 cursor-pointer"
          >
            <RiCloseCircleLine />
          </div>
        </div>
      )}
      {file.type === "image" ? (
        <Image className="w-24 h-24 object-cover" src={file.result} />
      ) : file.type === "video" ? (
        <Video className="w-24 h-24 " src={file.result} />
      ) : (
        <div className="cursor-pointer ">
          <div className="min-w-[6rem] w-fit max-w-xs p-4 h-24 rounded-xl overflow-hidden border-none dark:bg-primaryLight bg-blue-50 flex dark:text-blue-400 text-blue-500 justify-center items-center break-all ">
            {file.type === "progress"
              ? `Loading ${file.progress} - ${file.name}`
              : file.name}
          </div>
        </div>
      )}
    </div>
  );
};

export default RenderElement;
