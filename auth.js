// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getFirestore, addDoc, collection } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";
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

// console.log(db);

// add fireStore
// inscription

const inscription = document.getElementById("inscription");
inscription.addEventListener('click', (e) => {

    e.preventDefault();

    var prenom = document.getElementById('prenom').value;
    var nom = document.getElementById('nom').value;
    var mail = document.getElementById('mail').value;
    var mdp = document.getElementById('mdp').value;
    var mdpBis = document.getElementById('mdpBis').value;


    addDoc(collection(db, "users"), {
        prenom: prenom,
        nom: nom,
        mail: mail,
        mdp: mdp,
        mdpBis: mdpBis
    });

    console.log('utilisateur ajouté');

    // inscription

    createUserWithEmailAndPassword(auth, mail, mdp)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;

            // Vérifier si tous les champs obligatoires sont remplis
            if (prenom === '' || nom === '' || mail === '' || mdp === '' || mdpBis === '') {
                alert('Veuillez remplir tous les champs.');
                return;
            }

            // Vérifier si l'email est valide
            const emailRegex = /^\S+@\S+\.\S+$/;
            if (!emailRegex.test(mail)) {
                alert('Veuillez entrer une adresse email valide.');
                return;
            }

            // Vérifier si les mots de passe correspondent
            if (mdp !== mdpBis) {
                alert('Les mots de passe ne correspondent pas.');
                return;
            }

            // Vérifier si le mot de passe est suffisamment fort (par exemple, 8 caractères minimum)
            if (mdp.length < 8) {
                alert('Le mot de passe doit contenir au moins 8 caractères.');
                return;
            } else {

                alert("incription avec succès")

                Swal.fire(
                    'Good job!',
                    'You clicked the button!',
                    'success'
                )

                // redirectionnement vers la page de connexion

                window.location.href = '/pageDeConnexion.html';

            }


        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            alert("inscription pas réussi")
        });


});


