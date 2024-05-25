import {
  addDoc,
  collection,
} from "https://www.gstatic.com/firebasejs/10.12.1/firebase-firestore.js";
import { db } from "../../services/fireStore";

async function addToDb(data = {}) {
  try {
    const docRef = await addDoc(collection(db, "favourites"), data);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export { addToDb };
