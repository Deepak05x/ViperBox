import dynamic from "next/dynamic";

const Review = dynamic(() => import("@/components/configure/Review"));

const ReviewPage = () => {
    return <Review />;
};

export default ReviewPage;
