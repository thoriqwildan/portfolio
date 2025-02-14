
import React, { Suspense } from "react";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";
import { GetData } from "../lib/getData";
import { Repository } from "../lib/types";
import Link from "next/link";
import {
  ArrowUpRightIcon,
  CircleStackIcon,
  CloudIcon,
  CommandLineIcon,
  DocumentTextIcon,
  ServerStackIcon,
  SignalIcon,
} from "@heroicons/react/24/outline";
import { formatDate } from "../lib/formatDate";
import { GithubIcon } from "lucide-react";
import { AboutSkeleton } from "../components/AboutSkeleton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {ApiIcon, CellularNetworkIcon, CIcon, SquareLock02Icon, WebProgrammingIcon} from 'hugeicons-react'

export default async function About() {
  const data = await GetData();
  return (
    <div id="about">
      <div className="flex py-6 px-6 lg:flex-row w-full justify-around lg:pt-20 lg:px-40 flex-col">
        <div className="lg:w-1/2 w-full lg:mr-4 p-5 lg:p-10 dark:border border-neutral-800 rounded-lg dark:bg-black dark:border-neutral-800">
          <div className="justify-center">
            <Suspense fallback={<AboutSkeleton />}>
              <Image
                src={"/images/main-foto.png"}
                width={800}
                height={800}
                alt="Contoh"
                className="z-20 relative rounded-md"
              />
            </Suspense>
            <h1 className="z-20 relative text-center text-2xl my-3 dark:text-white">
              About Me!🚀
            </h1>
            <p className="z-20 relative text-justify text-gray-600 dark:text-gray-300">
            Hi, my name is Thoriq Wildan Abdurrosyid. you can call me Thoriq. I currently attend SMK Negeri 2 Yogyakarta. Have an interest in programming and server management. I'm still learning and currently learning TypeScript.
            </p>
          </div>
        </div>
        <div className="bg-black w-[1px] h-auto dark:hidden"/>
        <div className="rounded-lg lg:ml-4 mt-7 lg:mt-0 lg:w-1/2 lg:h-auto w-full dark:bg-black flex flex-col dark:border border-neutral-800">
        <div className="dark:border border-neutral-800 rounded-lg w-full h-full lg:p-5">
          <h1 className="z-20 relative text-center text-4xl my-3 dark:text-white">
            Skills
          </h1>
          <div className="w-full  p-3 mt-4">
            <Accordion
              type="single"
              collapsible
              className=" w-full text-3xl dark:text-white"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <div className="flex gap-x-2">
                    <CommandLineIcon className="size-7" />
                    Backend Engineer
                  </div>
                </AccordionTrigger>
                <AccordionContent defaultChecked>
                  <div className="flex flex-col gap-y-4 my-2">
                    <div className="flex flex-col gap-y-1">
                      <div className="flex flex-row justify-between">
                        <h2>Server Management</h2>
                        {/* Iconnya disini */}
                        <ServerStackIcon className="size-5"/>
                      </div>
                      <div className="w-full h-[2px] rounded-lg bg-gradient-to-r from-bluecustom to-blue-900"/>
                    </div>
                    <div className="flex flex-col gap-y-1">
                      <div className="flex flex-row justify-between">
                        <h2>Rest API</h2>
                        {/* Iconnya disini */}
                        <ApiIcon className="size-5"/>
                      </div>
                      <div className="w-full h-[2px] rounded-lg bg-gradient-to-r  from-bluecustom to-blue-900 "/>
                    </div>
                    <div className="flex flex-col gap-y-1">
                      <div className="flex flex-row justify-between">
                        <h2>Backend Web Framework</h2>
                        {/* Iconnya disini */}
                        <WebProgrammingIcon className="size-5"/>
                      </div>
                      <div className="w-full h-[2px] rounded-lg bg-gradient-to-r  from-bluecustom to-blue-900 "/>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  <div className="flex gap-2">
                    <SignalIcon className="size-7" /> Internet of Things
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                <div className="flex flex-col gap-y-4 my-2">
                    <div className="flex flex-col gap-y-1">
                      <div className="flex flex-row justify-between">
                        <h2>C++</h2>
                        {/* Iconnya disini */}
                        <CIcon className="size-5"/>
                      </div>
                      <div className="w-full h-[2px] rounded-lg bg-gradient-to-r  from-bluecustom to-blue-900 "/>
                    </div>
                    <div className="flex flex-col gap-y-1">
                      <div className="flex flex-row justify-between">
                        <h2>MQTT Protocol</h2>
                        {/* Iconnya disini */}
                        <CellularNetworkIcon className="size-5"/>
                      </div>
                      <div className="w-full h-[2px] rounded-lg bg-gradient-to-r  from-bluecustom to-blue-900 "/>
                    </div>
                    <div className="flex flex-col gap-y-1">
                      <div className="flex flex-row justify-between">
                        <h2>IoT Security</h2>
                        {/* Iconnya disini */}
                        <SquareLock02Icon className="size-5"/>
                      </div>
                      <div className="w-full h-[2px] rounded-lg bg-gradient-to-r  from-bluecustom to-blue-900 "/>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  <div className="flex gap-2">
                    <ServerStackIcon className="size-7" />
                    System Administrator
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                <div className="flex flex-col gap-y-4 my-2">
                    <div className="flex flex-col gap-y-1">
                      <div className="flex flex-row justify-between">
                        <h2>Cloud Computing</h2>
                        {/* Iconnya disini */}
                        <CloudIcon className="size-5"/>
                      </div>
                      <div className="w-full h-[2px] rounded-lg bg-gradient-to-r  from-bluecustom to-blue-900 "/>
                    </div>
                    <div className="flex flex-col gap-y-1">
                      <div className="flex flex-row justify-between">
                        <h2>Database Management</h2>
                        {/* Iconnya disini */}
                        <CircleStackIcon className="size-5"/>
                      </div>
                      <div className="w-full h-[2px] rounded-lg bg-gradient-to-r  from-bluecustom to-blue-900 "/>
                    </div>
                    <div className="flex flex-col gap-y-1">
                      <div className="flex flex-row justify-between">
                        <h2>Scripting and Automation</h2>
                        {/* Iconnya disini */}
                        <DocumentTextIcon className="size-5"/>
                      </div>
                      <div className="w-full h-[2px] rounded-lg bg-gradient-to-r  from-bluecustom to-blue-900 "/>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
        
      </div>
      <div className="flex px-1 flex-col mx-5 justify-around lg:mx-[25%] rounded-lg shadow-2xl dark:border border-neutral-800 bg-gray-200 dark:bg-black">
          <div className="justify-between flex px-7 py-5">
            <p className="text-xl dark:text-white">My GitHub Repos</p>
            <GithubIcon className="dark:text-white self-center text-lg" />
          </div>
          <ScrollArea className="h-80 lg:h-96 rounded-md border shadow-inner dark:border-neutral-800 m-2 bg-white dark:bg-bgprimary-100">
            {data.map((repo: Repository) => (
              <div
                key={repo.id}
                className="transition hover:scale-[1.02] ease-in-out duration-300 w-full border dark:border-neutral-800 rounded-sm p-3 mt-0"
              >
                <Link
                  href={repo.html_url}
                  className="place-content-between dark:text-white"
                >
                  <div className="flex flex-row justify-between">
                    <p className="text-lg">{repo.name}</p>
                    <ArrowUpRightIcon className="size-3 lg:size-4" />
                  </div>
                  <div className="flex flex-row justify-between mt-4">
                    <p
                      className={
                        repo.language
                          ? "py-0.5 px-2 rounded-2xl text-white bg-bluecustom dark:bg-slate-500 text-xs"
                          : ""
                      }
                    >
                      {repo.language}
                    </p>
                    <p className="text-xs text-graycustom">
                      Updated on {formatDate(repo.updated_at)}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </ScrollArea>
        </div>
    </div>
  );
}
