///destination specific reviews by all people
//http://localhost:3000/reviewofplace/1

import { useRouter } from "next/router";
import { useState, useEffect } from "react";
// import { useContext, useEffect } from "react";
// import { ReviewStore } from "@/Providers/Rprovider";
import { BiArrowBack } from "react-icons/bi";

const GetDestinationSpecificReviews = function () {
  // const { allReviews } = useContext(ReviewStore);
  // console.log("all reviews", allReviews);
  const [reviews, setReviews] = useState([]);
  const router = useRouter();
  const place_id = Number(router.query.did);
  // console.log("IDDD", place_id);

  const destR = async () => {
    const response = await fetch(`http://localhost:8000/review/${place_id}`);
    const data = await response.json();
    setReviews(data);
  };
  useEffect(() => {
    destR();
  }, []);
  // console.log("revvvv", reviews);
  return (
    <>
      <BiArrowBack
        className="backIcon"
        onClick={() => router.back("/destinations")}
      />
      {
        <div className="placeSpecificReviewsFull">
          {reviews.map((r) => (
            <div className="placeSpecificReviews">
              <p> Review : {r?.reviews}</p>
              <p>Rating : {r?.rating}⭐️</p>
              <br></br>
            </div>
          ))}
        </div>
      }
    </>
  );
};
export default GetDestinationSpecificReviews;
