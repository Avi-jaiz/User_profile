import { useState } from "react";

const LoggedInPage =(props)=>
{
 
const [loggedOut,setLoggedOut] = useState(true);


const LogOutHandle = ()=>
{
    props.onLogout(loggedOut);
}
   return(
    <div>

<h3>Welcome User</h3>
<div>
    <button onClick={LogOutHandle}>
        Log Out

       
    </button>
</div>

    </div>
   )
}
export default LoggedInPage;