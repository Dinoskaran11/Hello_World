import firebase from 'firebase'

const firebaseapp =firebase.initializeApp( {
    apiKey: "AIzaSyBlY2jjjyk-ktSk99L583bS5Ggw7SkE9f8",
    authDomain: "clone-d43a1.firebaseapp.com",
    projectId: "clone-d43a1",
    storageBucket: "clone-d43a1.appspot.com",
    messagingSenderId: "525400562644",
    appId: "1:525400562644:web:3d4f102aafcca792345441",
    measurementId: "G-KJNBY4G52Y"
  });

  const db=firebaseapp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();
  export{db,auth,provider};
  