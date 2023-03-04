type Props = {
  children: Array<React.ReactNode>;
};

const SidebarLink = (props: Props) => {
  return (
    <div className="w-full h-20 flex justify-start items-center dark:bg-primary bg-blue-200 rounded-2xl  text-blue-500 dark:border border-blue-500 dark:hover:text-primary hover:text-blue-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:font-bold font-semibold px-5 mb-5 last:mb-0 overflow-hidden select-none cursor-pointer transition-all duration-200 ease active:scale-90">
      <div className="text-4xl ml-5 mr-8">{props.children[0]}</div>
      <div className="text-2xl ">{props.children[1]}</div>
    </div>
  );
};

export default SidebarLink;
