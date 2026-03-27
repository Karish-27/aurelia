import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

import acImg1 from "../../assets/actimg1.png";
import acImg2 from "../../assets/actimg2.png";
import acImg3 from "../../assets/actimg3.png";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Showcase = () => {
    const containerRef = useRef(null);
    const imgConRef = useRef(null);

    useGSAP(() => {
        if (!imgConRef.current || !containerRef.current) return;

        const images = gsap.utils.toArray(".image-item");

        const totalWidth =
            imgConRef.current.scrollWidth - containerRef.current.offsetWidth;

        let lastScroll = window.scrollY;
        let velocity = 0;

        gsap.to(imgConRef.current, {
            x: () => -totalWidth,
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: () => `+=${totalWidth}`,
                scrub: true,
                pin: true,
            }
        });
    }, { scope: containerRef });

    return (
        <section
            id="dining"
            ref={containerRef}
            className='relative w-full h-dvh overflow-hidden'
        >
            <div
                ref={imgConRef}
                className="absolute top-0 left-0 h-full flex items-stretch justify-start gap-2 px-2 overflow-hidden"
            >
                {/* Experience 1 - Alpine Ascent */}
                <div className="relative flex-shrink-0 w-[80vw] h-full overflow-hidden">
                    <div className="w-[77vw] absolute top-10 left-5 flex justify-between items-start text-[#e8e4dc]">
                        <h1 className="text-5xl font-bold">Alpine<br />Summit Trek</h1>
                        <p className="border-[1px] rounded-3xl px-2 py-1 text-center text-[0.7rem]">High Altitude</p>
                    </div>
                    <img
                        src={acImg1}
                        alt="Hikers ascending a snow-covered mountain at sunrise"
                        className="image-item w-full h-full object-cover rounded-[2.5rem]"
                    />
                    <div className="w-[77vw] absolute bottom-10 left-5 flex justify-between items-start ">
                        <p className="text-[1rem] font-bold text-[#e8e4dc]">Push beyond the treeline as dawn breaks over the peaks — a guided high-altitude<br />ascent across glacial ridges and wind-scoured snowfields above the clouds.</p>
                        <div className="flex justify-center items-center">
                            <p className="text-[#e8e4dc] border-[1px] rounded-3xl px-[1vw] py-1 text-center text-[0.7rem]">01</p>
                            <p className="text-[#2e2c29] border-[1px] rounded-3xl px-[1vw] py-1 text-center text-[0.7rem]">03</p>
                        </div>
                    </div>
                </div>

                {/* Experience 2 - Desert Caravan */}
                <div className="relative flex-shrink-0 w-[80vw] h-full overflow-hidden">
                    <div className="w-[77vw] absolute top-10 left-5 flex justify-between items-start text-[#e8e4dc]">
                        <h1 className="text-5xl font-bold">Desert<br />Caravan Trail</h1>
                        <p className="border-[1px] rounded-3xl px-2 py-1 text-center text-[0.7rem]">Sahara</p>
                    </div>
                    <img
                        src={acImg2}
                        alt="Trekkers and camels crossing desert dunes at golden sunset"
                        className="image-item w-full h-full object-cover rounded-[2.5rem]"
                    />
                    <div className="w-[77vw] absolute bottom-10 left-5 flex justify-between items-start ">
                        <p className="text-[1rem] font-bold text-[#e8e4dc]">Journey across the vast golden dunes alongside camel caravans as the sun melts<br />into the horizon — an ancient route through one of Earth's most breathtaking landscapes.</p>
                        <div className="flex justify-center items-center">
                            <p className="text-[#e8e4dc] border-[1px] rounded-3xl px-[1vw] py-1 text-center text-[0.7rem]">02</p>
                            <p className="text-[#2e2c29] border-[1px] rounded-3xl px-[1vw] py-1 text-center text-[0.7rem]">03</p>
                        </div>
                    </div>
                </div>

                {/* Experience 3 - Aurora Watch */}
                <div className="relative flex-shrink-0 w-[80vw] h-full overflow-hidden">
                    <div className="w-[77vw] absolute top-10 left-5 flex justify-between items-start text-[#e8e4dc]">
                        <h1 className="text-5xl font-bold">Aurora<br />Night Watch</h1>
                        <p className="border-[1px] rounded-3xl px-2 py-1 text-center text-[0.7rem]">Northern Lights</p>
                    </div>
                    <img
                        src={acImg3}
                        alt="Group watching the Northern Lights over a snowy Arctic landscape"
                        className="image-item w-full h-full object-cover rounded-[2.5rem]"
                    />
                    <div className="w-[77vw] absolute bottom-10 left-5 flex justify-between items-start ">
                        <p className="text-[1rem] font-bold text-[#e8e4dc]">Stand beneath a sky ablaze with the Northern Lights — an intimate wilderness<br />gathering where the aurora dances over frozen lakes and snow-dusted pine forests.</p>
                        <div className="flex justify-center items-center">
                            <p className="text-[#e8e4dc] border-[1px] rounded-3xl px-[1vw] py-1 text-center text-[0.7rem]">03</p>
                            <p className="text-[#2e2c29] border-[1px] rounded-3xl px-[1vw] py-1 text-center text-[0.7rem]">03</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Showcase;
