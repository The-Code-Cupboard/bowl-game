import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_HOST_FIREBASE_API_KEY,
  authDomain: 'bowl-game-1fd4e.firebaseapp.com',
  databaseURL: 'https://bowl-game-1fd4e-default-rtdb.firebaseio.com',
  projectId: 'bowl-game-1fd4e',
  storageBucket: 'bowl-game-1fd4e.appspot.com',
  messagingSenderId: '829101669653',
  appId: '1:829101669653:web:4f13af26b6ff1bc32a3d1c',
};
firebase.initializeApp(firebaseConfig);

export default firebase;
