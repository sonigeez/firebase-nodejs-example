import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';


//use your own serviceAccountKey.json
const serviceAccount = require('./serviceAccountKey.json');

initializeApp({
  credential: cert(serviceAccount)
});

// Initialize Cloud Firestore through Firebase
const db = getFirestore();

// Create a new user
const user = db.collection('users');


export { user};
