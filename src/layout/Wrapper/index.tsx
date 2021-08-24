import React from 'react';

const Wrapper: React.FC = ({ children }) => {
  return (
    <div className="grid grid-cols-4 bg-gray-100 dark:bg-gray-800 w-screen min-h-screen h-auto">
      {children}
    </div>
  );
}

export default Wrapper;