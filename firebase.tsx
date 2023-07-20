import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAmoGonAPVhA06uM0LDG7Xo5ob6Ws9FMKg",
  authDomain: "artistedoodles-1.firebaseapp.com",
  databaseURL:
    "https://artistedoodles-1-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "artistedoodles-1",
  storageBucket: "artistedoodles-1.appspot.com",
  messagingSenderId: "478945394933",
  appId: "1:478945394933:web:a08522285d0955f18d85bc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
