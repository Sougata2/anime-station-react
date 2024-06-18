import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import { auth, db } from "./fireStore";

async function addToFavourite(data = {}) {
  const user = auth.currentUser.displayName;
  const docRef = doc(db, user + "_favourites", String(data.id));
  await setDoc(docRef, data);
}

async function getFavourites() {
  const user = auth.currentUser.displayName;
  const favourites = [];
  const colRef = collection(db, user + "_favourites");
  const docs = await getDocs(colRef);
  docs.forEach((doc) => {
    favourites.push(doc.data());
  });
  return favourites;
}

async function deleteFromFavourites(id) {
  const user = auth.currentUser.displayName;
  try {
    await deleteDoc(doc(db, user + "_favourites", String(id)));
  } catch (error) {
    throw new Error(error);
  }
}

export { addToFavourite, getFavourites, deleteFromFavourites };
