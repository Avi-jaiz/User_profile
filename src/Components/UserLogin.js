import Button from '../UI/Button';
import { Children, useEffect, useState } from 'react';
import '../Styles/userLogin.css';


const UserLogin=(props)=>
{

const [email,setEmail] =useState('');
const [password,setPassword] = useState('')



const handleUserName =(event)=>
{
     setEmail(event.target.value)
}


const handlePassword =(event)=>
{
   setPassword(event.target.value)
}


// useEffect(()=>
// {
//     if(email.trim().length===0|| password.trim().length===0)
//     {
 
//        return;
//     }
 
//     if(password.length<0)
//     {
 
//      return;
//     }
 
//     props.isAuthenticated(localStorage.setItem('LoggedIn','1'))
// },[email,password])

const emailLengthValid = email.trim().length===0;
const passwordLengthValid = password.trim().length===0

const emailOrPassword = emailLengthValid || passwordLengthValid;

const handleSubmit=(event)=>
{
event.preventDefault()

   if(emailOrPassword)
   {
    props.isAuthenticated1()
      return;
   }

   if(password.length<0)
   {
props.isAuthenticated1()
    return;
   }

   props.isAuthenticated(localStorage.setItem('LoggedIn','1'))
   


}




    return(
<div className='userLogin'>
    <form className='form'>
        <label className='formLabel'>
User: 
        </label>
<input type='text' className={emailLengthValid ? 'formUserInput isInputValid' : 'formUserInput'}  onChange={handleUserName}/>

<label className='formPassword'>
    Password:

</label>

<input type='text' className={passwordLengthValid ? 'formPassword isInputValid':'formPasswordInput'} onChange={handlePassword} />

<button className='formButton' onClick={handleSubmit}>submit </button>
    

    </form>


</div>
    )
}

export default  UserLogin;