// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAc7KSY-aC9Pj8G0cgMbvps_icbw_EI2p8",
  authDomain: "emmbed-system.firebaseapp.com",
  projectId: "emmbed-system",
  storageBucket: "emmbed-system.appspot.com",
  messagingSenderId: "1043287090575",
  appId: "1:1043287090575:web:f8453ec7eacd86cef417fa",
  measurementId: "G-1853M2C65Q",
};
// const firebaseConfig = {
//   apiKey: "AIzaSyADFxwVYJiJmKNolHmbdckHWTtLzqLVfRs",
//   authDomain: "pfebd-8e28e.firebaseapp.com",
//   databaseURL: "https://pfebd-8e28e-default-rtdb.firebaseio.com",
//   projectId: "pfebd-8e28e",
//   storageBucket: "pfebd-8e28e.appspot.com",
//   messagingSenderId: "584982286723",
//   appId: "1:584982286723:web:1de7725d35afbd2a3f66b6",
//   measurementId: "G-JL1C85N2NH"
// };
// Initialize Firebase
const configuration = initializeApp(firebaseConfig);
export default configuration;
export const auth = getAuth(configuration);
