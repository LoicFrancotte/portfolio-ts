import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className=' z-50'>
      <div>
        <h1 className="flex font-bold text-2xl md:ml-1">
          <img className='p-1 w-8 h-8' src="./logo.png" alt="Logo L" />
          Loïc
        </h1>
      </div>
    </div>
  );
};

export default Logo;

