import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './gallery.css';
import { BsFillPlusCircleFill } from "react-icons/bs";

const gbg1 = "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1920&q=80";
const gbg2 = "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?auto=format&fit=crop&w=1920&q=80";
const gbg3 = "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1920&q=80";

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
    const pageRef = useRef(null);

    useEffect(() => {

        const tl4 = gsap.timeline({
            scrollTrigger: {
                trigger: ".gallery-page4",
                start: "10% 10%",
                end: "220% 30%",
                scrub: 1,
                pin: true,
            }
        });

        tl4.to(".gallery-page4", {
            backgroundColor: "#0d0d0f",
        }, 'start');

        gsap.set(".gallery-topText h4, .gallery-topText h3, .gallery-bottomText h3", {
            opacity: 1,
            x: 0
        });

        tl4.to(".gallery-box h3", {
            opacity: 0,
        }, 'a')
            .to(".gallery-page4 .gallery-background", {
                width: "calc(100vw - 1rem)",
                height: "calc(100vh - 1rem)",
                borderRadius: "3.5rem",
                y: -40,
            }, 'a')
            .to(".gallery-page4 .gallery-background img", {
                transform: "scale(1)",
            }, 'a')
            .from(".gallery-background .gallery-topText h4, .gallery-background .gallery-topText h3, .gallery-background .gallery-bottomText h3", {
                opacity: 0,
                x: 50,
            })
            .to({}, { duration: 0.4 }, "+=0")

            .to("#gallery-second", {
                transform: "translate(-50%, -56%)",
            }, 'b')
            .to("#gallery-second img", {
                transform: "scale(1)",
            }, 'b')
            .to(".gallery-page4 .gallery-background", {
                scale: 0.9,
                opacity: 0,
                y: -50
            }, 'b')
            .from("#gallery-second .gallery-topText h4, #gallery-second .gallery-topText h3, #gallery-second .gallery-bottomText h3", {
                opacity: 0,
                x: 50,
            })
            .to({}, { duration: 0.4 }, "+=0")
            .to("#gallery-third", {
                transform: "translate(-50%, -56%)",
            }, 'c')
            .to("#gallery-third img", {
                transform: "scale(1)",
            }, 'c')
            .to("#gallery-second", {
                scale: 0.9,
                opacity: 0,
            }, 'c')
            .from("#gallery-third .gallery-topText h4, #gallery-third .gallery-topText h3, #gallery-third .gallery-bottomText h3", {
                opacity: 0,
                x: 50,
            })
            .to({}, { duration: 0.4 }, "+=0");

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    const generateTicker = (quantity = 6) => {
        const items = [];
        for (let i = 1; i <= quantity; i++) {
            items.push(
                <h3 key={i} style={{ "--index": i }} className='tracking-tighter'>
                    Our Rooms
                </h3>
            );
        }
        return items;
    };

    return (
        <section id="rooms" className="gallery-page4" ref={pageRef}>
            <div className="gallery-slider">
                <div
                    className="gallery-box"
                    style={{ "--time": "40s", "--quantity": 6 }}
                >
                    {generateTicker(6)}
                </div>
            </div>

            <div className="gallery-background">
                <img src={gbg1} alt="The Aurelia Suite - luxury hotel room" />
                <div className="gallery-topText">
                    <h4>The Suite</h4>
                    {/* <h3>(Scroll)</h3> */}
                </div>
                <div className="gallery-bottomText">
                    <div className='w-full flex justify-center items-center gap-0'>
                        <BsFillPlusCircleFill className='w-8 h-8 text-[#c9a96e]' />
                        <h3>The Aurelia Suite - 120 sqm of refined coastal elegance with a private <br /> terrace, plunge pool, and panoramic views of the Mediterranean.</h3>
                    </div>
                    <div className="relative z-9 w-50 h-[0.1rem] bg-[#2e2c29]">
                        <div className="progress-line absolute z-10 bg-[#e8e4dc] w-[33%] h-[0.1rem] top-1/2 -translate-y-1/2 left-0"></div>
                    </div>
                </div>
            </div>

            <div id="gallery-second" className="gallery-background2">
                <img src={gbg2} alt="The Cliffside Villa - private luxury retreat" />
                <div className="gallery-topText">
                    <h4>The Villa</h4>
                    {/* <h3>(Scroll)</h3> */}
                </div>
                <div className="gallery-bottomText">
                    <div className='w-full flex justify-center items-center gap-0'>
                        <BsFillPlusCircleFill className='w-8 h-8 text-[#c9a96e]' />
                        <h3>The Cliffside Villa - a secluded two-bedroom retreat perched above the <br /> sea, with a private chef kitchen and infinity pool carved into the rock.</h3>
                    </div>
                    <div className="relative z-9 w-50 h-[0.1rem] bg-[#2e2c29]">
                        <div className="progress-line absolute z-10 bg-[#e8e4dc] w-[67%] h-[0.1rem] top-1/2 -translate-y-1/2 left-0"></div>
                    </div>
                </div>
            </div>

            <div id="gallery-third" className="gallery-background2">
                <img src={gbg3} alt="The Penthouse - rooftop luxury accommodation" />
                <div className="gallery-topText">
                    <h4>The Penthouse</h4>
                    {/* <h3>(Scroll)</h3> */}
                </div>
                <div className="gallery-bottomText">
                    <div className='w-full flex justify-center items-center gap-0'>
                        <BsFillPlusCircleFill className='w-8 h-8 text-[#c9a96e]' />
                        <h3>The Penthouse - our crown jewel spanning the entire top floor, featuring <br /> a rooftop garden, outdoor dining, and 360-degree views of the coastline.</h3>
                    </div>
                    <div className="relative z-9 w-50 h-[0.1rem] bg-[#2e2c29]">
                        <div className="progress-line absolute z-10 bg-[#e8e4dc] w-[100%] h-[0.1rem] top-1/2 -translate-y-1/2 left-0"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
