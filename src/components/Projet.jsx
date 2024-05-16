import React from 'react';
import Objetprojet from './Objetprojet';
import Youtubeimg from '../assets/Youtubeproject.png';
import ToDolist from '../assets/ToDolist.png';
import Multiplication from '../assets/Multiplication.png'
import Morpion from '../assets/Morpion.png'


const Projet = () => {
  return (
    <div id='projet' className='max-w-[1090px] mx-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Liste des exercices et Projets</h1>
      <p className='text-center py-8'>Mes exercices et projets d'entraînements avant la formation</p>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-12'>
        <Objetprojet img={Youtubeimg} title='Clone Youtube' info='Javascript/HTML/CSS3' link='https://bounsengbkclone-youtube.netlify.app/'/>
        <Objetprojet img={ToDolist} title='ToDo List' info='HTML/CSS3/Javascript' link='https://todolist-bkfr.netlify.app/'/>
        <Objetprojet img={Multiplication} title=' Table de multiplication' info='HTML/CSS3/Javascript' link='https://multiplicationjsbkfr.netlify.app/'/>
        <Objetprojet img={Morpion} title='Morpion en react' info='Javascript/CSS3/React' link='https://morpionbk.netlify.app/'/>
      </div>    
    </div>
  );
};

export default Projet;
