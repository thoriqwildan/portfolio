'use client'

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, Cog8ToothIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { useState } from 'react'
import * as React from "react"
import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"
 
import { Button } from "@/components/ui/button"


const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'About', href: '#about', current: false },
  { name: 'Projects', href: '#projects', current: false },
  { name: 'Contact', href: '#contact', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
  const [active, setActive] = useState('home')

  const handleClick = (section: string) => {
    setActive(section);
    // const element = document.getElementById(section);
    // if (element) {
    //   element.scrollIntoView({ behavior: 'smooth' });
    // }
  };

  const { theme, setTheme } = useTheme()

  return (
    <Disclosure as="nav" className="bg-white dark:bg-bgprimary-100 fixed z-50 top-0 w-full">
      <div className="mx-auto max-w-screen-fit px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400  focus:outline-none focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
            <div className="flex shrink-0 items-center sm:w-20">
              {/* IMG */}
              <Image
                src="/images/logo-white.png"
                width={100}
                height={100}
                alt='Porto Logo'
                className='dark:block hidden'
              />
              <Image
                src="/images/logo-black.png"
                width={100}
                height={100}
                alt='Porto Logo'
                className='dark:hidden block'
              />
            </div>
            <div className={`hidden sm:ml-8 sm:block`}>
              <div className="flex space-x-5">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => handleClick(item.href)}
                    className={clsx(
                      ' dark:text-gray-300 text-graycustom hover:text-black dark:hover:text-white transition ease-in-out duration-300 block rounded-md px-3 py-2 text-base font-medium',
                      {
                        'text-black' : active === item.href 
                      }
                    )
                  }
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          <div className="absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <Button
      variant='ghost'
      type='button'
      size='icon'
      className='px-2'
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      name='mode-toggle'
      role='button'
      aria-label='mode-toggle'
    >
      <SunIcon className='h-[1.2rem] w-[1.2rem] text-neutral-800 dark:hidden dark:text-neutral-200' />
      <MoonIcon className='hidden h-[1.2rem] w-[1.2rem] text-neutral-800 dark:block dark:text-neutral-200' />
    </Button>
          </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden transition duration-200 ease-in-out delay-150">
        <div className="space-y-1 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={
                clsx(
                  'dark:text-gray-300 text-graycustom hover:text-black dark:hover:text-white transition ease-in-out duration-300 block rounded-md px-3 py-2 text-base font-medium',
                  {
                    'text-black' : active === item.href 
                  }
                )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
