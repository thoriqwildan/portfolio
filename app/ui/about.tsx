import React from 'react'
import { CardSpotlight } from './card-spotlight'
import Image from 'next/image'
import { ScrollArea } from "@/components/ui/scroll-area"
import { RepoCard } from '../components/repo-card'


const About = () => {
  return (
    <div id='about' className='flex py-6 px-6 md:flex-row w-full justify-around md:px-48 flex-col'>
        <CardSpotlight className='md:w-2/5 w-full'>
        <div>
          <Image
            src={'/images/contoh-foto.png'}
            width={800}
            height={800}
            alt='Contoh'
            className='z-20 relative rounded-md'
          />
          <h1 className='z-20 relative '>COnto</h1>
        </div>
        </CardSpotlight>
        <div className='rounded-lg md:mx-7 mt-7 md:mt-0 md:w-3/5 md:h-auto w-full flex flex-col border '>   
            <p className='text-lg p-5'>My GitHub Repo</p>
            <ScrollArea className='h-80 md:h-80 rounded-md border p-4'>
            <RepoCard/>
          </ScrollArea>
        </div>
    </div>
  )
}

export default About