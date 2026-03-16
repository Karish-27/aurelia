import MarqueeText from "../Marquee/MarqueeText";
import StickyCols from "../StickyCols/StickyCols";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MarqueeSticky = () => {
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".pin-con",
                start: "bottom 80%",
                end: "bottom 50%",
                scrub: 1,
            },
        });

        tl.fromTo(
            ".sticky-spacer",
            { height: "20vh" },
            { height: "0vh", ease: "none" }
        );

        tl.set(".sticky-spacer, .marquee-con-none", { display: "none" });
    });

    return (
        <section className=" w-full overflow-hidden">
            <div className="pin-con relative">
                <div className="pl-8">
                    <p className="text-[0.7rem] text-[#e8e4dc] choose-subtitle">
                        Discover our philosophy and
                        <br />
                        the art behind every detail.
                    </p>
                </div>

                <div className="marquee-con-none absolute top-0 -z-1">
                    <MarqueeText />
                </div>

                <div className="sticky-spacer w-full h-[20vh]" />
            </div>
        </section>
    );
};

export default MarqueeSticky;
