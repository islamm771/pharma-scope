import React from 'react'

const Input = ({ label, id, type, placeholder }) => {
    return (
        <div className='input-cont'>
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} placeholder={placeholder} />
        </div>
    )
}

export default Input