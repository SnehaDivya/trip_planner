import { CustomerStore } from "@/Providers/Cprovider";
//import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";

const Customers = () => {
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const { allCustomers } = useContext(CustomerStore);
  const [value, setValue] = useState(allCustomers);
  console.log("allllllll", allCustomers);
  console.log("All customers state assigned", value);

  const sortUsersByReviews = async () => {
    const resp = await fetch(`http://localhost:8000/sort_users`);
    const data = await resp.json();
    setValue(data);
  };

  const sortUsersByPlaces = async () => {
    const resp = await fetch(`http://localhost:8000/sort_places`);
    const data = await resp.json();
    setValue(data);
  };

  useEffect(() => {
    sortUsersByPlaces();
    sortUsersByReviews();
  }, []);
  return (
    <>
      <FaHome
        className="homeIcon"
        onClick={() => {
          router.push("/");
        }}
      />
      <select
        className="sortingOption"
        id="sortoptions"
        onChange={(e) => {
          if (e.target.value === "Sort by reviews") {
            sortUsersByReviews();
          } else if (e.target.value === "Sort by places") {
            sortUsersByPlaces();
          } else if (e.target.value === "Default") {
            setValue(allCustomers);
          }
        }}
      >
        <option value="" disabled selected hidden>
          Sort by...
        </option>
        <option value="Default">Default</option>
        <option value="Sort by reviews">Sort by reviews</option>
        <option value="Sort by places">Sort by places</option>
      </select>
      <div className="FullContainer">
        {loading ? (
          <p>Loading......</p>
        ) : (
          value.map((person) => {
            return (
              <div className="customerContainer">
                <img
                  className="PhotoImage"
                  src="https://media.istockphoto.com/id/1000410020/vector/profile-pic-icon-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=dndE-6XZITiIgXmiOZb1BfeiFD5BENty_50M9u6gauw="
                />
                <h2>{person.name}</h2>
                <h5>© {person.user_id}</h5>
                <p>📞 {person.mobile}</p>
                <p>No. of Reviews 🖋️: {person.review_count}</p>
                <p>No. of Places Visited : {person.user_count}</p>
                <div className="buttonsClass">
                  <button
                    className="reviewButton"
                    onClick={() => router.push(`/reviews/${person.user_id}`)}
                  >
                    Reviews
                  </button>
                  <button
                    className="destinationButton"
                    onClick={() =>
                      router.push(`/destinations/${person.user_id}`)
                    }
                  >
                    Visited to
                  </button>
                  {/* <br></br> */}
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default Customers;
