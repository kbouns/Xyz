import React, { useState } from 'react'
import { AiOutlineMenu,AiOutlineHome, AiOutlineProject, AiOutlineMail } from "react-icons/ai";
import { GrProjects } from 'react-icons/gr';
import { BsPerson } from 'react-icons/bs'
import { IoHardwareChipSharp } from "react-icons/io5";

const Sidenav = () => {
    // Utiliser useState pour déclarer l'état 'nav' et la fonction 'setNav' pour le mettre à jour
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div>
            {/* Utiliser AiOutlineMenu comme composant pour afficher l'icône du menu */}
            <AiOutlineMenu onClick={handleNav} className='fixed top-4 right-4 z-[99] md:hidden'/>
            {
                nav ? (
                    <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
                        <a href="#main" onClick={handleNav}
                        className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 duration-200'>
                            <AiOutlineHome size={20} />
                            <span className='pl-4'>Accueil</span>
                        </a>
                        <a href="#travail" onClick={handleNav} 
                        className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 duration-200'>
                            <GrProjects size={20} />
                            <span className='pl-4'>Expérience Professionnelle</span>
                        </a>
                        <a href="#projet" onClick={handleNav}
                        className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 duration-200'>
                            <AiOutlineProject size={20} />
                            <span className='pl-4'>Projet</span>
                        </a>
                        <a href="#skills" onClick={handleNav}
                        className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 duration-200'>
                            <IoHardwareChipSharp size={20} />
                            <span className='pl-4'>Technologie</span>
                        </a>
                        <a href="#Contact" onClick={handleNav}
                        className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 duration-200'>
                            <AiOutlineMail size={20} />
                            <span className='pl-4'>Contact</span>
                        </a>
                    </div>
    
                )
                :   (
                    ''
                )
            }

            <div className='md:block hidden fixed top-[25%] z-10'>
                <div className='flex flex-col'>

                    <a href="#main" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 duration-300'>
                        <AiOutlineHome size={20} />
                    </a>

                    <a href="#travail" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 duration-300'>
                        <GrProjects size={20} />
                    </a>

                    <a href="#projet" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 duration-300'>
                        <AiOutlineProject size={20} />
                    </a>

                    <a href="#skills" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 duration-300'>
                        <IoHardwareChipSharp size={20} />
                    </a>
                   
                    <a href="#Contact" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 duration-300'>
                        <AiOutlineMail size={20} />
                    </a>
                  
                </div>
            </div>






        </div>
    );
}

export default Sidenav;
