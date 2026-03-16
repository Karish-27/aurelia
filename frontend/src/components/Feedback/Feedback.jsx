import { useState } from "react";
import { IoMdArrowForward, IoMdArrowBack } from "react-icons/io";
import { feedbackH1LG, feedbackReviewLG } from "../../constants/feedback";

const reviewImages = {
    review1: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=200&q=80",
    review2: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    review3: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
};

const Feedback = () => {
    const [index, setIndex] = useState(0);
    const total = feedbackH1LG.length;

    const handleNext = () => {
        setIndex((prev) => (prev + 1) % total);
    };

    const handlePrev = () => {
        setIndex((prev) => (prev - 1 + total) % total);
    };

    const progressWidth = feedbackReviewLG[index][3];

    return (
        <section id="guests" className='w-sereen h-dvh p-8 flex flex-col justify-center items-center'>
            <div className='w-full text-left'>
                <p className='text-[.7rem] font-bold text-[#e8e4dc] activities-subtitle text-left'>
                    Guest voices
                </p>

                <div>
                    <h1 className='text-[#e8e4dc] text-7xl mt-4 mb-6'>
                        {feedbackH1LG[index].map((line, i) => (
                            <span key={i}>
                                {line}<br />
                            </span>
                        ))}
                    </h1>
                </div>

                <div className='flex items-center gap-4 mt-12'>
                    <img
                        src={reviewImages[feedbackReviewLG[index][2]]}
                        alt="Guest portrait"
                        className='w-[4.5vw] rounded-4xl'
                    />
                    <p className="text-[#9e9b93] text-[0.7rem]">
                        {feedbackReviewLG[index][0]}<br />
                        ({feedbackReviewLG[index][1]})
                    </p>
                </div>

                <div className="flex justify-between items-center mt-14">
                    <div className="flex gap-1">
                        <button
                            onClick={handlePrev}
                            className='border-[1px] p-1 border-[#9e9b93] hover:bg-[#9e9b93] rounded-4xl'
                        >
                            <IoMdArrowBack className="text-[#e8e4dc] w-[2vw] h-[3.4vh]" />
                        </button>

                        <button
                            onClick={handleNext}
                            className='border-[1px] p-1 border-[#9e9b93] rounded-4xl'
                        >
                            <IoMdArrowForward className="text-[#e8e4dc] w-[2vw] h-[3.4vh]" />
                        </button>
                    </div>

                    <div className="relative z-9 w-70 h-[0.1rem] bg-[#2e2c29]">
                        <div
                            className="progress-line absolute z-10 bg-[#e8e4dc] h-[0.1rem] top-1/2 -translate-y-1/2 left-0"
                            style={{ width: progressWidth }}
                        ></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feedback;
