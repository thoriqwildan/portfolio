import Image from 'next/image'
import { ArrowUpRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function Hero() {
    return (
        <div className="flex flex-row  my-10 mx-7 items-start max-w-full ">
            <div className="md:w-1/2 md:p-16 p-10 flex justify-center flex-col md:items-start md:ml-32 text-center md:text-start">
                <h2 className="text-graycustom text-lg">BACKEND ENGINEER</h2>
                <h1 className="text-white my-2 md:text-6xl text-5xl max-w-screen-md">Thoriq <br/> Wildan A.</h1>
                <p className="text-sm font-bold mt-2.5 text-graycustom">I am a Backend Engineer based in <br/>Yogyakarta, Indonesia.</p>
                <Link href={'#'} className='my-7 bg-bluecustom rounded-lg px-12 py-2.5 text-xs'>My CV</Link>
            </div>
            <div className="hidden w-1/2 h-80 md:flex flex-col items-center justify-center">
                <div className="rounded">
                    <Image 
                    src="/images/logo-white.png"
                    width={100}
                    height={100}
                    alt="Porto Logo"/>
                </div>
            </div>
        </div>
    )
}