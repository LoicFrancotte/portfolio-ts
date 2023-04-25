import React from 'react';
import CheckIcon from './Icones';

// [REFACTOR]: I want only <Text />   and use props, children to determine what to pass
// adding types for the props
const Text: React.FC = () => {
  return (
    <div className='text-react xl:ml-9'>
      <h1 className=' text-name font-bold text-2xl mb-3'>Hello! I'm Loïc <span>&#9995;</span></h1>
      <div className=" align-items-center mb-7">
        <h2 className="absolute text-post ml-20">
          Junior Web Developer
        </h2>
        <hr className='w-20 relative' style={{ border: '0.5px solid black', display: 'inline-block' }} />
        <img className='absolute xl:ml-72 xl:top-52 xl:w-8 w-6 ml-72 svg ' src="./magician-icon.svg" alt="" />
      </div>
      <p className='mb-5'>
        Hello! I'm Loïc francotte, a <strong>Junior Web Developer </strong>
        passionate about technology, striving to
        create user-friendly websites and constantly learning
        to tackle new challenges.
      </p>
      <ul className='mb-4'>
        <li><CheckIcon iconName="check" /> Product must be authentic</li>
        <li><CheckIcon iconName="check" /> Solve pain points elegantly</li>
        <li><CheckIcon iconName="check" /> User testing, feedback and validation</li>
      </ul>
    </div>
  );
};

export default Text;