import React from 'react';


function MagicalIcon() {
  return (
    <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M29.01 57.125C30.8449 57.125 32.3485 55.776 32.6034 53.8671C35.1264 36.8648 37.4455 34.4977 53.8066 32.6397C55.6925 32.4106 57.1451 30.8326 57.1451 29C57.1451 27.142 55.718 25.6148 53.8321 25.3348C37.5729 23.0696 35.5596 21.0843 32.6034 4.10747C32.2721 2.22398 30.8195 0.875 29.01 0.875C27.1497 0.875 25.6716 2.22398 25.3657 4.13292C22.8937 21.1097 20.5746 23.4768 4.23897 25.3348C2.30214 25.5894 0.875 27.1165 0.875 29C0.875 30.8326 2.25117 32.3597 4.188 32.6397C20.4727 34.9559 22.4605 36.9157 25.3657 53.8925C25.748 55.8015 27.2261 57.125 29.01 57.125Z" fill="#FC3D03" />
    </svg>
  )
}



const Photo: React.FC = () => {
  return (
    <div className='flex justify-center m-10 mb-16 xl:mt-16'>
      <div style={{ transform: "rotate(5deg)", border: "1px solid black" }}>
        <div style={{ transform: "rotate(-5deg)" }}>
          <img className=' w-64 mx-auto xl:w-72 z-10' src="./react.jpg" alt="Photo de profil" />
        </div>
      </div>

      {/* [REFACTOR]: Change this to an svg not an img tag */}
      <img className=' w-20 absolute xl:ml-80 xl:top-80 top-64 ml-72 -z-10 ' style={{ transform: "rotate(180deg)" }} src="./Vector 2.svg" alt="vector lines" />
      <img className=' w-20 absolute xl:mr-80 mr-72 -z-10' style={{ transform: "rotate(360deg)" }} src="./Vector 2.svg" alt="vector lines" />
      <img className='absolute xl:ml-72 xl:top-64 xl:w-12 top-48 ml-64 ' src="./magician-icon.svg" alt="" />
      <img className='absolute md:top-56 svg2 top-52 md:left-auto left-4 md:ml-9 xl:ml-auto -z-20 ' src="./Untitled.svg" alt="cercle into circle into circle" />
    </div>
  );
};

export default Photo;