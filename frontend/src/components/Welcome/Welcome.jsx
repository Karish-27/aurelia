import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import { useMediaQuery } from "react-responsive";
import { welcomeLinesLG, welcomeLinesSM } from "../../constants/welcome";

const w1Url = "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=400&q=80";
const w2Url = "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=400&q=80";

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
                <div className="w-full md:w-[86%] md:text-[64px] text-[34px] welcome-line md:pt-20">
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
                    <img src={w1Url} alt="Luxury hotel pool at sunset" className="md:rounded-[8rem] rounded-[9rem] md:w-56 w-44" />
                    <img src={w2Url} alt="Resort oceanfront terrace" className="md:rounded-[8rem] rounded-[9rem] md:w-56 w-44" />
                </div>
                <div className="md:w-1/2 w-full md:mt-0 mt-10">
                    <p className="md:text-[2rem] text-[1.4rem] text-[#9e9b93] md:leading-[1.1] md:pr-24 font-normal leading-[26px] tracking-[-0.2px]">
                        <span>We believe travel is the art of slowing down and savoring every moment.</span><br />
                        <span>Every stay is an invitation to discover beauty in stillness, in the golden light of dusk, and in the quiet luxury of thoughtful detail.</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Welcome;
