import { useState, useRef, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { MdCheckCircle } from "react-icons/md";
import gsap from "gsap";
import "./reservemodal.css";

const ReserveModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState("");
    const overlayRef = useRef(null);
    const formRef = useRef(null);

    useEffect(() => {
        const handleOpen = () => {
            setSuccess(null);
            setError("");
            setIsOpen(true);
        };
        window.addEventListener("open-reserve-modal", handleOpen);
        return () => window.removeEventListener("open-reserve-modal", handleOpen);
    }, []);

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
            gsap.from(formRef.current, {
                y: 60,
                opacity: 0,
                duration: 0.7,
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        try {
            const res = await fetch("/api/reservations", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const result = await res.json();

            if (!res.ok) {
                setError(result.error || "Something went wrong. Please try again.");
                setLoading(false);
                return;
            }

            setSuccess(result);
            setLoading(false);
            e.target.reset();
        } catch {
            setError("Unable to connect to the server. Please try again later.");
            setLoading(false);
        }
    };

    return (
        <div
            ref={overlayRef}
            className="reserve-overlay fixed inset-0 z-[60] bg-[#0d0d0f]/95 backdrop-blur-md flex-col justify-center items-center hidden overflow-y-auto"
            style={{ clipPath: "inset(0% 0% 100% 0%)" }}
        >
            <button
                onClick={() => setIsOpen(false)}
                className="absolute top-8 right-8 text-[#e8e4dc] hover:text-[#c9a96e] transition-colors duration-300 cursor-pointer z-10"
            >
                <IoMdClose className="text-3xl" />
            </button>

            <div ref={formRef} className="reserve-form-container w-full max-w-[720px] px-8 py-12">

                {/* Success State */}
                {success ? (
                    <div className="flex flex-col items-center text-center py-16">
                        <MdCheckCircle className="text-[#c9a96e] text-6xl mb-6" />
                        <h1
                            className="text-[#e8e4dc] text-3xl md:text-5xl font-bold mb-4"
                            style={{ fontFamily: '"Cormorant Garamond", serif' }}
                        >
                            Reservation Confirmed
                        </h1>
                        <p className="text-[#9e9b93] text-sm mb-8 max-w-md">
                            A confirmation email has been sent to <span className="text-[#e8e4dc]">{success.reservation.email}</span>.
                            Our concierge team will reach out with personalized details for your stay.
                        </p>
                        <div className="bg-[#1a1a1f] rounded-2xl px-8 py-6 mb-8">
                            <p className="text-[0.65rem] text-[#9e9b93] uppercase tracking-widest mb-2">Confirmation ID</p>
                            <p className="text-[#c9a96e] text-2xl font-bold tracking-widest">{success.confirmationId}</p>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="px-8 py-3 bg-[#c9a96e] text-[#0d0d0f] text-sm font-bold uppercase tracking-widest rounded-full hover:bg-[#e8e4dc] transition-colors duration-300 cursor-pointer"
                        >
                            Close
                        </button>
                    </div>
                ) : (
                    <>
                        {/* Form Header */}
                        <p className="text-[.7rem] font-bold text-[#9e9b93] tracking-widest uppercase mb-4">
                            Reservation Request
                        </p>
                        <h1
                            className="text-[#e8e4dc] text-4xl md:text-6xl font-bold mb-2"
                            style={{ fontFamily: '"Cormorant Garamond", serif' }}
                        >
                            Reserve Your Stay
                        </h1>
                        <p className="text-[#9e9b93] text-sm mb-10">
                            Complete the form below and our concierge team will confirm your reservation within 24 hours.
                        </p>

                        {/* Error Message */}
                        {error && (
                            <div className="bg-red-900/30 border border-red-800 text-red-300 text-sm px-4 py-3 rounded-lg mb-6">
                                {error}
                            </div>
                        )}

                        {/* Reservation Form */}
                        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="reserve-field">
                                    <label className="text-[#9e9b93] text-[0.7rem] uppercase tracking-widest mb-2 block">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        placeholder="Your full name"
                                        className="reserve-input"
                                    />
                                </div>
                                <div className="reserve-field">
                                    <label className="text-[#9e9b93] text-[0.7rem] uppercase tracking-widest mb-2 block">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        placeholder="you@example.com"
                                        className="reserve-input"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="reserve-field">
                                    <label className="text-[#9e9b93] text-[0.7rem] uppercase tracking-widest mb-2 block">
                                        Phone
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="+1 (555) 000-0000"
                                        className="reserve-input"
                                    />
                                </div>
                                <div className="reserve-field">
                                    <label className="text-[#9e9b93] text-[0.7rem] uppercase tracking-widest mb-2 block">
                                        Guests *
                                    </label>
                                    <select name="guests" required defaultValue="2" className="reserve-input">
                                        <option value="1">1 Guest</option>
                                        <option value="2">2 Guests</option>
                                        <option value="3">3 Guests</option>
                                        <option value="4">4 Guests</option>
                                        <option value="5+">5+ Guests</option>
                                    </select>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="reserve-field">
                                    <label className="text-[#9e9b93] text-[0.7rem] uppercase tracking-widest mb-2 block">
                                        Check-in *
                                    </label>
                                    <input
                                        type="date"
                                        name="checkin"
                                        required
                                        className="reserve-input"
                                    />
                                </div>
                                <div className="reserve-field">
                                    <label className="text-[#9e9b93] text-[0.7rem] uppercase tracking-widest mb-2 block">
                                        Check-out *
                                    </label>
                                    <input
                                        type="date"
                                        name="checkout"
                                        required
                                        className="reserve-input"
                                    />
                                </div>
                            </div>

                            <div className="reserve-field">
                                <label className="text-[#9e9b93] text-[0.7rem] uppercase tracking-widest mb-2 block">
                                    Room Preference *
                                </label>
                                <select name="room" required defaultValue="" className="reserve-input">
                                    <option value="" disabled>Select a room</option>
                                    <option value="The Aurelia Suite">The Aurelia Suite — 120 sqm coastal elegance</option>
                                    <option value="The Cliffside Villa">The Cliffside Villa — secluded two-bedroom retreat</option>
                                    <option value="The Penthouse">The Penthouse — full top floor, 360° views</option>
                                </select>
                            </div>

                            <div className="reserve-field">
                                <label className="text-[#9e9b93] text-[0.7rem] uppercase tracking-widest mb-2 block">
                                    Special Requests
                                </label>
                                <textarea
                                    name="requests"
                                    rows="3"
                                    placeholder="Dietary needs, celebrations, spa preferences..."
                                    className="reserve-input resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="reserve-submit mt-4 w-full py-4 bg-[#c9a96e] text-[#0d0d0f] text-sm font-bold uppercase tracking-widest rounded-full hover:bg-[#e8e4dc] transition-colors duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? "Submitting..." : "Send Reservation Request"}
                            </button>

                            <p className="text-[#9e9b93] text-[0.65rem] text-center mt-2">
                                Or contact us directly at{" "}
                                <a href="mailto:reservations@aurelia.com" className="text-[#c9a96e] underline">
                                    reservations@aurelia.com
                                </a>
                            </p>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
};

export default ReserveModal;
