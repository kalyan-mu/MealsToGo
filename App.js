import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Navigation } from "./src/infrastructure/navigation";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD1d1obW8Vf379MacFtYgYxhSXYj8D_Ycc",
  authDomain: "mealstogo-1b828.firebaseapp.com",
  projectId: "mealstogo-1b828",
  storageBucket: "mealstogo-1b828.appspot.com",
  messagingSenderId: "888463761462",
  appId: "1:888463761462:web:2ed6050c24087086dcf897",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      firebase
        .auth()
        .signInWithEmailAndPassword("Kalyan@gmail.io", "KK1234")
        .then((user) => {
          setIsAuthenticated(true);
        })
        .catch((e) => {
          console.log(e);
        });
    }, 2000);
  }, []);

  if (!isAuthenticated) {
    return null;
  }

  return (
    <>
      <AuthenticationContextProvider>
        <Navigation />
      </AuthenticationContextProvider>
      <StatusBar style="auto" />
    </>
  );
}
