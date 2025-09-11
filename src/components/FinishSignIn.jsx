import React, { useEffect } from "react";
import { signInWithEmailLink } from "firebase/auth";
import auth from "../pages/firebase.js";
//import { h1 } from "framer-motion/client";

function FinishSignIn() {
  useEffect(() => {
    async function completeSignIn() {
      try {
        const email = window.localStorage.getItem("emailForSignIn");
        if (!email) {
          alert("No email found. Please sign in again.");
          return;
        }

        const result = await signInWithEmailLink(
          auth,
          email,
          window.location.href
        ); //sign in the user with the email link
        if (result.user) {
          const idToken = await result.user.getIdToken();
          console.log("User signed in successfully", result.user.email);
          console.log("IdToken:", idToken);
        }
      } catch (e) {
        console.error("Error signing in", e);
      }
    }
    completeSignIn();
  }, []);

  return <h1>Finishing Sign In...</h1>;
}

export default FinishSignIn;
