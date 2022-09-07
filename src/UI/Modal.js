import { useState } from 'react';
import '../Styles/modal.css';

const Modal =(props)=>
{
const [modal,setModal] = useState(false);

const modalHandler = ()=>
{
    props.onClose(modal);
}

    return(
<div className='modal'>

<div className='modalCard'>
    <div>
        <h3>The Following Error is found..</h3>
    </div>
<div>
<button className='formButton' onClick={props.onClose}>Okay</button>
</div>

</div>


</div>
    )
}

export default Modal;