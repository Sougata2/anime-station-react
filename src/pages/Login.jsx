import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../services/fireStore";

import LoginForm from "../ui/LoginForm";
import Heading from "../ui/Heading";
import Profile from "../ui/Profile";

function Login() {
  const [user, setUser] = useState(null);

  useEffect(function () {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);
  return (
    <>
      <Heading>{user ? "Profile" : "Login"}</Heading>
      {user ? <Profile user={user} /> : <LoginForm />}
    </>
  );
}

export default Login;
