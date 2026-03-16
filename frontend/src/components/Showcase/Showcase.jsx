import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

const acImg1 = "https://images.unsplash.com/photo-1615460549969-36fa19521a4f?auto=format&fit=crop&w=1400&q=80";
const acImg2 = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80";
const acImg3 = "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1400&q=80";

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
                start: "-10% 10%",
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
                className="absolute top-0 left-0 h-full flex items-center justify-start gap-2 p-2 overflow-hidden"
            >
                {/* Experience 1 — Wellness */}
                <div className="relative flex-shrink-0 w-[80vw] h-full overflow-hidden">
                    <div className="w-[77vw] absolute top-10 left-5 flex justify-between items-start text-[#e8e4dc]">
                        <h1 className="text-3xl font-bold">Serenità<br />Wellness Retreat</h1>
                        <p className="border-[1px] rounded-3xl px-2 py-1 text-center text-[0.7rem]">Spa</p>
                    </div>
                    <img
                        src={acImg1}
                        alt="Serenità wellness spa — luxury treatment room"
                        className="image-item w-full h-full object-cover rounded-[2.5rem]"
                    />
                    <div className="w-[77vw] absolute bottom-10 left-5 flex justify-between items-start ">
                        <p className="text-[0.68rem] font-bold text-[#e8e4dc]">A holistic wellness sanctuary featuring thermal pools, ancient stone<br />treatment rooms, and bespoke rituals inspired by Mediterranean traditions.</p>
                        <div className="flex justify-center items-center">
                            <p className="text-[#e8e4dc] border-[1px] rounded-3xl px-[1vw] py-1 text-center text-[0.7rem]">01</p>
                            <p className="text-[#2e2c29] border-[1px] rounded-3xl px-[1vw] py-1 text-center text-[0.7rem]">03</p>
                        </div>
                    </div>
                </div>

                {/* Experience 2 — Dining */}
                <div className="relative flex-shrink-0 w-[80vw] h-full overflow-hidden">
                    <div className="w-[77vw] absolute top-10 left-5 flex justify-between items-start text-[#e8e4dc]">
                        <h1 className="text-3xl font-bold">Oro<br />Cliffside Dining</h1>
                        <p className="border-[1px] rounded-3xl px-2 py-1 text-center text-[0.7rem]">Culinary</p>
                    </div>
                    <img
                        src={acImg2}
                        alt="Oro cliffside dining — luxury restaurant terrace"
                        className="image-item w-full h-full object-cover rounded-[2.5rem]"
                    />
                    <div className="w-[77vw] absolute bottom-10 left-5 flex justify-between items-start ">
                        <p className="text-[0.68rem] font-bold text-[#e8e4dc]">Our signature restaurant perched on the cliff's edge, where Chef Marco Bellini<br />crafts a seven-course tasting menu using ingredients from our coastal gardens.</p>
                        <div className="flex justify-center items-center">
                            <p className="text-[#e8e4dc] border-[1px] rounded-3xl px-[1vw] py-1 text-center text-[0.7rem]">02</p>
                            <p className="text-[#2e2c29] border-[1px] rounded-3xl px-[1vw] py-1 text-center text-[0.7rem]">03</p>
                        </div>
                    </div>
                </div>

                {/* Experience 3 — Voyage */}
                <div className="relative flex-shrink-0 w-[80vw] h-full overflow-hidden">
                    <div className="w-[77vw] absolute top-10 left-5 flex justify-between items-start text-[#e8e4dc]">
                        <h1 className="text-3xl font-bold">Vela<br />Private Voyages</h1>
                        <p className="border-[1px] rounded-3xl px-2 py-1 text-center text-[0.7rem]">Maritime</p>
                    </div>
                    <img
                        src={acImg3}
                        alt="Vela private yacht voyage along the Amalfi Coast"
                        className="image-item w-full h-full object-cover rounded-[2.5rem]"
                    />
                    <div className="w-[77vw] absolute bottom-10 left-5 flex justify-between items-start ">
                        <p className="text-[0.68rem] font-bold text-[#e8e4dc]">Curated yacht journeys along the Amalfi Coast with a private captain,<br />stopping at hidden coves, seaside villages, and the island of Capri.</p>
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
