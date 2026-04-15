import { createContext, useContext } from "react";

function AuthContext(){

    const AuthContext=createContext(null)

    export const useAuth=()=>useContext(AuthContext);
    const register=async (email, password)=>{
        try{
            const response=await fetch('https://mokky.dev/projects/52e21e395a0ff3eb/register',{

                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({email,password})
            }
            )
            const data=await response.json();
        }
        catch(
           
            
        )
    }


    const login=async(email, password)=>{
        try{
   const response=await fetch('https://mokky.dev/projects/52e21e395a0ff3eb/auth'),{

                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({email,password})
            }
        }
        catch()
    }


    return(
        <div></div>
    )
}

export default AuthContext;