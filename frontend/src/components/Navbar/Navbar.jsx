import { IoMdMenu, IoMdClose } from "react-icons/io";
import AnimateBtn from "../Buttons/AnimateBtn";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/all";

const menuLinks = [
  { name: "Home", target: "#hero" },
  { name: "Rooms", target: "#rooms" },
  { name: "Experiences", target: "#experiences" },
  { name: "Dining", target: "#dining" },
  { name: "Wellness", target: "#wellness" },
  { name: "Gallery", target: "#gallery" },
  { name: "Guest Voices", target: "#guests" },
  { name: "Location", target: "#location" },
  { name: "Reserve", target: "reserve-modal" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const overlayRef = useRef(null);
  const linksRef = useRef([]);

  useEffect(() => {
    if (!overlayRef.current) return;

    if (isOpen) {
      document.body.style.overflow = "hidden";
      gsap.set(overlayRef.current, { display: "flex" });
      gsap.to(overlayRef.current, {
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 0.6,
        ease: "power4.inOut",
      });
      gsap.from(linksRef.current.filter(Boolean), {
        y: 80,
        opacity: 0,
        stagger: 0.08,
        duration: 0.6,
        delay: 0.3,
        ease: "power3.out",
      });
    } else {
      document.body.style.overflow = "";
      gsap.to(overlayRef.current, {
        clipPath: "inset(0% 0% 100% 0%)",
        duration: 0.5,
        ease: "power4.inOut",
        onComplete: () => {
          gsap.set(overlayRef.current, { display: "none" });
        },
      });
    }
  }, [isOpen]);

  const handleLinkClick = (target) => {
    setIsOpen(false);

    if (target === "reserve-modal") {
      setTimeout(() => {
        window.dispatchEvent(new Event("open-reserve-modal"));
      }, 600);
      return;
    }

    if (target.startsWith("mailto:")) {
      window.location.href = target;
      return;
    }

    setTimeout(() => {
      const smoother = ScrollSmoother.get();
      if (smoother) {
        smoother.scrollTo(target, true, "top top");
      } else {
        const el = document.querySelector(target);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    }, 600);
  };

  return (
    <>
      {/* Menu Overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-50 bg-[#0d0d0f] flex-col justify-center items-center hidden"
        style={{ clipPath: "inset(0% 0% 100% 0%)" }}
      >
        <nav className="flex flex-col items-center gap-3">
          {menuLinks.map((link, i) => (
            <button
              key={link.name}
              ref={(el) => (linksRef.current[i] = el)}
              onClick={() => handleLinkClick(link.target)}
              className="text-[#e8e4dc] text-5xl md:text-7xl font-bold tracking-tight hover:text-[#c9a96e] transition-colors duration-300 cursor-pointer"
              style={{ fontFamily: '"Cormorant Garamond", serif' }}
            >
              {link.name}
            </button>
          ))}
        </nav>
        <p className="absolute bottom-10 text-[#9e9b93] text-[0.7rem]">
          Aurelia — Boutique Resort & Spa. Ravello, Amalfi Coast.
        </p>
      </div>

      {/* Navbar Button */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 w-fit h-10 p-1 flex items-center justify-end gap-2 bg-[#e8e4dc] rounded-4xl cursor-pointer group transition-all duration-500"
        style={{ zIndex: 51 }}
      >
        <div>
          <div className="pl-4 text-[#1c1c21]">
            <AnimateBtn btnName={isOpen ? "Close" : "Menu"} />
          </div>
        </div>
        <div className="bg-[#1c1c21] rounded-full p-2">
          {isOpen ? (
            <IoMdClose className="text-[#c9a96e] transition-transform duration-500 group-hover:rotate-[360deg]" />
          ) : (
            <IoMdMenu className="text-[#c9a96e] transition-transform duration-500 group-hover:rotate-[360deg]" />
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
