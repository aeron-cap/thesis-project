//firebase imports
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

//const for firebase (hydro account gmail)
const firebaseConfig = {
  apiKey: "AIzaSyDvOLkGhIOLp8TZrXEKfhKre8NQRMU8MRw",
  authDomain: "hydro-1234.firebaseapp.com",
  databaseURL: "https://hydro-1234-default-rtdb.firebaseio.com",
  projectId: "hydro-1234",
  storageBucket: "hydro-1234.appspot.com",
  messagingSenderId: "1084876235206",
  appId: "1:1084876235206:web:c369a8b72befa8d3b792c7",
  measurementId: "G-QQXMPC599G",
};

//init firebase app
initializeApp(firebaseConfig);
export default getFirestore();

// // init services
// const db = getFirestore();

// //collection reference
// const colRef = collection(db, "parameters");

// //queries

// //special firestore timestamp
// //createdAt: serverTimestamp();

// //realtime collection data
// onSnapshot(colRef, (snapshot) => {
//   let parameters = [];
//   snapshot.docs.forEach((doc) => {
//     parameters.push({ ...doc.data(), id: doc.id });
//   });
//   console.log(parameters);
// });

// //adding data
// const addpHForm = document.querySelector(".add");
// addpHForm.addEventListener("submit", (e) => {
//   e.preventDefault();

//   addDoc(colRef, {
//     pH: addpHForm.pH.value,
//     createdAt: serverTimestamp(),
//   }).then(() => {
//     addpHForm.reset();
//   });
// });

