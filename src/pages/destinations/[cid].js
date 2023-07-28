//explaination of the place visited by that person based on user_id
//

import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { DestinationStore } from "@/Providers/Dprovider";
import { BiArrowBack } from "react-icons/bi";

const GetSpecificDestinations = function () {
  //const { allDestinations } = useContext(DestinationStore);
  const [p, setP] = useState([]);
  const router = useRouter();
  const id = router.query.cid;
  //console.log("IDDD", id);

  const destP = async () => {
    const response = await fetch(`http://localhost:8000/destination/${id}`);
    const data = await response.json();
    setP(data);
  };

  useEffect(() => {
    destP();
  }, []);
  return (
    <>
      <BiArrowBack
        className="backIcon"
        onClick={() => router.back("/destinations")}
      />
      {
        <div className="specificPlacesFull">
          {p.map((r) => (
            <div className="specificPlaces">
              <h1>Name : {r?.destination_name}</h1>
              <h3> About : {r?.description}</h3>
              <img src={r?.image_url} height={350} width={350} />
            </div>
          ))}
        </div>
      }
    </>
  );
};
export default GetSpecificDestinations;

// import { useRouter } from "next/router";
// import { useContext } from "react";
// import { ReviewStore } from "@/Providers/Rprovider";
// import { BiArrowBack } from "react-icons/bi";

// const GetDestinationSpecificReviews = function () {
//   const { allReviews } = useContext(ReviewStore);
//   console.log("all reviews", allReviews);
//   const router = useRouter();
//   const place_id = router.query.did;
//   console.log("IDDD", place_id);

//   const placeSpecificReviews = allReviews.filter(
//     (review) => review.destination_id === person_id
//   );

//   useEffect(() => {
//     console.log("Single place review", placeSpecificReviews);
//   }, []);

//   return (
//     <>
//       <BiArrowBack
//         className="backIcon"
//         onClick={() => router.back("/destinations")}
//       />
//       {
//         <div className="placeSpecificReviewsFull">
//           {placeSpecificReviews.map((r) => (
//             <div className="placeSpecificReviews">
//               <h3>Place - ID : {r?.destination_id}</h3>
//               <p> Review : {r?.reviews}</p>
//               <p>Rating : {r?.rating}</p>
//             </div>
//           ))}
//         </div>
//       }
//     </>
//   );
// };
// export default GetDestinationSpecificReviews;
