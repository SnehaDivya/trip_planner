import { ReviewStore } from "@/Providers/Rprovider";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import { TbArrowsSort } from "react-icons/tb";
import { IoReloadOutline } from "react-icons/io";

const Reviews = () => {
  //console.log("insider review provider ", children);
  const [loading, setLoading] = useState(false);
  const { allReviews } = useContext(ReviewStore);
  //console.log("All reviews", allReviews);
  const [initialReview, setInitialReview] = useState([]);
  console.log("All reviewss", allReviews);
  console.log("Initial reviews", initialReview);
  const router = useRouter();

  const sorting = async () => {
    const resp = await fetch("http://localhost:8000/sorted_reviews");
    const data = await resp.json();
    //console.log("St data", data);
    setInitialReview(data);
  };

  useEffect(() => {
    setInitialReview(allReviews);
  }, [allReviews]);
  return (
    <>
      <div>
        <FaHome
          className="homeIcon"
          onClick={() => {
            router.push("/");
          }}
        />
        <TbArrowsSort className="homeIcon" onClick={sorting} />
      </div>

      {/* <IoReloadOutline className="reload" onClick={backToAllReviews} /> */}
      <div className="container">
        {loading ? (
          <p>Loading......</p>
        ) : (
          initialReview.map((person) => {
            return (
              <div className="reviewContainer">
                <img className="cardImage" src={person.image_url} />
                <div className="totalTexts">
                  <div className="texts">
                    <div className="rateReviews">
                      <h2>{person.destination_name}</h2>
                      <p> {person.rating}⭐️</p>
                    </div>
                    <div className="namePlace">
                      <p>By - {person.name}</p>
                      <h4>Review:</h4>
                      <p>{person.reviews}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default Reviews;
