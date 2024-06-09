import { auth } from "../services/fireStore";
import Heading from "../ui/Heading";
import React from "react";

function Home() {
  const user = auth.currentUser;
  return (
    <>
      <Heading>Home</Heading>
      <p>{user?.email}</p>
    </>
  );
}

export default Home;
