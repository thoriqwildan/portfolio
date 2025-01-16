import React, { Suspense } from "react";
import { CardSpotlight } from "./card-spotlight";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";
import { GetData } from "../lib/getData";
import { Repository } from "../lib/types";
import Link from "next/link";
import {
  ArrowUpRightIcon,
  CommandLineIcon,
  ServerStackIcon,
  SignalIcon,
} from "@heroicons/react/24/outline";
import { formatDate } from "../lib/formatDate";
import Search from "./search";
import { GithubIcon } from "lucide-react";
import { AboutSkeleton } from "../components/AboutSkeleton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default async function About() {
  const data = await GetData();
  return (
    <div id="about">
      <div className="flex py-6 px-6 md:flex-row w-full justify-around md:pt-20 md:px-40 flex-col">
        <CardSpotlight className="md:w-2/5 w-full">
          <div className="justify-center">
            <Suspense fallback={<AboutSkeleton />}>
              <Image
                src={"/images/contoh-foto.png"}
                width={800}
                height={800}
                alt="Contoh"
                className="z-20 relative rounded-md"
              />
            </Suspense>
            <h1 className="z-20 relative text-center text-2xl my-3 text-white">
              About Me!🚀
            </h1>
            <p className="z-20 relative text-justify text-gray-300">
              Saya lulusan SMK Negeri 2 Yogyakarta tahun 2026 jurusan Sistem
              Informasi Jaringan dan Aplikasi. Saat ini saya merupakan fresh
              graduate, tetapi saya memiliki pengalaman dan sertifikasi terkait
              kompetensi yang dimiliki.
            </p>
          </div>
        </CardSpotlight>
        <div className="rounded-lg md:ml-7 mt-7 md:mt-0 md:w-3/5 md:h-auto w-full flex flex-col border border-neutral-800">
        <div className="border border-neutral-800 rounded-lg w-full h-full p-5">
          <h1 className="z-20 relative text-center text-4xl my-3 text-white">
            Skills
          </h1>
          <div className="w-full  p-3 mt-4">
            <Accordion
              type="single"
              collapsible
              className=" w-full text-3xl text-white"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <div className="flex gap-x-2">
                    <CommandLineIcon className="size-7" />
                    Backend Engineer
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-y-4 my-2">
                    <div className="flex flex-col gap-y-1">
                      <div className="flex flex-row justify-between">
                        <h2>PENGALAMAN 1</h2>
                        {/* Iconnya disini */}
                      </div>
                      <div className="w-full h-[2px] rounded-lg bg-gradient-to-r bg-bluecustom "/>
                    </div>
                    <div className="flex flex-col gap-y-1">
                      <div className="flex flex-row justify-between">
                        <h2>PENGALAMAN 2</h2>
                        {/* Iconnya disini */}
                      </div>
                      <div className="w-full h-[2px] rounded-lg bg-gradient-to-r bg-bluecustom "/>
                    </div>
                    <div className="flex flex-col gap-y-1">
                      <div className="flex flex-row justify-between">
                        <h2>PENGALAMAN 3</h2>
                        {/* Iconnya disini */}
                      </div>
                      <div className="w-full h-[2px] rounded-lg bg-gradient-to-r bg-bluecustom "/>
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
                        <h2>PENGALAMAN 1</h2>
                        {/* Iconnya disini */}
                      </div>
                      <div className="w-full h-[2px] rounded-lg bg-gradient-to-r bg-bluecustom "/>
                    </div>
                    <div className="flex flex-col gap-y-1">
                      <div className="flex flex-row justify-between">
                        <h2>PENGALAMAN 2</h2>
                        {/* Iconnya disini */}
                      </div>
                      <div className="w-full h-[2px] rounded-lg bg-gradient-to-r bg-bluecustom "/>
                    </div>
                    <div className="flex flex-col gap-y-1">
                      <div className="flex flex-row justify-between">
                        <h2>PENGALAMAN 3</h2>
                        {/* Iconnya disini */}
                      </div>
                      <div className="w-full h-[2px] rounded-lg bg-gradient-to-r bg-bluecustom "/>
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
                        <h2>PENGALAMAN 1</h2>
                        {/* Iconnya disini */}
                      </div>
                      <div className="w-full h-[2px] rounded-lg bg-gradient-to-r bg-bluecustom "/>
                    </div>
                    <div className="flex flex-col gap-y-1">
                      <div className="flex flex-row justify-between">
                        <h2>PENGALAMAN 2</h2>
                        {/* Iconnya disini */}
                      </div>
                      <div className="w-full h-[2px] rounded-lg bg-gradient-to-r bg-bluecustom "/>
                    </div>
                    <div className="flex flex-col gap-y-1">
                      <div className="flex flex-row justify-between">
                        <h2>PENGALAMAN 3</h2>
                        {/* Iconnya disini */}
                      </div>
                      <div className="w-full h-[2px] rounded-lg bg-gradient-to-r bg-bluecustom "/>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
        
      </div>
      <div className="flex px-1 flex-col mx-5 justify-around md:mx-[25%] rounded-lg border border-neutral-800 bg-black">
          <div className="justify-between flex px-7 py-5">
            <p className="text-xl text-white">My GitHub Repos</p>
            <GithubIcon className="text-white self-center text-lg" />
          </div>
          <ScrollArea className="h-80 md:h-96 rounded-md border border-neutral-800 m-2 bg-bgprimary-100">
            {data.map((repo: Repository) => (
              <div
                key={repo.id}
                className="transition hover:scale-[1.02] ease-in-out duration-300 w-full border border-neutral-800 rounded-sm p-3 mt-0"
              >
                <Link
                  href={repo.html_url}
                  className="place-content-between text-white"
                >
                  <div className="flex flex-row justify-between">
                    <p className="text-lg">{repo.name}</p>
                    <ArrowUpRightIcon className="size-3 md:size-4" />
                  </div>
                  <div className="flex flex-row justify-between mt-4">
                    <p
                      className={
                        repo.language
                          ? "py-0.5 px-2 rounded-2xl bg-slate-500 text-xs"
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
