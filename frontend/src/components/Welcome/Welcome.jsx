import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import { useMediaQuery } from "react-responsive";
import { welcomeLinesLG, welcomeLinesSM } from "../../constants/welcome";

import w1Url from "../../assets/img1.png";
import w2Url from "../../assets/img2.png";

const Welcome = () => {

    const isMobile = useMediaQuery({ maxWidth: 768 });
    const welcomeLines = isMobile ? welcomeLinesSM : welcomeLinesLG;

    useGSAP(() => {
        const lines = gsap.utils.toArray(".clip-text-welcome");
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".welcome-section",
                start: "top 75%",
                end: "bottom 75%",
                scrub: true,
            },
        });

        lines.forEach((line) => {
            tl.to(line, {
                clipPath: "inset(0% 0% 0% 0%)",
                ease: "none",
                stagger: 0.2,
                duration: 1,
            });
        });

    });

    return (
        <div id="about" className='welcome-section w-full h-[120vh] text-[#1c1c21]  md:px-7 px-6 '>
            <div className='flex flex-col gap-2 tracking-[-4] leading-2'>
                <div className="w-full md:w-[86%] md:text-[80px] text-[42px] welcome-line md:pt-20">
                    <div className="w-full welcome-text flex flex-col justify-center items-start">
                        {welcomeLines.map((text, index) => (
                            <span key={index} className="relative block text-darkBrown md:tracking-[-0.010em] tracking-[0.015em]">
                                {text}
                                <span className="clip-text-welcome md:tracking-[-0.010em] tracking-[0.015em]">{text}</span>
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex md:flex-row flex-col justify-between items-center md:p-4 md:mt-20 mt-10">
                <div className="flex flex-row justify-center items-center gap-1">
                    <img src={w1Url} alt="Aurelia module in mountain terrain" className="md:rounded-[8rem] rounded-[9rem] md:w-56 w-44" />
                    <img src={w2Url} alt="Aurelia unit base installation" className="md:rounded-[8rem] rounded-[9rem] md:w-56 w-44" />
                </div>
                <div className="md:w-1/2 w-full md:mt-0 mt-10">
                    <p className="md:text-[2.5rem] text-[1.6rem] text-[#9e9b93] md:leading-[1.1] md:pr-24 font-normal leading-[30px] tracking-[-0.2px]">
                        <span>We believe structure is the art of standing firm and outlasting every storm.</span><br />
                        <span>Every unit is an invitation to inhabit terrain in stillness, in the shifting light of altitude, and in the quiet strength of purposeful form.</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Welcome;
