import React, { useState, useContext, useEffect } from "react";
import { CustomerStore } from "@/Providers/Cprovider";
import { FaHome } from "react-icons/fa";
import { useRouter } from "next/router";
const SignUp = () => {
  const router = useRouter();
  const [newUser, setNewUser] = useState({
    user_id: "",
    name: "",
    mobile: "",
  });

  const { allCustomers } = useContext(CustomerStore);
  const [ourC, setOurC] = useState([...allCustomers]);
  console.log("SIGNUP FORM");
  //   console.log("obbbjjjeeecttt OURCCC", ourC);
  //   console.log("NewUser initiallyy", newUser);
  console.log("alll customers", [...allCustomers]);
  let name, value;
  const handleInputs = (e) => {
    name = e.target.id;
    console.log("nameee", e.target.name);
    value = e.target.value;
    console.log("valueeee", e.target.value);
    setNewUser([...allCustomers, { [name]: value }]);
    setOurC(newUser);
  };
  console.log("nweeeeee", newUser);
  console.log("our ccccccc", ourC);
  return (
    <>
      <FaHome
        className="homeIcon"
        onClick={() => {
          router.push("/");
        }}
      />
      <form
        className="form"
        // action="http://localhost:8000/Signup"
        // method="post"
      >
        <label> User-ID : </label>
        <input
          type="text"
          placeholder="Enter the userID"
          id="user_id"
          name="user_id"
          maxLength={6}
          required
          value={newUser.user_id}
          onChange={handleInputs}
        />
        <br></br>
        <label>Name : </label>
        <input
          type="text"
          placeholder="Enter your Name"
          id="name"
          name="name"
          required
          minLength={5}
          maxLength={15}
          value={newUser.name}
          onChange={handleInputs}
        />
        <br></br>
        <label>Mobile Number : </label>
        <input
          type="bigint"
          placeholder="Enter your mobile no."
          id="mobile"
          name="mobile"
          maxLength={10}
          required
          value={newUser.mobile}
          onChange={handleInputs}
        />
        <button
          className="submit"
          type="submit"
          onClick={() => {
            console.log("nwewwwwww", newUser);
          }}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default SignUp;
