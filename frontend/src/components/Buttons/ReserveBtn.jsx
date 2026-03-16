import { MdArrowOutward } from "react-icons/md";
import AnimateBtn from "./AnimateBtn";

const openReserveModal = () => {
    window.dispatchEvent(new Event("open-reserve-modal"));
};

const ReserveBtn = () => {
    return (
        <div className="relative z-49">
            <div
                onClick={openReserveModal}
                className="absolute right-6 top-[2vw] w-[8.5vw] bg-[#e8e4dc] px-1 py-1 flex justify-end items-center rounded-4xl gap-2 cursor-pointer"
            >
                <AnimateBtn btnName="Reserve"/>
                <MdArrowOutward className="bg-[#1c1c21] text-[#c9a96e] w-[2.5vw] h-auto rounded-full p-1" />
            </div>
        </div>
    )
}

export default ReserveBtn;
