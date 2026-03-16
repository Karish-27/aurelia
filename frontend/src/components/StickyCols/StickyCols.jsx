import gsap, { ScrollTrigger, SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { useState } from "react";

const colimg1 = "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80";
const colimg2 = "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=800&q=80";
const colimg3 = "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80";

const StickyCols = () => {

    const [reveal, setReveal] = useState(false);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger, SplitText);

        const textElements = document.querySelectorAll(".col-3 h1, .col-3 p");
        textElements.forEach((element) => {
            const split = new SplitText(element, { type: "lines", linesClass: "line" });
            split.lines.forEach((line) => {
                line.innerHTML = `<span>${line.textContent}</span>`;
            });
        });

        ScrollTrigger.refresh();

        gsap.set(".col-3 .col-content-wrapper .line span", { yPercent: 0 });
        gsap.set(".col-3 .col-content-wrapper-2 .line span", { yPercent: -125 });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".sticky-cols",
                start: "top 20%",
                end: "+=90%",
                pin: true,
                scrub: 1,
            },
        });
        tl.add(() => setReveal(false));
        tl.to(".col-1", { opacity: 0, scale: 0.8, duration: 0.8 })
            .to(".col-2", { x: "0%", duration: 0.8 }, "<")
            .to(".col-3", { y: "0%", duration: 0.8 }, "<")
            .to(".col-img-1 img", { scale: 1, duration: 0.8 }, "<")
            .to(".col-img-2", {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                duration: 0.8,
            }, "<")
            .to(".col-img-2 img", { scale: 1.6, duration: 0.8 }, "<")

        tl.add(() => setReveal(false));
        tl.add(() => setReveal(true));
        tl.to(".col-2", { opacity: 0, scale: 0.8, duration: 0.8 })
            .to(".col-3 .col-content-wrapper .line span", {
                yPercent: -125,
                duration: 0.8,
            }, "<")
        tl.to(".col-3", { x: "0%", duration: 0.8 }, "-=0.8")
            .to(".col-4", { y: "0%", duration: 0.8 }, "<")
            .to(".col-3 .col-content-wrapper-2 .line span", {
                yPercent: 0,
                delay: 0.4,
                duration: 0.8,
            }, "<");

        return () => {
            ScrollTrigger.getAll().forEach((st) => st.kill());
            tl.kill();
        };
    });

    return (
        <section id="gallery" className="sticky-cols w-screen h-dvh overflow-hidden bg-[#0d0d0f] lg:mb-20">
            <div className="sticky-cols-wrapper relative w-full h-screen">
                <div className="col col-1">
                    <div className="col-content">
                        <div className="col-content-wrapper">
                            <h1 className="text-2xl text-[#9e9b93] font-bold leading-auto">Crafted with
                                <br />
                                passion—
                                <br />
                                served with
                                <br />
                                grace
                            </h1>
                            <div className="col-content-para flex items-center gap-4 justify-between">
                                <div className="flex items-center gap-0 justify-center">
                                    <h3 className="border-1 px-3 py-1 rounded-full text-[#c9a96e]">1</h3>
                                    <h3 className="border-1 px-3 py-1 rounded-full text-[#2e2c29]">3</h3>
                                </div>
                                <p className={`text-[12px] font-medium  ${!reveal ? "mr-6" : "mr-0"}`}> Every detail, from the thread count
                                    <br />
                                    to the evening light, serves a purpose.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col col-2">
                    <div className="col-img col-img-1">
                        <div className="col-img-wrapper">
                            <img src={colimg1} alt="Grand hotel lobby with golden lighting" />
                        </div>
                    </div>
                    <div className="col col-img-2 p-2">
                        <div className="col-img-wrapper">
                            <img src={colimg2} alt="Infinity pool overlooking the coast" />
                        </div>
                    </div>
                </div>
                <div className="col col-3">
                    <div className="col-content-wrapper">
                        <h1 className="text-2xl font-bold leading-auto">Crafted with
                            <br />
                            passion—
                            <br />
                            served with
                            <br />
                            grace
                        </h1>
                        <div className={`col-content-para flex items-center gap-4 justify-between ${reveal ? "ml-0" : "ml-6"}`}>
                            <div className="flex items-center gap-0 justify-center">
                                <h3 className="border-1 px-3 py-1 rounded-full text-[#c9a96e]">{(reveal) ? "3" : "2"}</h3>
                                <h3 className="border-1 px-3 py-1 rounded-full text-[#2e2c29]">3</h3>
                            </div>
                            <p className="text-[12px] font-medium"> Every detail, from the thread count
                                <br />
                                to the evening light, serves a purpose.
                            </p>
                        </div>
                    </div>
                    <div className="col-content-wrapper-2">
                        <h1 className="text-2xl font-bold leading-auto">Crafted with
                            <br />
                            passion—
                            <br />
                            served with
                            <br />
                            grace
                        </h1>
                        <div className="col-content-para flex items-center gap-4 justify-between">
                            <div className="flex items-center gap-0 justify-center">
                            </div>
                            <p className={`text-[12px] font-medium  ${!reveal ? "mr-0" : "mr-6"}`}> Every detail, from the thread count
                                <br />
                                to the evening light, serves a purpose.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col col-4">
                    <div className="col-img col-img-1">
                        <div className="col-img-wrapper">
                            <img src={colimg3} alt="Sunset terrace with champagne service" />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default StickyCols;
