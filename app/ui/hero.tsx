import { ArrowTurnRightUpIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { TextGenerateEffect } from './text-generate-effect'

const words = `Behind every beautiful interface, there is strong logic`

export default function Hero() {
    return (
        <>
        <div className="flex flex-row place-content-center max-w-full h-svh items-stretch">
            <div className=" md:p-16 p-9 flex justify-center place-content-center flex-col md:items-center text-center md:text-start">
                <h2 className="text-graycustom text-lg text-center place-items-center">BACKEND ENGINEER</h2>
                <TextGenerateEffect className='text-white my-2 md:text-5xl text-3xl max-w-screen-md text-center' words={words}/>
                <p className="text-base mx-1 mt-2.5 text-graycustom text-center">Hi! I’m Thoriq, Backend Engineer based in Indonesia.</p>
                <div className='md:m-7 mx-4 flex flex-col md:flex-row'>
                    <div className='transition hover:scale-110 ease-in-out duration-300 bg-bluecustom md:m-7 my-5 justify-center rounded-lg px-10 py-2.5 flex'>
                        <Link href={'#'} className='text-sm text-white'>Contact Me</Link>
                    </div>
                    <div className='transition hover:scale-110 ease-in-out duration-300 md:m-7 my-2 border border-white justify-center rounded-lg px-10 py-2.5 flex'>
                        <Link href={'/files/cv-thoriq-2025.pdf'} className='text-sm text-white flex w-full justify-center'>
                        My CV
                        <ArrowDownTrayIcon className='size-5 ml-2 text-white'/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}