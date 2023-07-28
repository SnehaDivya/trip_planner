import { DestinationStore } from "@/Providers/Dprovider";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";

const Destinations = () => {
  const [loading, setLoading] = useState(false);
  const [value, setvalue] = useState();
  const router = useRouter();
  console.log("Destination store", DestinationStore);
  const { allDestinations } = useContext(DestinationStore);
  console.log("All destinations", allDestinations);

  return (
    <>
      <FaHome
        className="homeIcon"
        onClick={() => {
          router.push("/");
        }}
      />

      {loading ? (
        <p>Loading......</p>
      ) : (
        allDestinations.map((destination) => {
          return (
            <div className="destinationContainer">
              <h2>{destination.destination_name}</h2>
              <h5>{destination.destination_id}</h5>
              <div className="destinationImage">
                <Link href={`/destination/${destination.destination_id}`}>
                  <img
                    className="Images"
                    src={destination.image_url}
                    width={150}
                    height={150}
                  />
                </Link>
                <br></br>
                <button
                  className="reviewButton"
                  onClick={() =>
                    //console.log("DID", destination.destination_id);
                    router.push(`/reviewofplace/${destination.destination_id}`)
                  }
                >
                  Reviews
                </button>
              </div>
            </div>
          );
        })
      )}
    </>
  );
};

export default Destinations;
