import React from 'react';
import CheckIcon2 from './Icones2';

function Button({ className, href, text, children }) {
  return (
    <button className={`${className} py-3 px-10`}>
      <a href="mailto:contact@contact.be">Got a project</a>
    </button>
  )
}

const Buttons: React.FC = () => {
  return (
    // [REFACTOR]: I want a btn component. Refactor
    <div className='pb-5 xl:ml-9'>
      <button className=' bg-fc3d03 text-white py-3 px-10'>
        <a href="mailto:contact@contact.be">Got a project</a>
      </button>
      <button className=' bg-transparent text-black py-3 px-10'>
        <a href="https://github.com/LoicFrancotte?tab=repositories">Portfolio <CheckIcon2 /></a>
      </button>


    </div>
  );
};

export default Buttons;