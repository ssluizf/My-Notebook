import React, { useState } from "react";

const StickyNote: React.FC = () => {
  const [notes, setNotes] = useState(0);

  const handleNewNote = () => {
    setNotes(notes + 1);
  };

  return (
    <div className="h-full grid grid-cols-4 auto-rows-min gap-1 mt-1 ml-1">
      {Array.from(Array(notes)).map((_, index) =>
        <div key={`note-${index}`} className="h-6">
          <textarea className="outline-none rounded-sm border h-28 dark:bg-gray-400 resize-none" />
        </div>
      )}
      <button className="h-4" onClick={() => handleNewNote()}>
        <p className="text-gray-600 dark:text-gray-200 font-roboto py-4 px-4">
          + Adicionar nota
        </p>
      </button>
    </div>
  );
};

export default StickyNote;
