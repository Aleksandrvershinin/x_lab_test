import React from 'react'
import style from './Button.scss'

type Props = {
    className?: string
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined,
    children: React.ReactNode
}

function Button({ className, onClick, children }: Props) {
    return (
        <button className={`${style.btn} ${className}`} onClick={onClick}>{children}</button>
    )
}

export default Button