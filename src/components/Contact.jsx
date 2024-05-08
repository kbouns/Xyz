import React from 'react'

const Contact = () => {
  return (
    <div id='Contact' className='max-w-[1090px] mx-auto md:pl-20 p-7 py-32'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e] py-8'>Contact</h1>
      <form action="https://getform.io/f/lbjkqeya" method='Post' encType='multipart/form-data py-16'>
        <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
        <div className='flex flex-col'>
            <label className='uppercase txt-sm py-2'>Nom : </label>
            <input type="text" className='border-2 rounded-lg p- flex border-gray-300' name='name'/>
        </div>
        <div className='flex flex-col'> 
            <label className='uppercase txt-sm py-2'>Numéro de téléphone :</label>
            <input type="phone" className='border-2 rounded-lg p- flex border-gray-300' name='name'/>
        </div>
        </div>
        <div className='flex flex-col'> 
            <label className='uppercase txt-sm py-2'>E-mail :</label>
            <input type="Email" className='border-2 rounded-lg p- flex border-gray-300' name='email'/>
        </div>
        <div className='flex flex-col'> 
            <label className='uppercase txt-sm py-2'>Objet du mail :</label>
            <input type="text" className='border-2 rounded-lg p- flex border-gray-300' name='subject'/>
        </div>
        <div className='flex flex-col'>
            <label className='uppercase txt-sm py-2'>Message :</label>
            <textarea rows={10} className='border-2 rounded-lg p- flex border-gray-300' name='message'/>
        </div>
        <div className='flex justify-center'>
        <button className='bg-[#001b5e] text-gray-100 mt-4 mx-4 w-full rounded-lg py-5'>Envoyer message</button>
        </div>
      </form>
    </div>
  )
}

export default Contact
