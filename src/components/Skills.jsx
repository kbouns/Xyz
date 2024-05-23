import React from 'react';
import HTML5img from '../assets/HTML5.png';
import CSS3img from '../assets/CSS3.png';
import Javascriptimg from '../assets/javascript.png';
import Reactimg from '../assets/React.png';
import Tailwind from '../assets/tailwind.png'

const Skills = () => {
  const tech = [
    {
      id: 1,
      img: HTML5img,
      title: 'HTML',
      style: 'shadow-orange-500',
    },
    {
      id: 2,
      img: CSS3img,
      title: 'CSS3',
      style: 'shadow-blue-500',
    },
    {
      id: 3,
      img: Javascriptimg,
      title: 'Javascript',
      style: 'shadow-yellow-500',
    },
    {
      id: 4,
      img: Reactimg,
      title: 'React',
      style: 'shadow-blue-500',
    },
    {
      id : 5,
      img : Tailwind,
      title : 'Tailwind CSS',
      style: 'shadow-sky-400',
    },
  ];

  return (
    <div>
      <div id='skills' className='max-w-[1090px] mx-auto md:pl-20 p-4 py-10'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Mes technologies en cours</h1>
        <p className='text-center py-8'>Technologie en cours d'apprentissage</p>
      </div>

      <div className='full grid grid-cols-1 sm:grid-cols-3 text-center gap-12 mx-36'>
        {tech.map(({ id, img, title, style }) => (
          <div key={id} className={`shadow-md hover:scale-105 duration-500 ${style}`}>
            <img src={img} alt={title} className="w-20 mx-auto" />
            <p className="text-center mt-4">{title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
