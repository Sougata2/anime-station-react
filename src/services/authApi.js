import { signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth } from "./fireStore";

export async function login({ email, password }) {
  const { user } = await signInWithEmailAndPassword(auth, email, password);
  return user;
}

export async function updateUser({ displayName, photoUrl }) {
  await updateProfile(auth.currentUser, {
    displayName: displayName,
    photoURL: photoUrl,
  });
}

export async function logout(){
  await signOut(auth)
}


