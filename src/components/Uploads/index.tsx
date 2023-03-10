import { useEffect, useState } from "react";
import { ReadFile } from "../../utils";
import RenderElement from "./RenderElement";

type Props = {
  width?: string;
  height?: string;
  className?: string;
  data: Array<object>;
  setData: Function;
};

const Uploads = ({
  width = "w-full",
  height = "h-fit",
  className,
  data,
  setData,
}: Props) => {
  const [files, setFiles] = useState<Array<any>>([]);
  const [fileIds, setFileIds] = useState<string[]>([]);

  useEffect(() => {
    const filteredData = data.filter(
      (file: any) => !fileIds.includes(file?.id)
    );
    filteredData.forEach((file) => ReadFile(file, setFiles, setFileIds));
  }, [data]);

  return (
    <div
      className={`flex justify-start items-center flex-wrap ${width} ${width} pt-4 pl-4 dark:bg-primary bg-blue-100  rounded-2xl select-none ${className}`}
    >
      {files.map((file, index) => (
        <RenderElement
          key={index}
          file={file}
          index={index}
          setData={setData}
          setFiles={setFiles}
          setFileIds={setFileIds}
        />
      ))}
    </div>
  );
};

export default Uploads;
