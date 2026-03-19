import { useGSAP } from "@gsap/react";
import gsap, { SplitText } from "gsap/all";
import { useMediaQuery } from "react-responsive";
import { chooseLinesSM as activitiesLinesSM } from "../../constants/welcome"; import './activities.css';
import { activitiesLinesLG } from "../../constants/activites"; import './activities.css';

const Activities = () => {
    const isMobD = useMediaQuery({
        query: "(max-width:768px)",
    });
    const activitiesLines = isMobD ? activitiesLinesSM : activitiesLinesLG;

    useGSAP(() => {
        const lines = gsap.utils.toArray(".activities-title-clip");
        const progressLines = gsap.utils.toArray(".progress-line");

        const activitiesTl = gsap.timeline({
            scrollTrigger: {
                trigger: ".activities-section",
                start: "top 80%",
                end: "top 20%",
                scrub: true,
            },
        });

        activitiesTl.from(".activities-subtitle", {
            yPercent: 100,
            opacity: 0,
            ease: "power1.inOut"
        });

        if (!isMobD) {
            activitiesTl.fromTo(
                ".activities-part",
                { height: "10vh" },
                { height: `${isMobD ? "22vh" : "50vh"}`, ease: "none" }
            );
        }

        activitiesTl.to(
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
            activitiesTl.from(".activities-sec", {
                yPercent: 100,
                duration: 1,
            }, "<");
        }

        activitiesTl.fromTo(progressLines[0],
            { width: "0%" },
            { width: "90%", duration: 0.5, ease: "power2.in" }
        );

        activitiesTl.fromTo(progressLines[1],
            { width: "0%" },
            { width: "70%", duration: 0.5, ease: "power2.in" },
            "<"
        );

        activitiesTl.fromTo(progressLines[2],
            { width: "0%" },
            { width: "55%", duration: 0.5, ease: "power2.in" },
            "<"
        );
    });

    return (
        <section id="wellness" className="activities-section w-full h-[120vh] p-8 mt-16">
            <p className='text-[.7rem] font-bold text-[#e8e4dc] activities-subtitle'>Crafted for every sense</p>
            <div className="lg:mt-10 mt-7 activities-part origin-bottom">
                {activitiesLines.map((line, index) => (
                    <h1 key={index} className={`activities-heading text-[#e8e4dc] lg:text-[9.5rem] text-[3rem] leading-[0.9]`} font-medium tracking-tighter>
                        <span className={`activities-title-break ${index == 1 ? "lg:pb-3 pb-2" : ""}`}>
                            {line}
                            <span className={`activities-title-clip ${index == 1 ? "lg:pb-3 pb-2" : ""}`}>
                                {line}
                            </span>
                        </span>
                    </h1>
                ))}
            </div>
            <div className="activities-sec w-full flex lg:flex-row flex-col justify-center items-start gap-10 lg:mt-0">
                <div className='lg:w-1/2 w-full'>
                    <div className="lg:w-[30%] w-[60%]">
                        <p className="text-[.7rem] text-[#e8e4dc] text-nowrap">Our hospitality spans every layer of the guest experience:</p>
                    </div>
                    <div className="flex flex-col justify-start items-start gap-5 mt-8 mr-14">
                        <div className="w-full mr-14">
                            <div className="flex justify-between w-full mb-4">
                                <h1 className="text-[#9e9b93] text-xl">Spa & Wellness</h1>
                                <p className="text-[#9e9b93] text-[0.7rem]">Massages, Thermal Baths, Yoga</p>
                            </div>
                            <div className="relative z-9 w-full h-[0.1rem] bg-[#2e2c29]">
                                <div className="progress-line absolute z-10 bg-[#e8e4dc] w-[90%] h-[0.1rem] top-1/2 -translate-y-1/2 left-0"></div>
                            </div>
                        </div>
                        <div className="w-full mr-14">
                            <div className="flex justify-between w-full mb-4">
                                <h1 className="text-[#9e9b93] text-xl">Culinary Arts</h1>
                                <p className="text-[#9e9b93] text-[0.7rem]">Fine Dining, Wine Pairing, Private Chef</p>
                            </div>
                            <div className="relative z-9 w-full h-[0.1rem] bg-[#2e2c29]">
                                <div className="progress-line absolute z-10 bg-[#e8e4dc] w-[70%] h-[0.1rem] top-1/2 -translate-y-1/2 left-0"></div>
                            </div>
                        </div>
                        <div className="w-full mr-14">
                            <div className="flex justify-between w-full mb-4">
                                <h1 className="text-[#9e9b93] text-xl">Adventures</h1>
                                <p className="text-[#9e9b93] text-[0.7rem]">Yacht Tours, Hiking, Cultural Excursions</p>
                            </div>
                            <div className="relative z-9 w-full h-[0.1rem] bg-[#2e2c29]">
                                <div className="progress-line absolute z-10 bg-[#e8e4dc] w-[55%] h-[0.1rem] top-1/2 -translate-y-1/2 left-0"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='lg:w-1/2 w-full text-[#9e9b93] lg:text-[2rem] text-[1rem] md:leading-[1.1] lg:mt-0 mt-8 lg:pr-0'>
                    <p>Our offerings span the full spectrum of luxury hospitality - from award-winning spa treatments and Michelin-inspired cuisine, to private coastal adventures. Every detail is crafted with the same level of care and obsessive attention to perfection.</p>
                </div>
            </div>
        </section>
    );
};

export default Activities;
