const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_FIREBASE_APPID
  };
// const firebaseConfig = {
//   apiKey: "AIzaSyBxGQd_xXM8P2cjNfXrgCJDYmJMr3ap-cI",
//   authDomain: "niche-website-6e541.firebaseapp.com",
//   projectId: "niche-website-6e541",
//   storageBucket: "niche-website-6e541.appspot.com",
//   messagingSenderId: "761716428624",
//   appId: "1:761716428624:web:52b2797a119e984e3ae655"
// };
  export default firebaseConfig;