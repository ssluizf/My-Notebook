import React, { useState } from "react";
import { useDispatch } from "react-redux"
import { setPageType } from "../../store/page.store.js";

const SidebarOptions: React.FC = () => {
  const dispatch = useDispatch();
  const [optionsOpened, setOptionsOpened] = useState(false);

  return (
    <div className="absolute right-0">
      <div className="flex justify-items-start items-center h-10 bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-200 rounded-r-lg transform translate-x-full">
        <div className={`flex justify-items-start items-center w-${optionsOpened ? 'full' : '0'} overflow-hidden`}>
          <div className="mx-2">
            <span className="cursor-pointer select-none" onClick={() => dispatch(setPageType({ type: "mural" }))}>Mural</span>
          </div>
          <div className="mx-2">
            <span className="cursor-pointer select-none" onClick={() => dispatch(setPageType({ type: "text" }))}>Texto</span>
          </div>
        </div>
        <button onClick={() => setOptionsOpened(!optionsOpened)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 transform rotate-${optionsOpened ? '180' : '0'}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SidebarOptions;
