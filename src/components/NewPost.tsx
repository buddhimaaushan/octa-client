import { ChangeEvent, useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { IoIosImages } from "react-icons/io";
import { MdVideoLibrary } from "react-icons/md";
import { AiTwotoneAudio, AiOutlinePaperClip } from "react-icons/ai";
import { HiHandThumbUp } from "react-icons/hi2";

import PostPrivacy from "./PostPrivacy";
import { ProfileCircle } from "./Profile";
import Button from "./Button";
import Uploads from "./Uploads";

type Props = {};

const upList = [
  { name: "Image", icon: <IoIosImages /> },
  { name: "Video", icon: <MdVideoLibrary /> },
  { name: "Audio", icon: <AiTwotoneAudio /> },
  { name: "Document", icon: <AiOutlinePaperClip /> },
];

const filetypes = {
  image: ".apng, .gif, .ico, .cur, .jpg, .jpeg, .jfif, .pjpeg, .pjp,.png, .svg",
  video: ".mp4, .webm, .ogg",
  audio: ".mp3, .wav, .ogg",
  document: "",
};

filetypes.document = `${filetypes.image} , ${filetypes.video}, ${filetypes.audio},.pdf, .doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document`;

const NewPost = (props: Props) => {
  const [uploadFiles, setUploadFiles] = useState<any>([]);
  const uploadRef = useRef<Array<HTMLInputElement>>([]);

  const handleUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const files =
      e.target.files &&
      Object.keys(e.target.files)?.map(
        (key) =>
          e.target.files && {
            value: e.target.files[parseInt(key)],
            id: uuidv4(),
          }
      );

    setUploadFiles((prev: any[]) => files && [...prev, ...files]);
  };

  // useEffect(() => {
  //   console.log(uploadFiles);
  // }, [uploadFiles]);

  return (
    <div>
      <form
        action="#"
        className="s:w-120 sm:w-130 w-100 min-w-52 h-fit dark:bg-primaryLight bg-blue-50 p-5 mb-5 rounded-3xl drop-shadow-lg flex flex-col justify-start items-start "
      >
        <div className="w-full flex  justify-between items-center select-none">
          <div className="flex justify-center items-center">
            <ProfileCircle
              img="https://randomuser.me/api/portraits/men/51.jpg"
              color="blue"
              size={10}
            />
            <div className="flex flex-col justify-start items-start ml-2">
              <div className="text-xl font-semibold  dark:text-gray-100 text-gray-800 ">
                Arachchige
              </div>
              <div className="text-sm font-semibold text-gray-500">
                @arachchige
              </div>
            </div>
          </div>
          <div>
            <PostPrivacy />
          </div>
        </div>
        <div className="w-full h-fit">
          <div
            className={`w-full p-3 my-3 dark:bg-primary bg-blue-100 dark:text-gray-400 text-gray-800 focus:outline-blue-500  focus:outline rounded-2xl no-scrollbar empty:before:content-[attr(data-before)]  before:text-gray-500`}
            role="textbox"
            data-before="What's on your mind, Arachchige?"
            contentEditable
          ></div>
          {uploadFiles.length > 0 && (
            <Uploads
              className="mb-2"
              data={uploadFiles}
              setData={setUploadFiles}
            />
          )}
        </div>
        <div className="w-full h-fit pt-2 flex justify-between items-center">
          <div className="w-max h-fit flex justify-between items-center font-semibold ">
            {upList.map((item, index) => (
              <div key={index}>
                <Button
                  name={item.name}
                  icon={item.icon}
                  size="custom"
                  mode="normal"
                  className="justify-center dark:text-gray-400 h-12 px-5 sm:mr-2 rounded-xl dark:hover:text-blue-400 text-blue-400 hover:text-blue-500"
                  classNameText="hidden sm:inline-block "
                  classNameIcon="sm:mr-1 text-2xl"
                  onClick={() => uploadRef.current[index].click()}
                />
                <input
                  ref={(el: HTMLInputElement) =>
                    (uploadRef.current[index] = el)
                  }
                  type="file"
                  accept={
                    filetypes[item.name.toLowerCase() as keyof typeof filetypes]
                  }
                  multiple
                  onChange={handleUpload}
                  hidden
                />
              </div>
            ))}
          </div>
          <Button
            name="Post"
            type="submit"
            icon={<HiHandThumbUp />}
            size="medium"
            mode="fill"
            className="justify-center font-semibold"
          />
        </div>
      </form>
    </div>
  );
};

export default NewPost;
