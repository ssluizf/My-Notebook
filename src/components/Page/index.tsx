import React from "react";
import { useSelector } from "react-redux";
import StickyNote from "../StickyNote";
import SidebarOptions from "../SidebarOptions";

const Page: React.FC = () => {
  const type = useSelector(
    (state: { page: { type: string } }) => state.page.type
  );

  return (
    <div className="flex flex-column relative col-start-2 col-end-4 mb-4 mt-4 bg-white dark:bg-gray-700 w-full h-auto min-h-screen shadow-lg z-40 overflow-visible">
      <div className="w-full h-full">{type === "mural" && <StickyNote />}</div>
      <SidebarOptions />
    </div>
  );
};

export default Page;
