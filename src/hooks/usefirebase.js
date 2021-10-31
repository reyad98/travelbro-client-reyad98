import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged , signOut} from "firebase/auth";
import initializeAuthecation from "../Components/Firebase/firebase.init";

 initializeAuthecation();

const useFirebase =() =>{
   const [user,setUser] = useState({});
   const auth = getAuth();
   const googleProvider = new GoogleAuthProvider();

   const signInusingGoogle = ()=>{
       signInWithPopup(auth,googleProvider)
       .then(result=>{
           console.log(result.user);
       })
   }
    const logOut = () =>{
        signOut(auth)
        .then(()=>{
           setUser({})
        })
    }
   useEffect (()=>{
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
          
        } 
      });
      
   },[])
   return {
       user,
       signInusingGoogle,
       logOut

   }
}
export default useFirebase;