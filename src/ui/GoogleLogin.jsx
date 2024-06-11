import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useQueryClient } from "@tanstack/react-query";
import { auth } from "../services/fireStore";

import toast from "react-hot-toast";

function GoogleLogin() {
  const queryClient = useQueryClient();
  const provider = new GoogleAuthProvider();
  function handleClick() {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        queryClient.setQueryData(["user"], user);
        toast.success(`Welcome ${user.displayName}`);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        toast.error(`${errorCode}: ${errorMessage}`);
      });
  }
  return (
    <button title="Sign In" className="sign-in_ggl" onClick={handleClick}>
      <div style={{ display: "inline", width: "35px", height: "35px" }}>
        <img
          src="google-icon.png"
          alt="google"
          style={{ height: "100%", width: "100%" }}
        />
      </div>
      <span>Sign In with Google</span>
    </button>
  );
}

export default GoogleLogin;
