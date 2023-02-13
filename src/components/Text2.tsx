import React from 'react';

const Text2: React.FC = () => {
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
        My name is Loïc, I am 26 years old and I am currently
        pursuing a web development training at BeCode in Brussels,
        Belgium. With a strong passion for technology and a drive to
        constantly learn and improve my skills, I am dedicated to
        building creative and efficient solutions for the web. I am
        confident in my abilities to collaborate and work as part of
        a team, as well as taking initiative to work independently and
        effectively manage my time. I am excited to bring my unique
        perspective and skill set to any project and am always eager
        to learn from those around me.
      </p>
    </div>

  );
};

export default Text2