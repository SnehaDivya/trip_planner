import { createContext, useState, useEffect } from "react";

const DestinationStore = createContext({
  allDestinations: [],
  getDestinations: () => {},
});

const Destination = ({ children }) => {
  //console.log("Inside provider", children);
  const [allDestinations, setAllDestinations] = useState([]);

  const getDestinations = async () => {
    const destnData = await fetch("http://localhost:8000/destn");
    const resp = await destnData.json();
    //console.log("All destinations response", destnData);
    setAllDestinations(resp);
  };
  useEffect(() => {
    getDestinations();
  }, []);

  const value = {
    allDestinations: allDestinations,
    getDestinations: getDestinations,
  };

  return (
    <DestinationStore.Provider value={value}>
      {children}
    </DestinationStore.Provider>
  );
};

export { Destination, DestinationStore };
