import { FaArrowRight } from "react-icons/fa";

interface Props {
    borderColor: string;
}

const Intro = ({ borderColor }: Props) => {
    return (
        <>
            <div className="flex lg:flex-row flex-col lg:text-start text-center items-center justify-center gap-4 py-24 sm:px-12 ssm:px-8">
                <div className={`border-[1px] flex flex-col gap-1 border-${borderColor} px-12 py-4`}>
                    <p className="text-green">Step 1: Add Image</p>
                    <p>Choose an image for your case</p>
                </div>
                <FaArrowRight className="text-xl font-medium lg:rotate-0 rotate-90" />
                <div className="border-[1px] border-gray-300 flex flex-col gap-1 px-12 py-4 ">
                    <p className="text-green">Step 2: Customize design</p>
                    <p>Make the case yours</p>
                </div>
                <FaArrowRight className="text-xl font-medium lg:rotate-0 rotate-90" />
                <div className="border-[1px] border-gray-300 flex flex-col gap-1 px-12 py-4 ">
                    <p className="text-green">Step 3: Summary</p>
                    <p>Review your final design</p>
                </div>
            </div>
        </>
    );
};

export default Intro;
