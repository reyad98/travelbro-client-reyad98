import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthecation = ()=>{
    initializeApp(firebaseConfig);
}
export default initializeAuthecation;