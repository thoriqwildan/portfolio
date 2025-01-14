'use client'

import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, Cog8ToothIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { useState } from 'react'


const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'About', href: '#about', current: false },
  { name: 'Blogs', href: '#blogs', current: false },
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
  return (
    <Disclosure as="nav" className="bg-bgprimary-100 fixed top-0 w-full">
      <div className="mx-auto max-w-screen-fit px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-white">
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
                      'text-gray-300  hover:text-white transition ease-in-out duration-300 block rounded-md px-3 py-2 text-base font-medium',
                      {
                        'text-white' : active === item.href 
                      }
                    )
                  }
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

            
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
                  'text-gray-300  hover:text-white transition ease-in-out duration-300 block rounded-md px-3 py-2 text-base font-medium',
                  {
                    'text-white bg-gray-900' : active === item.href 
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
