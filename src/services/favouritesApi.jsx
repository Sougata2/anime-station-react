import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import { db } from "./fireStore";

async function addToFavourite(data = {}) {
  const docRef = doc(db, "favourites", String(data.anilistId));
  await setDoc(docRef, data);
}

async function getFavourites() {
  const favourites = [];
  const colRef = collection(db, "favourites");
  const docs = await getDocs(colRef);
  docs.forEach((doc) => {
    favourites.push(doc.data());
  });
  return favourites;
}

async function deleteFromFavourites(id) {
  try {
    await deleteDoc(doc(db, "favourites", String(id)));
  } catch (error) {
    throw new Error(error);
  }
}

export { addToFavourite, getFavourites, deleteFromFavourites };
