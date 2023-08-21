import {initializeApp} from 'firebase/app';
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAhDO3QNjHpOKODBoBrLUeMaMxwpTbIqNY',
  authDomain: 'bookmyshownativeapp.firebaseapp.com',
  projectId: 'bookmyshownativeapp',
  storageBucket: 'bookmyshownativeapp.appspot.com',
  messagingSenderId: '637998895633',
  appId: '1:637998895633:web:96a0681a6e2d61fe5dd7b0',
  measurementId: 'G-4Y5BEMNQMC',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

export {auth, db, googleProvider};
