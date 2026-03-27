import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ClickIndicator from '../MapLink/ClickIndicator';

import bannerUrl from "../../assets/rooms1.png";

const FooterBanner = () => {
    const [active, setActive] = useState(false);
    const fbConRef = useRef(null);
    const fbImgRef = useRef(null);

    useGSAP(() => {
        if (!fbConRef.current || !fbImgRef.current) return;

        gsap.fromTo(fbImgRef.current,
            {
                scale: 1.2,
            },
            {
                scale: 1,
                ease: "none",
                scrollTrigger: {
                    trigger: fbConRef.current,
                    start: "top bottom-=20%",
                    end: "bottom top+=20%",
                    scrub: true,
                }
            }
        );

    }, { scope: fbConRef });

    return (
        <div ref={fbConRef} className="w-screen h-dvh p-2 overflow-hidden">
            <div className='w-full relative overflow-hidden rounded-4xl'>
                <ClickIndicator active={active} />
                <img
                    onMouseEnter={() => setActive(true)}
                    onMouseLeave={() => setActive(false)}
                    ref={fbImgRef} src={bannerUrl} alt="Aurelia modular unit across extreme terrain" className='w-full h-full object-cover' />

                <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10vw] font-bold text-[#e8e4dc]'>Aurelia</h1>
                <div className='absolute bottom-5 px-4 w-full'>
                    <div className="w-full h-auto flex md:flex-row flex-col md:justify-between md:items-end">
                        <h2
                            className="text-start lg:mt-0 md:text-[#ffffff] text-[#ffffff] text-2xl font-bold md:tracking-wider leading-5 flex flex-col gap-1"
                            style={{ textShadow: '2px 2px 4px #000'}}
                        >
                            <span>Where endurance meets</span>
                            <span>the frontier-</span>
                            <span>timeless shelter</span>
                        </h2>

                        <p
                            className="md:w-[20%] w-[80%] text-[#ffffff] text-[0.7rem] font-bold  md:font-medium tracking-wide lg:text-end mt-2 text-justify"
                            style={{ textShadow: '2px 2px 4px #000' }}
                        >
                            A modular container unit built for polar deserts, forests, mountains, and the world's most remote terrains.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterBanner
