import { FaBehance } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaDribbble } from "react-icons/fa";

import MarqueeText from '../Marquee/MarqueeText';

const Footer = () => {
    return (
        <section className='w-screen min-h-dvh px-6 mt-10 pb-24 flex flex-col'>
            <p className='text-[.7rem] text-[#e8e4dc] choose-subtitle mt-10'>Ready for an extraordinary deployment?<br />Limited configurations for spring and autumn 2026 seasons.</p>
            <div>
                <MarqueeText />
            </div>

            <div className='flex flex-col md:flex-row md:justify-between md:items-center mt-8 md:mt-14 gap-8 md:gap-0'>
                <h3 className='text-[#9e9b93] text-lg md:text-2xl'>If you're seeking a module that<br />
                    performs as enduring as it looks-<br />
                    we'd love to deploy one.<br /><br />
                    Reach our engineers at<br />
                    <a href="mailto:karishmakumavat27@gmail.com.com" className='text-[#e8e4dc] hover:text-[#c9a96e] underline break-all'>karishmakumavat27@gmail.com.com</a>
                </h3>

                <div className='flex flex-row flex-wrap md:flex-col justify-start md:justify-center items-start md:items-end gap-x-4 gap-y-1 md:gap-0'>
                    <a href="#rooms" className='text-[#e8e4dc] text-xl md:text-2xl'>Modules</a>
                    <a href="#experiences" className='text-[#e8e4dc] text-xl md:text-2xl'>Deployments</a>
                    <a href="#dining" className='text-[#e8e4dc] text-xl md:text-2xl'>Terrain</a>
                    <a href="#wellness" className='text-[#e8e4dc] text-xl md:text-2xl'>Systems</a>
                    <a href="#gallery" className='text-[#e8e4dc] text-xl md:text-2xl'>Gallery</a>
                    <a onClick={(e) => { e.preventDefault(); window.dispatchEvent(new Event("open-reserve-modal")); }} href="#" className='text-[#e8e4dc] text-xl md:text-2xl cursor-pointer'>Inquire</a>
                </div>
            </div>

            <div className="w-full flex justify-between items-center mt-10 md:mt-20">
                <div className="flex justify-center items-center gap-1">
                    <a href="https://www.behance.net/krutikp" target="_blank" rel="noopener noreferrer" className='border-[1px] border-[#3a3835] rounded-full p-3 text-[#e8e4dc]'><FaBehance className="text-xl" /></a>
                    <a href="https://github.com/Karish-27" target="_blank" rel="noopener noreferrer" className='border-[1px] border-[#3a3835] rounded-full p-3 text-[#e8e4dc]'><FaGithub className="text-xl" /></a>
                    <a href="https://www.linkedin.com/in/karishma-kumavat-480891241/" target="_blank" rel="noopener noreferrer" className='border-[1px] border-[#3a3835] rounded-full p-3 text-[#e8e4dc]'><CiLinkedin className="text-xl" /></a>
                    <a href="https://dribbble.com/Krutik_Parmar" target="_blank" rel="noopener noreferrer" className='border-[1px] border-[#3a3835] rounded-full p-3 text-[#e8e4dc]'><FaDribbble className="text-xl" /></a>
                </div>

                <div>
                    <p className="text-[0.8rem] text-[#9e9b93] text-right">
                        Aurelia - Modular Living<br />
                        Systems. Built for extreme terrain.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Footer;
