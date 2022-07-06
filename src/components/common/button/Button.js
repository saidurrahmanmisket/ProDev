import React from 'react';
import './Button.css'

const Button = ({text , style , url}) => {
    return (
        <>
            <button style={style} className='buttonCom' >{text}</button>
        </>
    );
};

export default Button;