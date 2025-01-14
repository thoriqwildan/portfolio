import { ArrowUpRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { BackgroundBeams } from './background-beams'

export default function Hero() {
    return (
        <>
        <div className="flex flex-row place-content-center max-w-full h-svh items-stretch">
            <div className=" md:p-16 p-10 flex justify-center place-content-center flex-col md:items-center text-center md:text-start">
                <h2 className="text-graycustom text-lg text-center place-items-center">BACKEND ENGINEER</h2>
                <h1 className="text-white my-2 md:text-5xl text-3xl max-w-screen-md text-center">Transforming Concepts into Seamless User Experiences</h1>
                <p className="text-base  mt-2.5 text-graycustom text-center">Hi! I’m Thoriq, Backend Engineer based in Indonesia.</p>
                <div className='md:m-7 flex flex-col md:flex-row'>
                <Link href={'#'} className='transition hover:scale-110 ease-in-out duration-300 md:m-7 my-5 bg-bluecustom rounded-lg px-10 py-2.5 text-sm '>Contact Me</Link>
                <Link href={'#'} className='transition hover:scale-110 ease-in-out duration-300 border md:m-7 rounded-lg px-12 py-2.5 text-sm text-white'>My CV</Link>
                </div>
            </div>
        <BackgroundBeams/>
        </div>
        </>
    )
}