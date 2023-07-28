import { createContext, useState, useEffect } from "react";

const ReviewStore = createContext({
  allReviews: [],
  getAllReviewss: () => {},
});

const Review = ({ children }) => {
  const [allReviews, setAllReviews] = useState([]);

  const getAllReviews = async () => {
    const reviewData = await fetch("http://localhost:8000/reviews");
    const resp = await reviewData.json();

    setAllReviews(resp);
  };
  useEffect(() => {
    getAllReviews();
  }, []);

  const value = {
    allReviews: allReviews,
    getAllReviews: getAllReviews,
  };

  return <ReviewStore.Provider value={value}>{children}</ReviewStore.Provider>;
};

export { Review, ReviewStore };
