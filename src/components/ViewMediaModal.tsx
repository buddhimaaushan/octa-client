import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import Button from "./Button";
import Image from "./Uploads/Image";
import Video from "./Uploads/Video";
type Props = {
  children: React.ReactNode;
  name: string;
  file: any;
  type: string;
};

const ViewMediaModal = ({ children, name, file, type }: Props) => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div onClick={openModal}>{children}</div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto flex  items-center justify-center ">
            <div className="flex  items-center justify-center p-2 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className=" transform overflow-hidden rounded-2xl dark:bg-primary dark:border dark:border-gray-700 bg-blue-50 p-4 text-left align-middle shadow-xl transition-all">
                  <div className="w-full flex justify-between items-center">
                    <Dialog.Title
                      as="h3"
                      className="text-lg pb-2 font-medium leading-6 dark:text-blue-400 text-blue-500"
                    >
                      {name}
                    </Dialog.Title>
                    <div className="ml-4 mb-2">
                      <Button
                        icon={<RiCloseCircleLine />}
                        size="custom"
                        mode="normal"
                        className="justify-center font-semibold text-3xl dark:text-blue-400 text-blue-500"
                        onClick={closeModal}
                      />
                    </div>
                  </div>
                  <div className="mt-2">
                    {type === "image" ? (
                      <Image
                        className="w-fit h-fit sm:max-h-[50rem] max-h-[40rem] object-contain"
                        src={file}
                      />
                    ) : type === "video" ? (
                      <Video
                        controls
                        className="w-fit h-fit max-w-100 sm:max-h-[50rem] max-h-[40rem] "
                        src={file}
                      />
                    ) : type === "audio" ? (
                      <audio
                        className=" dark:bg-primaryLight bg-blue-50 dark:text-blue-400 text-blue-500"
                        controls
                        src={file}
                      ></audio>
                    ) : (
                      ""
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ViewMediaModal;
