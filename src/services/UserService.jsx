import { auth } from "../config/firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email.value, password.value)
    .then((res) => {
      console.log("succcessfully logged in");
    })
    
}

export function register(email, password) {
    return createUserWithEmailAndPassword(auth, email.value, password.value)
            .then(res => {
                console.log('Succcessfully regirstrated!');
            })
}

export function logout() {
    auth.signOut();
}