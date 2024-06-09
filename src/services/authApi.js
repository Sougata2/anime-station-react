import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./fireStore";

export async function login({email, password}) {
  const { user } = await signInWithEmailAndPassword(auth, email, password);
  return user;
}
