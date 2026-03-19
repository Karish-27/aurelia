import { useState, useEffect, useRef } from "react";
import ChromeIcon from "../../assets/chrome.png";
import GmailIcon from "../../assets/gmail.png";
import gsap from "gsap";
import "./emailtoast.css";

const EmailToast = () => {
    const [toast, setToast] = useState(null);
    const toastRef = useRef(null);
    const timerRef = useRef(null);

    useEffect(() => {
        const handleToast = (e) => setToast(e.detail);
        globalThis.addEventListener("show-email-toast", handleToast);
        return () => globalThis.removeEventListener("show-email-toast", handleToast);
    }, []);

    useEffect(() => {
        if (!toast || !toastRef.current) return;

        gsap.fromTo(
            toastRef.current,
            { y: -80, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.45, ease: "power3.out" }
        );

        timerRef.current = setTimeout(() => dismiss(), 6000);
        return () => clearTimeout(timerRef.current);
    }, [toast]);

    const dismiss = () => {
        if (!toastRef.current) return;
        gsap.to(toastRef.current, {
            y: -80,
            opacity: 0,
            duration: 0.35,
            ease: "power2.in",
            onComplete: () => setToast(null),
        });
    };

    if (!toast) return null;

    return (
        <div ref={toastRef} className="gnotif">
            {/* chevron top-right */}
            <button className="gnotif__chevron" onClick={dismiss}>
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                    <path d="M1 1l4 4 4-4" stroke="#aaa" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            <div className="gnotif__inner">
                {/* Chrome icon */}
                <div className="gnotif__chrome">
                    <img src={ChromeIcon} alt="Chrome" className="gnotif__chrome-icon" />
                </div>

                {/* stacked text */}
                <div className="gnotif__text">
                    <p className="gnotif__sender">{toast.sender}</p>
                    <p className="gnotif__domain">mail.google.com</p>
                    <p className="gnotif__subject">{toast.subject}</p>
                </div>

                {/* Gmail icon */}
                <div className="gnotif__gmail">
                    <img src={GmailIcon} alt="Gmail" className="gnotif__gmail-icon" />
                </div>
            </div>
        </div>
    );
};

export default EmailToast;
