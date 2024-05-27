// import {
//   doc,
//   addDoc,
//   collection,
//   setDoc,
// } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-firestore.js";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { db } from "./fireStore";

async function addToFavourite(data = {}) {
  const docRef = doc(db, "favourites", String(data.anilistId));
  await setDoc(docRef, data);
}

async function getFavourites() {
  const favourites = [];
  const colRef = collection(db, "favourites");
  const querySnapShot = await getDocs(colRef);
  querySnapShot.forEach((doc) => {
    const { id, name, poster, anilistId } = doc.data();
    favourites.push({ id, name, poster, anilistId });
  });
  return favourites;
}

export { addToFavourite, getFavourites };
