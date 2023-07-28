//reviews of the destination visited by the person based on his user_id

//http://localhost:3000/reviews/67ABE

import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { ReviewStore } from "@/Providers/Rprovider";
import { BiArrowBack } from "react-icons/bi";

const GetReviews = function () {
  const router = useRouter();
  const person_id = router.query.id;
  const [peopleReview, setPeopleReview] = useState([]);

  const personreview = async () => {
    const res = await fetch(`http://localhost:8000/reviews/${person_id}`);
    const data = await res.json();
    setPeopleReview(data);
  };
  useEffect(() => {
    personreview();
  }, []);

  return (
    <>
      <BiArrowBack
        className="backIcon"
        onClick={() => router.back("/destinations")}
      />

      {
        <div className="specificReviewsFull">
          {peopleReview.map((r) => (
            <div className="specificReviews">
              <h3 className="h1class">
                Here are the reviews for {r?.destination_name}😃
              </h3>
              <p> Review : {r?.reviews}</p>
              <p>Rating : {r?.rating}⭐️</p>
            </div>
          ))}
        </div>
      }
    </>
  );
};
export default GetReviews;
