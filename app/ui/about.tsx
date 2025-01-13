import React from 'react'

const About = () => {
  return (
    <div className='flex py-6 flex-row w-full h-96 bg-slate-800'>
        <div className='w-1/3 bg-red-300'>
            <h2>Thoriq Wildan Abdurrasyid</h2>
        </div>
        <div className='rounded-lg mx-7 w-1/3 h-48 flex flex-col items-start gap-3 p-4 bg-gray-900'>
            <h1 className='text-2xl text-graycustom font-bold'>About Me</h1>
            <p className='text-sm'>Saya lulusan SMK Negeri 2 Yogyakarta tahun 2026 jurusan Sistem Informasi Jaringan dan Aplikasi. Saat ini saya merupakan fresh graduate, tetapi saya memiliki pengalaman dan sertifikasi terkait kompetensi yang dimiliki.</p>
        </div>
        <div className='w-1/5 bg-red-800'>
            <h2>Thoriq Wildan Abdurrasyid</h2>
        </div>
    </div>
  )
}

export default About