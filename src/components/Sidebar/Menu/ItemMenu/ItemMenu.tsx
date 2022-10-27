import React from 'react'
import { NavLink } from 'react-router-dom';
import style from './ItemMenu.scss'

type Props = {
    itemMenu: {
        title: string,
        url: string,
        path: string,
        icon: string,
        component: JSX.Element,
    }
}

function ItemMenu({ itemMenu }: Props) {
    function render() {
        switch (itemMenu.title) {
            case 'Главная':
            case 'Поиск адресов':
                return (
                    <li className={style.menu__item}>
                        <NavLink
                            end
                            className={({ isActive }) => {
                                return isActive ? style.active : ''
                            }}
                            to={itemMenu.path}>
                            <img src={itemMenu.icon} />
                            <p >
                                {itemMenu.title}
                            </p>
                        </NavLink>
                    </li>

                )
            case 'Настройки':
                return itemMenu.component;
            default:
                return (
                    <li className={style.menu__item}>
                        <div className='menu__item_wrap'>
                            <img src={itemMenu.icon} />
                            <p>{itemMenu.title}</p>
                        </div>
                    </li >
                )
        }
    }

    return (
        <>{render()}</>
    )
}

export default ItemMenu