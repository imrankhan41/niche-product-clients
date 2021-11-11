import { useEffect, useState } from "react";
import initializeAuthentication from "../pages/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword ,signOut,onAuthStateChanged,signInWithEmailAndPassword } from "firebase/auth";
initializeAuthentication()
const useFirebase =()=>{
    const [user,setUser]=useState({})
    const [isLoading,setIsLoading]=useState(true)
    const [autherror,setAutherror]=useState('')
    const auth = getAuth();
    const registerUser =(email,password)=>{
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setAutherror('')
          })
          .catch((error) => {
            setAutherror(error.message)
          })
          .finally(()=>setIsLoading(false))
    }
    const loginUser =(email, password)=>{
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setAutherror('')
        })
        .catch((error) => {
            setAutherror(error.message)
        })
        .finally(()=>setIsLoading(false));
    }
   

    useEffect(()=>{
        const unsubscribed =onAuthStateChanged(auth, (user) => {
            if (user) {
             setUser(user)
            } else {
            setUser({})
            }
            setIsLoading(false)
          });
          return ()=>unsubscribed;
       },[])

       
       const logOut=()=>{
        setIsLoading(true)
        signOut(auth)
        .then(() => {
            
          })
          .finally(()=>setIsLoading(false));
    }
    return{
        user,
        isLoading,
        registerUser,
        logOut,
        loginUser,
        autherror
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