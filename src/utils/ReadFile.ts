import React from "react";

const ReadFile = (file: any, setFiles: Function, setFileIds: Function) => {
  const reader = new FileReader();
  reader.addEventListener("load", (event: any) => {
    const result = event?.target?.result;

    setFiles((prev: any[]) => [
      ...prev.filter((item) => item.id !== file.id),
      {
        id: file.id,
        name: file.value.name,
        result,
        type: file.value.type.split("/")[0],
      },
    ]);
    setFileIds((prev: string[]) => [...prev, file.id]);
  });

  reader.addEventListener("progress", (event) => {
    if (event.loaded && event.total) {
      const percent = (event.loaded / event.total) * 100;
      setFiles((prev: any[]) => [
        ...prev.filter((item) => item.id !== file.id),
        {
          id: file.id,
          name: file.value.name,
          progress: Math.round(percent),
          type: "progress",
        },
      ]);
    }
  });
  reader.readAsDataURL(file.value);
};

export default ReadFile;
