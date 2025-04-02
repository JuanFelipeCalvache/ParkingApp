// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth } from "firebase/auth"; // Importar la autenticación
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDv-aIZPu5cU7B6QKcRh3xxEFRwsn8mYL0",
//   authDomain: "parkingdb-97db8.firebaseapp.com",
//   projectId: "parkingdb-97db8",
//   storageBucket: "parkingdb-97db8.firebasestorage.app",
//   messagingSenderId: "342970611722",
//   appId: "1:342970611722:web:05031d9ffeb60b719bc7f3",
//   measurementId: "G-H8JQWBDRVK"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// const auth = getAuth(app);

// export {app, auth};




// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJnG8mFCvojyg_J3e2S2V3UbZNYjj_Dc8",
  authDomain: "parkapp-769fd.firebaseapp.com",
  databaseURL: "https://parkapp-769fd-default-rtdb.firebaseio.com",
  projectId: "parkapp-769fd",
  storageBucket: "parkapp-769fd.firebasestorage.app",
  messagingSenderId: "170012343790",
  appId: "1:170012343790:web:16f0481c9e7b3fa700e2ff",
  measurementId: "G-2H9B43GY44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);