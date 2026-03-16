import { useGSAP } from "@gsap/react";
import gsap, { SplitText } from "gsap/all";
import { useMediaQuery } from "react-responsive";
import { chooseLinesLG, chooseLinesSM } from "../../constants/welcome";

const Choose = () => {

    const isMobD = useMediaQuery({
        query: "(max-width:768px)",
    });
    const chooseLines = isMobD ? chooseLinesSM : chooseLinesLG;

    useGSAP(() => {

        const lines = gsap.utils.toArray(".choose-title-clip");

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".choose-section",
                start: "top 75%",
                end: "bottom 100%",
                scrub: true,
            },
        });

        tl.from(".choose-subtitle", {
            yPercent: 100,
            opacity: 0,
            ease: "power1.inOut"
        });

        if (!isMobD) {
            tl.fromTo(
                ".title-part",
                { height: "10vh" },
                { height: `${isMobD ? "22vh" : "50vh"}`, ease: "none" }
            );
        }

        tl.to(
            lines,
            {
                clipPath: "inset(0% 0% 0% 0%)",
                ease: "none",
                stagger: 0.2,
                duration: 1,
            },
            "<"
        );

        if (!isMobD) {
            tl.from(".choose-sec", {
                yPercent: 100,
                duration: 1,
            }, "<");
        }
    });

    return (
        <section id="experiences" className="choose-section w-full h-dvh p-8 pt-10">
            <p className='text-[.7rem] text-[#e8e4dc] choose-subtitle'>What awaits you</p>
            <div className="lg:mt-10 mt-7 title-part origin-bottom ">
                {
                    chooseLines.map((line, index) => (
                        <h1 key={index} className={`choose-heading text-[#e8e4dc] lg:text-[9.5rem] text-[3rem] leading-[0.9]`} font-medium tracking-tighter choose-title>
                            <span className={`choose-title-break ${index == 1 ? "lg:pb-3 pb-2" : ""}`}>{line}<span className={`choose-title-clip ${index == 1 ? "lg:pb-3 pb-2" : ""}`}>{line}</span></span>
                        </h1>
                    ))
                }
            </div>
            <div className="choose-sec w-full flex lg:flex-row flex-col justify-center items-start gap-10 lg:mt-0">
                <div className='lg:w-1/2 w-full text-[#9e9b93] lg:text-[2rem] text-[1rem] md:leading-[1.1] lg:mt-0 mt-8 lg:pr-16'>
                    <p>We craft journeys for those who seek more than accommodation — they seek transformation. From cliffside dining to private yacht excursions, every experience is designed to leave an indelible impression on your soul.</p>
                </div>
                <div className='lg:w-1/2 w-full'>
                    <div className=" lg:w-[30%] w-[60%]">
                        <p className="text-[.7rem] text-[#e8e4dc]">Every stay is built around our signature pillars:</p>
                    </div>
                    <div className="flex flex-1 flex-wrap justify-start items-start gap-2 mt-8">
                        <div className="border-[1px] border-[#9e9b93] text-[#9e9b93] lg:text-[2rem] px-[20px] py-[4px] rounded-full">
                            Private Dining
                        </div>
                        <div className="border-[1px] border-[#e8e4dc] text-[#e8e4dc] lg:text-[2rem] px-[20px] py-[4px] rounded-full">
                            Wellness Spa
                        </div>
                        <div className="border-[1px] border-[#9e9b93] text-[#9e9b93] lg:text-[2rem] px-[20px] py-[4px] rounded-full">
                            Yacht Excursions
                        </div>
                        <div className="border-[1px] border-[#e8e4dc] text-[#e8e4dc] lg:text-[2rem] px-[20px] py-[4px] rounded-full">
                            Wine Cellar
                        </div>
                        <div className="border-[1px] border-[#9e9b93] text-[#9e9b93] lg:text-[2rem] px-[20px] py-[4px] rounded-full">
                            Cultural Tours
                        </div>
                        <div className="border-[1px] border-[#e8e4dc] text-[#e8e4dc] lg:text-[2rem] px-[20px] py-[4px] rounded-full">
                            Concierge
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Choose;
