import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getFirestore, addDoc, collection } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyCy1ml_RWhRhoO_iEBRaY23xqMLmui6hh8",
    authDomain: "authentification-with-firebase.firebaseapp.com",
    projectId: "authentification-with-firebase",
    storageBucket: "authentification-with-firebase.appspot.com",
    messagingSenderId: "192333152362",
    appId: "1:192333152362:web:29611513bb12d222218a13",
    measurementId: "G-YL5CC3VHDJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

const Connection = document.getElementById("Connection");
Connection.addEventListener('click', (e) => {
    e.preventDefault();

    var Email = document.getElementById('Email').value;
    var passWord = document.getElementById('passWord').value;

    // connexion

signInWithEmailAndPassword(auth, Email, passWord)
.then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    // // Vérifier si les champs sont remplis
    // if (Email === '' || passWord === '') {
    //     alert('Veuillez remplir tous les champs.');
    //     return;
    // }

    // // Vérifier si les informations d'authentification sont valides
    // if (Email === 'mail' && passWord === 'mdp') {
    //     // Authentification réussie
        alert('Authentification réussie.');
    //     // rediriger l'utilisateur vers une nouvelle page
    //     window.location.href = '/pageDattérissage.html';
    // }
    //  else {
    //     // Informations d'authentification incorrectes
    //     // alert('Nom d\'utilisateur ou mot de passe incorrect.');
    //     window.location.href = '/pageDattérissage.html';

    // }
})
.catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    alert("connexion pas réussi")

});

});

