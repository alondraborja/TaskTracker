import React from 'react'

const Button = ({bgColor, text}) => {
    const onClick = () => {
        console.log('click');
    }

    return (
        <button onClick={onClick} className="btn" style={{ backgroundColor:bgColor }}>{text}</button>
    )
}

export default Button