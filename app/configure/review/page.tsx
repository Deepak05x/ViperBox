import dynamic from "next/dynamic";

const Review = dynamic(() => import("@/components/configure/Review"));

const review = () => {
    return <Review />;
};

export default review;
