import { useEffect, useState } from "react";
import initializeAuthentication from "../pages/Firebase/firebase.init";
import { getAuth,updateProfile, createUserWithEmailAndPassword,signInWithPopup, GoogleAuthProvider  ,signOut,onAuthStateChanged,signInWithEmailAndPassword } from "firebase/auth";
initializeAuthentication()
const useFirebase =()=>{
    const [user,setUser]=useState({})
    const [isLoading,setIsLoading]=useState(true)
    const [autherror,setAutherror]=useState('')
    const [admin,setAdmin]=useState(false);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const registerUser =(email,password,name,history)=>{
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setAutherror('')
            const newUser ={email,displayName:name}
            setUser(newUser);
            saveUser(email,name,'POST')
            updateProfile(auth.currentUser, {
                displayName: name
              })
              .then(() => {
               
              })
              .catch((error) => {
              
              });
            history.replace("/")
          })
          .catch((error) => {
            setAutherror(error.message)
          })
          .finally(()=>setIsLoading(false))
    }

    const signinUsingGoogle =(location,history)=>{
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {  
                const user = result.user;
                saveUser(user.email,user.displayName,'PUT')
                const destination =location?.state?.from || "/";
                history.replace(destination)
                setAutherror('')
              
            }).catch((error) => {
                setAutherror(error.message)
            })
            .finally(()=>setIsLoading(false));
    }
    const loginUser =(email, password,location,history)=>{
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const destination =location?.state?.from || "/";
            history.replace(destination)
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
const saveUser =(email,displayName,method)=>{
    const user ={email,displayName};
    fetch('')
    fetch('https://enigmatic-bastion-18464.herokuapp.com/users',{
          method:method,
          headers:{
              'content-type':'application/json'
          },
          body:JSON.stringify(user)
      })
      .then(res=>res.json())
      .then(data=>
        console.log(data))
    

}
 useEffect(()=>{
     fetch(`https://enigmatic-bastion-18464.herokuapp.com/users/${user.email}`)
     .then(res=>res.json())
     .then(data=>setAdmin(data.admin))
 },[user.email])
       
       const logOut=()=>{
        setIsLoading(true)
        signOut(auth)
        .then(() => {
            
          })
          .finally(()=>setIsLoading(false));
    }
    return{
        user,
        admin,
        isLoading,
        registerUser,
        logOut,
        loginUser,
        autherror,
        signinUsingGoogle
    }

}
export default useFirebase;
