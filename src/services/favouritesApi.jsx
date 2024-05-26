// import {
//   doc,
//   addDoc,
//   collection,
//   setDoc,
// } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-firestore.js";
import { doc, setDoc } from "firebase/firestore";
import { db } from "./fireStore";

async function addToFavourite(data = {}) {
  const docRef = doc(db, "favourites", String(data.anilistId));
  await setDoc(docRef, data);
}

export { addToFavourite };
