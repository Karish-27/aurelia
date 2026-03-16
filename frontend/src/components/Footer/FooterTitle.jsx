import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useRef } from 'react';

import "./footertitle.css";

gsap.registerPlugin(SplitText, ScrollTrigger);

const FooterTitle = () => {
    const ftConRef = useRef(null);

    useGSAP(() => {
        if (!ftConRef.current) return;

        const originalHTML = ftConRef.current.querySelector(".footer-title h1").innerHTML;

        const split = new SplitText(".footer-title h1", {
            type: "chars",
            charsClass: "ftChar",
            exclude: "sub"
        });

        split.chars.forEach(char => {
            char.innerHTML = `<span>${char.innerHTML}</span>`;
        });

        const innerChars = split.chars.map(c => c.querySelector("span"));

        const sub = ftConRef.current.querySelector(".footer-title sub");
        if (sub) {
            sub.innerHTML = `<span>${sub.innerHTML}</span>`;
            const subSpan = sub.querySelector("span");
            innerChars.push(subSpan);
        }

        gsap.set(innerChars, { x: "-120%" });

        gsap.to(innerChars, {
            x: "0%",
            stagger: 0.02,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ftConRef.current,
                start: "top 90%",
                end: "top 80%",
                scrub: true,
            }
        });

        return () => {
            split.revert();
            ftConRef.current.querySelector(".footer-title h1").innerHTML = originalHTML;
        };

    }, { scope: ftConRef });

    return (
        <section ref={ftConRef} className='relative z-1 w-screen h-[40vh] border-1 border-t-[#3a3835]'>
            <div className='w-full flex justify-between items-center px-6 mt-8'>
                <p className='text-[#9e9b93] text-[0.7rem]'>
                    A resort by — <a href="mailto:reservations@aurelia.com" className='text-[#e8e4dc]'>Aurelia</a>
                </p>
                <p className='text-[#9e9b93] text-[0.7rem]'>
                    Built with <a href="#" className='text-[#e8e4dc]'>React & GSAP</a>
                </p>
                <p className='text-[#9e9b93] text-[0.7rem]'>
                    All rights reserved © <a href="#" className='text-[#e8e4dc]'>2026</a>
                </p>
            </div>

            <div className='footer-title w-full text-center'>
                <h1 className='text-[18vw] font-bold' style={{ fontFamily: '"Cormorant Garamond", serif' }}>
                    Aurelia
                </h1>
            </div>
        </section>
    );
};

export default FooterTitle;
