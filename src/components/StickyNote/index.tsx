import React, { useState } from 'react';

const StickyNote: React.FC = () => {
  const [displayNote, setDisplayNote] = useState(false)

  return !displayNote ? (
    <button onClick={() => setDisplayNote(true)}>
      <p className="text-gray-600 dark:text-gray-200 font-roboto py-4 px-4">+ Adicionar nota</p>
    </button>
  ) : (
    <div>
    </div>
  );
}

export default StickyNote;