import { createContext, useState, useEffect, useContext } from "react";
import { ReviewStore } from "@/Providers/Rprovider";

const CustomerStore = createContext({
  allCustomers: [],
  getAllCustomers: () => {},
});

const Customer = ({ children }) => {
  const [allCustomers, setAllCustomers] = useState([]);
  const { allReviews } = useContext(ReviewStore);

  const getAllCustomers = async () => {
    const data = await fetch("http://localhost:8000/CustomerDetails");
    const resp = await data.json();
    setAllCustomers(resp);
  };

  // const getReviews = (item) => {
  //   console.log("Itemmm", item);
  //   const selectedPersonReviews = allReviews.map((person) => {
  //     person.user_id === item;
  // if (person.user_id === allCustomers.user_id) {
  //   return {
  //     person.review
  //   };
  //   // console.log("review", person, item);
  // } else {
  //   return person;
  // }
  //   });
  //   setAllCustomers(selectedPersonReviews);
  // };
  useEffect(() => {
    getAllCustomers();
  }, []);

  const value = {
    allCustomers: allCustomers,
    getAllCustomers: getAllCustomers,
  };

  return (
    <CustomerStore.Provider value={value}>{children}</CustomerStore.Provider>
  );
};

export { Customer, CustomerStore };
