import { GithubIcon, InstagramIcon, LinkedinIcon, MailIcon } from "lucide-react"
import Link from "next/link"

export default function Footer() {
    return (
        <div className="border-t border-gray-400 dark:border-neutral-800 justify-between flex-col shadow-2xl md:flex-row flex py-5 px-16 md:px-32 md:py-8">
            <p className="text-graycustom w-full md:text-base text-sm text-center md:text-left place-content-center">© 2025 Thoriq Wildan Abdurrosyid. All rights reversed. </p>
            <div className="p-5 flex flex-row justify-around">
                <Link href='https://www.instagram.com/trqwildann.exe/'><InstagramIcon className="text-graycustom mx-3 transition hover:scale-110 duration-300 hover:text-black dark:hover:text-white"/></Link>
                <Link href='https://www.linkedin.com/in/thoriq-wildan/'><LinkedinIcon className="text-graycustom mx-3 transition hover:scale-110 duration-300 hover:text-black dark:hover:text-white"/></Link>
                <Link href='https://github.com/thoriqwildan'><GithubIcon className="text-graycustom mx-3 transition hover:scale-110 duration-300 hover:text-black dark:hover:text-white"/></Link>
                <Link href='www.instagram.com'><MailIcon className="text-graycustom mx-3 transition hover:scale-110 duration-300 hover:text-black dark:hover:text-white"/></Link>
            </div>
        </div>
    )
}