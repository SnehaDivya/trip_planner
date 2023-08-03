//explaination of every single picture from destination page
//onclick of pic

//http://localhost:3000/destination/1

import { useRouter } from "next/router";
import { useState } from "react";
import { RiArrowGoBackFill } from "react-icons/ri";
import { useEffect } from "react";

const DestinationPlace = function () {
  const [destn, setDestn] = useState([]);
  const router = useRouter();
  //console.log("rrr", router);
  const index = Number(router.query.id);
  //console.log("iii", index, typeof index);
  const destnsF = async () => {
    const response = await fetch(`http://localhost:8000/destn/${index}`);
    const jsonData = await response.json();
    //console.log("jjjjjjsssoooo", jsonData);
    setDestn(...jsonData);
  };

  useEffect(() => {
    destnsF();
  }, []);
  // console.log("rrrrr", destn);
  return (
    <>
      <RiArrowGoBackFill
        className="backIcon"
        onClick={() => router.back("/destinations")}
      />
      {
        <div className="idImage">
          <h1>Here... you have your destination details!</h1>
          <br></br>
          <h2 className="DName">{destn?.destination_name}</h2>
          <img
            className="DImage"
            src={destn?.image_url}
            width={500}
            height={300}
          />
          <br></br>
          <p className="DDescription">Some details .. {destn?.description}</p>
        </div>
      }
    </>
  );
};

export default DestinationPlace;
// const dF = async function () {
//   fetch(`http://localhost:8000/destn/${index}`).then(function (response) {
//     return response.json();
//   });
// };
// const destn = dF();
// function later() {
//   return (
//     <>
//       <RiArrowGoBackFill
//         className="backIcon"
//         onClick={() => router.back("/destinations")}
//       />
//       {
//         <div>
//           <h1>Here... you have your destination details!</h1>
//           <p className="DName">It is called {destn?.destination_name}</p>
//           <img src={destn?.image_url} />
//           <p className="DDescription">Some details .. {destn?.description}</p>
//         </div>
//       }
//     </>
//   );
// }
