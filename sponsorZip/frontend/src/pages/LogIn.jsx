import React, {useEffect} from "react";
import { Link } from "react-router-dom";

const LogIn = () =>{

    let signup = false;
    useEffect(() => {
        // Get the current URL
        const currentUrl = window.location.href;
    
        // Now, you can use the currentUrl in a condition
        if (currentUrl === 'http://localhost:5173/signup') {
          // Do something when the URL matches a specific condition
          signup=true;
        //   console.log(`Page is : ${currentUrl}`);
        //   console.log(`signup is : ${signup}`);
        }
      }, []);

    return(
        <>
        <div className="flex-overflow">
            <div className="flex bg-emerald-200 w-screen justify-center">
                <div className="flex flex-col">
                    <h2 className="font-sans text-base font-medium justify-center text-center">
                    {
                        !signup ? <p>New User?<br></br> Go to <Link to='/signup' className="text-blue-800"><u>Sign Up</u></Link></p> : <p>Already have an account?<br></br> Go to <Link to='/login' className="text-blue-800"><u>Log In</u></Link></p>
                    }    
                    </h2>
                    <form action="" className="flex flex-col">
                    <input className="justify-center p-2 m-2" type="email" placeholder="Email" autoComplete="username" required/>
                    <input className="justify-center p-2 m-2" type="password" placeholder="Password" autoComplete="current-password" required/>
                    <button className="bg-cyan-700 text-white text-xs justify-end fitems-end m-2 p-2" type="submit">Log In</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default LogIn;