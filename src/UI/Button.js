import '../Styles/button.css';

const Button =({children,type,onClick,buttonStyle,buttonSize})=>
{
    
    return(
<button className='button' type={type} onClick={()=>{}}>
{children}

</button>
    )
}

export default Button;