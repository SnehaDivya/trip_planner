import React, { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import { BiArrowBack } from "react-icons/bi";

const SortedReviews = function () {
  const [initialReview, setInitialReview] = useState([]);
  const router = useRouter();
  const sorting = async () => {
    const resp = await fetch("http://localhost:8000/sorted_reviews");
    const data = await resp.json();
    setInitialReview(data);
  };

  useEffect(() => {
    sorting();
  }, []);

  return (
    <>
      <BiArrowBack
        className="backIcon"
        onClick={() => router.back("/reviews")}
      />
      {initialReview.map((s) => {
        return (
          <div className="sortedReviewContainer">
            <h2>Place-Name : {s.destination_name}</h2>
            <h3>Traveller's Name : {s.name}</h3>
            <h3>Reviews : {s.reviews}</h3>
            <h3>Star Rating (Out of 10) : {s.rating}⭐️</h3>
            <br />
          </div>
        );
      })}
    </>
  );
};

export default SortedReviews;
