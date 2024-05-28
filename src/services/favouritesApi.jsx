// import {
//   doc,
//   addDoc,
//   collection,
//   setDoc,
// } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-firestore.js";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
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
  const q = query(colRef, orderBy("timeStamp", "desc"));
  const querySnapShot = await getDocs(q);
  querySnapShot.forEach((doc) => {
    const { id, name, poster, anilistId } = doc.data();
    favourites.push({ id, name, poster, anilistId });
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
