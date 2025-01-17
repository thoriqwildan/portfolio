import { GridBeam } from "./GridBeam";

export default function Contact() {
    return (
        <div className=" w-full lg:px-[20%] px-[5%] h-96 mb-20" id="contact">
            <p className="text-center text-2xl mb-5">Contact Me 📞</p>
            <div className=" rounded-lg h-96 w-full dark:bg-transparent bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-bgprimary-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,#0D0D0D)]"></div>
            test
            </div>
        </div>
    )
}