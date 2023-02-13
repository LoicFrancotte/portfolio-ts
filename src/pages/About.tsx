import React from 'react';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import Photo from '../components/Photo';
import Text2 from '../components/Text2';

const About: React.FC = () => {
  return (
    <div>
      <div className=' md:grid md:grid-cols-4 mt-10 grid grid-cols-2'>
        <div className=' md:col-start-1 md:flex xl:justify-center xl:ml-11 col-start-1 ml-3'>
          <Logo />
        </div>
        <div className=' md:col-start-3 md:flex xl:justify-center xl:ml-36 md:mt-1 mt-1'>
          <Navigation />
        </div>
      </div>
      <div className=' xl:grid-cols-2 grid'>
        <div className=' xl:row-start-1 xl:col-start-2 row-start-2 mx-5 md:mx-8 xl:my-auto xl:justify-center xl:ml-20 xl:mr-32 '>
          <Text2 />
        </div>
        <div className=' xl:col-start-1 xl:justify-center row-start-1 xl:mr-16 xl:flex xl: md:justify-center md:flex '>
          <Photo />
        </div>
      </div>
    </div>
  );
};

export default About;