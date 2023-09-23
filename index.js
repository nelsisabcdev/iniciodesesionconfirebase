// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import {getAuth, signInWithEmailAndPassword, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXRidenyi4VhXWCU_86j_7Im-MpDQPK9Q",
  authDomain: "inicio-de-sesion-de-prueba.firebaseapp.com",
  projectId: "inicio-de-sesion-de-prueba",
  storageBucket: "inicio-de-sesion-de-prueba.appspot.com",
  messagingSenderId: "1026338325711",
  appId: "1:1026338325711:web:22e14e518330c52e02e3ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const form = document.getElementById('formulario');

form.addEventListener("submit", (e)=>
    {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        }); 
    }
)

onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("El usuario ha estado activo en las últimas 24 horas");
      const uid = user.uid;
      // ...
    } else {
        console.log("El usuario no ha estado activo en las últimas 24 horas");
    }
  });