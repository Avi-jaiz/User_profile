import { useEffect, useState } from "react";
import LoggedInPage from "./Components/LoggedInPage";
import UserLogin from "./Components/UserLogin";
import Modal from "./UI/Modal";


function App(props) {
 
const [isLoggedIn,setIsLoggedIn] =useState(false);
const [modalVisible,setModalVisible] =useState(false);

useEffect(()=>
{
  const storedUserLogginInformation = localStorage.getItem('loggedIn')

  if(storedUserLogginInformation==='1')
  {
     setIsLoggedIn(true)
  }
  console.log('this is running!!')

},[])



const LoginHandler =()=>
{

localStorage.setItem('loggedIn','1');
setIsLoggedIn(true);



}

const LogOutHandler = ()=>
{
    
setIsLoggedIn(false)

localStorage.clear('loggedIn')


}
const checkAutheticity = ()=>
{
  setModalVisible(true);
}

const ModalCloseHandler =()=>
{
   setModalVisible(false)
}

  return (


    <div className="App">

{modalVisible && <Modal onClose={ModalCloseHandler}/>}


{isLoggedIn ? (<LoggedInPage onLogout = {LogOutHandler}/>) : (<UserLogin isAuthenticated={LoginHandler} isAuthenticated1={checkAutheticity}/>)}

    </div>
  );
}

export default App;
