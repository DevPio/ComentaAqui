import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyAFkQC9oyglaKiWMcjCEjvMgXC38KLn-MM",
    authDomain: "comentaaqui-app.firebaseapp.com",
    projectId: "comentaaqui-app",
    storageBucket: "comentaaqui-app.appspot.com",
    messagingSenderId: "502312366478",
    appId: "1:502312366478:web:35a3aed6e3832c5fccf4df"
};

firebase.initializeApp(firebaseConfig);

export default firebase;