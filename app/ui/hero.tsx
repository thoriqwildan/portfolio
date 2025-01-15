import { ArrowTurnRightUpIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function Hero() {
    return (
        <>
        <div className="flex flex-row place-content-center max-w-full h-svh items-stretch">
            <div className=" md:p-16 p-10 flex justify-center place-content-center flex-col md:items-center text-center md:text-start">
                <h2 className="text-graycustom text-lg text-center place-items-center">BACKEND ENGINEER</h2>
                <h1 className="text-white my-2 md:text-5xl text-3xl max-w-screen-md text-center">Transforming Concepts into Seamless User Experiences</h1>
                <p className="text-base  mt-2.5 text-graycustom text-center">Hi! I’m Thoriq, Backend Engineer based in Indonesia.</p>
                <div className='md:m-7 mx-4 flex flex-col md:flex-row'>
                    <div className='transition hover:scale-110 ease-in-out duration-300 bg-bluecustom md:m-7 my-5 justify-center rounded-lg px-10 py-2.5 flex'>
                        <Link href={'#'} className='text-sm'>Contact Me</Link>
                    </div>
                    <div className='transition hover:scale-110 ease-in-out duration-300 md:m-7 my-2 border border-white justify-center rounded-lg px-10 py-2.5 flex'>
                        <Link href={'#'} className='text-sm text-white flex'>My CV </Link>
                        <ArrowDownTrayIcon className='size-5 ml-2'/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}