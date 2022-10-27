import React, { useState } from 'react'
import style from './Input.scss'

type Props = {
    className?: string,
    placeholder?: string,
    onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined
    value?: string
}

function Input({ className = '', placeholder = '', value = '', onChange }: Props) {
    return (
        <input
            defaultValue={value}
            className={`${style.input} ${className}`}
            placeholder={placeholder}
            onChange={onChange}
        />
    )
}

export default Input