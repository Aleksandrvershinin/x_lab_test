import React from 'react'
import style from './Header.scss'

type Props = {}

function Header({ }: Props) {
    return (
        <div className={style.header}>
            <div className={style.logo}>
                <div className={style.logo__icon}></div>
                <p className={style.logo__text}>
                    Wrench CRM
                </p>
            </div>
            <div className={style.user}>
                <div className={style.user__icon}></div>
                <p className={style.user__name}>
                    Имя Фамилия
                </p>
            </div>
        </div>
    )
}

export default Header