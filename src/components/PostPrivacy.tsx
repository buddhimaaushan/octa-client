import { useState, Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { FaUserLock, FaGlobeAsia } from "react-icons/fa";
import { RiShieldStarFill } from "react-icons/ri";

type Props = {};
const selectionList = [
  { name: "public", icon: <FaGlobeAsia /> },
  { name: "private", icon: <FaUserLock /> },
  { name: "protected", icon: <RiShieldStarFill /> },
];

const PostPrivacy = (props: Props) => {
  const [selected, setSelected] = useState(selectionList[0].name);
  return (
    <>
      {" "}
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="flex justify-center items-center w-36  rounded-2xl dark:bg-primaryDark bg-blue-200 text-blue-500 py-3 sm:text-md font-bold cursor-pointer">
            <span className="mr-2 flex justify-center items-center">
              {selectionList.find((item) => item.name === selected)?.icon}
            </span>
            <span className="block truncate">{`${selected
              .toLowerCase()
              .slice(0, 1)
              .toUpperCase()}${selected.toLowerCase().slice(1)}`}</span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="z-50 p-2 absolute mt-2 h-fit w-full overflow-auto rounded-xl  border dark:border-gray-700 border-blue-300  text-base drop-shadow-lg dark:bg-primaryDark bg-blue-100 focus:outline-none sm:text-md">
              {selectionList.map((selection, index) => (
                <Listbox.Option
                  key={index}
                  className={({ active, selected }) =>
                    `relative cursor-pointer select-none py-2  rounded-lg
                    ${
                      active
                        ? "dark:bg-blue-500 bg-blue-500 dark:text-primaryLight text-blue-100"
                        : "text-blue-500"
                    } 
                    ${selected && !active && "dark:bg-primary bg-blue-200"}
              `
                  }
                  value={selection.name}
                >
                  {({ selected }) => (
                    <div className="pl-4 flex justify-start items-center">
                      <span className="mr-2 flex justify-center items-center">
                        {selection?.icon}
                      </span>
                      <span
                        className={`block truncate ${
                          selected ? "font-bold " : "font-medium"
                        }`}
                      >
                        {`${selection.name
                          .toLowerCase()
                          .slice(0, 1)
                          .toUpperCase()}${selection.name
                          .toLowerCase()
                          .slice(1)}`}
                      </span>
                    </div>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </>
  );
};

export default PostPrivacy;
