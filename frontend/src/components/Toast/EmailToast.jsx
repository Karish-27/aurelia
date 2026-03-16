import { useState, useEffect, useRef } from "react";
import { MdEmail, MdClose } from "react-icons/md";
import gsap from "gsap";
import "./emailtoast.css";

const EmailToast = () => {
    const [toast, setToast] = useState(null);
    const toastRef = useRef(null);
    const timerRef = useRef(null);

    useEffect(() => {
        const handleToast = (e) => {
            setToast(e.detail);
        };
        window.addEventListener("show-email-toast", handleToast);
        return () => window.removeEventListener("show-email-toast", handleToast);
    }, []);

    useEffect(() => {
        if (!toast || !toastRef.current) return;

        // Slide in
        gsap.fromTo(
            toastRef.current,
            { x: 400, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.5, ease: "power3.out" }
        );

        // Auto-dismiss after 6s
        timerRef.current = setTimeout(() => dismiss(), 6000);

        return () => clearTimeout(timerRef.current);
    }, [toast]);

    const dismiss = () => {
        if (!toastRef.current) return;
        gsap.to(toastRef.current, {
            x: 400,
            opacity: 0,
            duration: 0.35,
            ease: "power2.in",
            onComplete: () => setToast(null),
        });
    };

    if (!toast) return null;

    return (
        <div ref={toastRef} className="email-toast">
            {/* Gmail-style blue accent bar */}
            <div className="email-toast__accent" />

            <div className="email-toast__body">
                {/* Header row */}
                <div className="email-toast__header">
                    <div className="email-toast__icon-wrap">
                        <MdEmail className="email-toast__icon" />
                    </div>
                    <span className="email-toast__label">New email</span>
                    <span className="email-toast__time">just now</span>
                    <button onClick={dismiss} className="email-toast__close">
                        <MdClose />
                    </button>
                </div>

                {/* Sender */}
                <p className="email-toast__sender">{toast.sender}</p>

                {/* Subject */}
                <p className="email-toast__subject">{toast.subject}</p>

                {/* Preview */}
                <p className="email-toast__preview">{toast.preview}</p>
            </div>
        </div>
    );
};

export default EmailToast;
