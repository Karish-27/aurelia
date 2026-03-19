import { FaBehance } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaDribbble } from "react-icons/fa";

import MarqueeText from '../Marquee/MarqueeText';

const Footer = () => {
    return (
        <section className='w-screen h-dvh px-6 mt-10'>
            <p className='text-[.7rem] text-[#e8e4dc] choose-subtitle mt-10'>Ready for an unforgettable escape?<br />Limited availability for summer and autumn 2026 seasons.</p>
            <div>
                <MarqueeText />
            </div>

            <div className='flex justify-between items-center text-2xl mt-14'>
                <h3 className='text-[#9e9b93]'>If you're seeking a retreat that<br />
                    feels as extraordinary as it looks-<br />
                    we'd love to welcome you.<br /><br />
                    Reach our concierge at<br />
                    <a href="mailto:karishmakumavat27@gmail.com.com" className='text-[#e8e4dc] hover:text-[#c9a96e] underline'>karishmakumavat27@gmail.com.com</a>
                </h3>

                <div className='flex flex-col justify-center items-end'>
                    <a href="#rooms" className='text-[#e8e4dc] text-2xl'>Rooms</a>
                    <a href="#experiences" className='text-[#e8e4dc] text-2xl'>Experiences</a>
                    <a href="#dining" className='text-[#e8e4dc] text-2xl'>Dining</a>
                    <a href="#wellness" className='text-[#e8e4dc] text-2xl'>Wellness</a>
                    <a href="#gallery" className='text-[#e8e4dc] text-2xl'>Gallery</a>
                    <a onClick={(e) => { e.preventDefault(); window.dispatchEvent(new Event("open-reserve-modal")); }} href="#" className='text-[#e8e4dc] text-2xl cursor-pointer'>Reserve</a>
                </div>
            </div>

            <div className="w-full flex justify-between items-center mt-20">
                <div className="flex justify-center items-center gap-1">
                    <a href="https://www.behance.net/krutikp" target="_blank" rel="noopener noreferrer" className='border-[1px] border-[#3a3835] rounded-full p-3 text-[#e8e4dc]'><FaBehance className="text-xl" /></a>
                    <a href="https://github.com/Karish-27" target="_blank" rel="noopener noreferrer" className='border-[1px] border-[#3a3835] rounded-full p-3 text-[#e8e4dc]'><FaGithub className="text-xl" /></a>
                    <a href="https://www.linkedin.com/in/karishma-kumavat-480891241/" target="_blank" rel="noopener noreferrer" className='border-[1px] border-[#3a3835] rounded-full p-3 text-[#e8e4dc]'><CiLinkedin className="text-xl" /></a>
                    <a href="https://dribbble.com/Krutik_Parmar" target="_blank" rel="noopener noreferrer" className='border-[1px] border-[#3a3835] rounded-full p-3 text-[#e8e4dc]'><FaDribbble className="text-xl" /></a>
                </div>

                <div>
                    <p className="text-[0.8rem] text-[#9e9b93] text-right">
                        Aurelia - Boutique Resort<br />
                        & Spa. Ravello, Amalfi Coast.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Footer;
