import { Github01Icon, InstagramIcon, Location03Icon, Mail01Icon, TelephoneIcon } from "hugeicons-react";
import EmailForm from "./form-email";
import { GridBeam } from "./GridBeam";

export default function Contact() {
    return (
        <div className=" w-full lg:px-[10%] px-[5%] h-auto mb-20" id="contact">
            <p className="text-center text-2xl mb-5">Contact Me</p>
            <div className=" rounded-lg h-auto w-full dark:bg-transparent bg-white justify-evenly dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex p-5 flex-col lg:flex-row">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-bgprimary-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,#0D0D0D)]"></div>

                <div className="lg:w-1/3 w-full bg-white dark:bg-black shadow-2xl h-auto relative z-10 rounded-3xl">
                    <EmailForm/>
                </div>
                <p className="text-center place-content-center my-5 lg:my-0">Or</p>
                <div className="lg:w-1/3 w-full bg-white p-5 dark:bg-black shadow-2xl h-auto justify-center relative z-10 rounded-3xl border border-x-gray-700">
                    <div className="h-20 content-center flex flex-row p-1">
                        <Mail01Icon className="lg:size-10 size-6 self-center"/>
                        <div className="place-content-center ml-3">
                            <p className="text-lg">Email</p>
                            <p className="text-graycustom">wildanthoriq14@gmail.com</p>
                        </div>
                    </div>
                    <div className="w-full h-20 content-center flex flex-row p-1">
                        <InstagramIcon className="lg:size-10 size-6 self-center"/>
                        <div className="place-content-center ml-3">
                            <p className="text-lg">Instagram</p>
                            <p className="text-graycustom">@trqwildann.exe</p>
                        </div>
                    </div>
                    <div className="w-full h-20 content-center flex flex-row p-1">
                        <Location03Icon className="lg:size-10 size-6 self-center"/>
                        <div className="place-content-center ml-3">
                            <p className="text-lg">Location</p>
                            <p className="text-graycustom">Yogyakarta, Indonesia</p>
                        </div>
                    </div>
                    <div className="w-full h-20 content-center flex flex-row p-1">
                        <Github01Icon className="lg:size-10 size-6 self-center"/>
                        <div className="place-content-center ml-3">
                            <p className="text-lg">Github</p>
                            <p className="text-graycustom">github.com/thoriqwildan</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}