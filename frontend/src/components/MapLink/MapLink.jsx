import { useState } from "react";
import ClickIndicator from "./ClickIndicator";

const MapLink = () => {
    const [active, setActive] = useState(false);

    return (
        <section id="location" className="w-screen h-[90vh] bg-[#0d0d0f] flex flex-col justify-center items-center text-center">
            <div>
                <p className="text-[0.7rem] font-bold text-[#c9a96e] choose-subtitle">
                    Nestled on the Amalfi Coast, Italy
                </p>

                <h1 className="text-[5vw] leading-15 tracking-tight mt-5 text-[#e8e4dc]">
                    Located in Ravello. Overlooking<br />
                    the sea. Ready for your<br />
                </h1>
            </div>

            <ClickIndicator active={active} />

            <a
                href="#"
                onClick={(e) => { e.preventDefault(); window.dispatchEvent(new Event("open-reserve-modal")); }}
                onMouseEnter={() => setActive(true)}
                onMouseLeave={() => setActive(false)}
                className="text-[#9e9b93] text-[5vw] underline hover:text-[#e8e4dc] cursor-pointer"
            >
                next escape.
            </a>
        </section>
    );
};

export default MapLink;
