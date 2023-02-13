import React from 'react';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import Photo from '../components/Photo';
import Text from '../components/Text';
import Buttons from '../components/Buttons';

const Home: React.FC = () => {
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
      <div className=' xl:grid xl:grid-cols-2'>
        <div className=' xl:col-start-2 xl:justify-end xl:flex xl:mx-auto md:justify-center md:flex'>
          <Photo />
        </div>
        <div className=' xl:row-start-1 xl:col-start-1 mx-5 md:mx-8 xl:my-auto xl:justify-center xl:mx-28 '>
          <Text />
          <Buttons />
        </div>
      </div>
    </div>
  );
};

export default Home;
