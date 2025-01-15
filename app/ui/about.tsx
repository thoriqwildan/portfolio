import React from "react";
import { CardSpotlight } from "./card-spotlight";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";
import { GetData } from "../lib/getData";
import { Repository } from "../lib/types";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { formatDate } from "../lib/formatDate";
import Search from "./search";

export default async function About() {
  const data = await GetData();
  return (
    <div>
      <div
        id="about"
        className="flex py-6 px-6 md:flex-row w-full justify-around md:px-40 flex-col"
      >
        <CardSpotlight className="md:w-2/5 w-full">
          <div className="justify-center">
            <Image
              src={"/images/contoh-foto.png"}
              width={800}
              height={800}
              alt="Contoh"
              className="z-20 relative rounded-md"
            />
            <h1 className="z-20 relative text-center text-2xl my-3 text-white">
              About Me!
            </h1>
            <p className="z-20 relative text-justify text-gray-300">
              Saya lulusan SMK Negeri 2 Yogyakarta tahun 2026 jurusan Sistem
              Informasi Jaringan dan Aplikasi. Saat ini saya merupakan fresh
              graduate, tetapi saya memiliki pengalaman dan sertifikasi terkait
              kompetensi yang dimiliki.
            </p>
          </div>
        </CardSpotlight>
        <div className="rounded-lg md:ml-7 mt-7 md:mt-0 md:w-3/5 md:h-auto w-full flex flex-col border border-neutral-800 bg-black">
          <p className="text-xl p-5 text-white">My GitHub Repos</p>
          <ScrollArea className="h-80 md:h-96 rounded-md border border-neutral-800 m-2 bg-bgprimary-100">
            {data.map((repo: Repository) => (
              <div
                key={repo.id}
                className="transition hover:scale-[1.02] ease-in-out duration-300 w-full border border-neutral-800 rounded-sm p-3 mt-0"
              >
                <Link href={repo.html_url} className="place-content-between text-white">
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
                    <p className="text-xs">{formatDate(repo.updated_at)}</p>
                  </div>
                </Link>
              </div>
            ))}
          </ScrollArea>
        </div>
      </div>
      <div className="flex px-6 md:flex-row justify-around md:px-40">
            <div className="border border-neutral-800 rounded-lg w-full h-full p-5">
            <h1 className="z-20 relative text-center text-2xl my-3">
              Skills
            </h1>
              <Search placeholder="isi"/>
              <div className="w-full border border-neutral-800 p-3 mt-4">

              </div>
            </div>
      </div>
    </div>
  );
}
