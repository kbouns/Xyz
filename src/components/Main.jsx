import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import Test from '../assets/Test.png';

const Main = () => {
  return (
    <div id='main'>
      <img className='w-full h-screen object-cover object-contain object-right' src={Test} alt=''/>
      <div className='w-full h-screen absolute top-0 left-0 bg-white/25'>
        <div className='max-w-[1200px] m-auto h-2/3 w-full flex flex-col justify-center lg:items-start items-center'>
        <h1 className='flex sm:text-4xl text-3xl font-bold text-sky-600'>Je suis BK</h1>
        <h2 className='flex sm:text-3xl text-sky-600'>Je suis
          <TypeAnimation
            sequence={[
              'autodidacte en Développeur web',
              1000,
              'une personne motivé',
              1000,
            ]}
            wrapper='div'
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: '1em', paddingLeft: '7px', alignItems: 'center',}}
          />
        </h2>
      </div>
    </div>
    </div>
  );
};

export default Main;
