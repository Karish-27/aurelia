import gsap from "gsap/all";
import smoke from "../../assets/smoke_final.mp4";
import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "react-responsive";

const heroBgUrl = "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1920&q=80";
const mobileHeroBgUrl = "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=900&q=80";

const Hero = () => {

    const isMobHero = useMediaQuery({
        query: "(max-width:768px)",
    });


    useGSAP(() => {
        if (!isMobHero) {
            gsap.to(".hero-section .hero-img", {
                yPercent: "-5",
                stagger: 0.02,
                scale: 1.2,
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: ".hero-section",
                    start: "top top",
                    end: "bottom top",
                    scrub: 1.5,
                }
            });
        };
    }, [isMobHero]);

    return (
        <section id="hero" className="hero-section w-dvw md:h-dvh h-[100vh] md:p-2 p-2.5 mb-20">
            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden">
                <div className="responsive-mobile">
                    {/* Background image (down layer) */}
                    <div
                        className="hero-img absolute inset-0 bg-no-repeat bg-cover bg-center z-0 md:block hidden"
                        style={{ backgroundImage: `url('${heroBgUrl}')` }}
                    />

                    {/* Mobile image fallback */}
                    <div className="block lg:hidden mt-6 mb-6">
                        <img
                            src={mobileHeroBgUrl}
                            alt="Luxury resort overlooking the sea"
                            className="w-full rounded-[2rem] object-cover shadow-[0_-25px_45px_-10px_rgba(201,169,110,0.15)]"
                        />
                    </div>

                    {/* Smoke video (upper layer) */}
                    <video
                        src={smoke}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 md:w-full md:h-full object-cover z-10 pointer-events-none object-center opacity-50 mix-blend-hard-light md:top-0 top-[5%] h-[90%]  rounded-[2rem] md:px-0"
                    ></video>
                </div>
                <div className="p-4 flex flex-col md:justify-center">
                    <div className="relative h-dvh">
                        <h1
                            className="text-[#e8e4dc] text-start text-6xl md:text-9xl font-bold tracking-wider lg:absolute  lg:left-2"
                            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)', fontFamily: '"Cormorant Garamond", serif' }}
                        >
                            Aurelia
                        </h1>

                        <div className="w-full h-auto absolute  top-24 md:bottom-[8%] lg:bottom-[9%] flex md:flex-row flex-col md:justify-between md:items-end">
                            <h2
                                className="text-start lg:mt-0 md:text-[#e8e4dc] text-[#9e9b93] text-2xl font-bold md:tracking-wider leading-5 flex flex-col gap-1"
                                style={{ textShadow: '2px 2px 4px #000', fontFamily: '"Cormorant Garamond", serif' }}
                            >
                                <span>Where luxury meets</span>
                                <span>the horizon—</span>
                                <span>timeless escape</span>
                            </h2>

                            <p
                                className="md:w-[20%] w-[80%] text-[#e8e4dc] text-[0.7rem] font-bold  md:font-medium tracking-wide lg:text-end mt-2 text-justify"
                                style={{ textShadow: '2px 2px 4px #000' }}
                            >
                                A boutique resort on the Amalfi Coast offering bespoke experiences for travelers who seek the extraordinary.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
