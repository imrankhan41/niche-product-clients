import { useEffect, useState } from "react";
import initializeAuthentication from "../pages/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword ,signOut,onAuthStateChanged,signInWithEmailAndPassword } from "firebase/auth";
initializeAuthentication()
const useFirebase =()=>{
    const [user,setUser]=useState({})
    const auth = getAuth();
    const registerUser =(email,password)=>{
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });
    }
    const loginUser =(email, password)=>{
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }
   

    useEffect(()=>{
        const unsubscribed =onAuthStateChanged(auth, (user) => {
            if (user) {
             setUser(user)
            } else {
            setUser({})
            }
          });
          return ()=>unsubscribed;
       },[])
    const Logout =()=>{
        signOut(auth)
        .then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }
    return{
        user,
        registerUser,
        Logout,
        loginUser
    }

}
export default useFirebase;


















// import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged } from "firebase/auth";
// import { useEffect, useState } from "react";
// import initializeAuthentication from "../pages/Firebase/firebase.init";


// initializeAuthentication();
// const useFirebase =()=>{
//     const [users,setUsers]=useState({});
//     const [isLoading,setIsLoading]=useState(true);
//     const auth = getAuth();
    
//     const signInUsingGoggle =()=>{
//         const goggleProvider = new GoogleAuthProvider();
//         return signInWithPopup(auth, goggleProvider);
       
//     };
//     useEffect(()=>{
//         const unsubscribded= onAuthStateChanged(auth, user => {

//             if(user){
//                 setUsers(user)
//             }
//             else{
//                 setUsers({})
//             }
//             setIsLoading(false);
//         });
//         return ()=>unsubscribded;
//     },[]);
//     const logOut=()=>{
//         setIsLoading(true)
//         signOut(auth)
//         .then(() => {
            
//           })
//           .finally(()=>setIsLoading(false));
//     }

//     return{
//         users,
//         logOut,
//         signInUsingGoggle,
//         isLoading,
//         setIsLoading
//     }

    
// }
// export default useFirebase;