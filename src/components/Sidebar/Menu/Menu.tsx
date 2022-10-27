import React from 'react'
import { mainMenu } from '../../../assets/scripts/mainMenu'
import ItemMenu from './ItemMenu/ItemMenu'
import style from './Menu.scss'

type Props = {}

function Menu({ }: Props) {
    return (
        <>
            <h3 className={style.title}>Меню</h3>
            <ul className={style.menu}>
                {
                    mainMenu.map(itemMenu => {
                        return (
                            <ItemMenu
                                itemMenu={itemMenu}
                                key={itemMenu.title} />
                        )
                    })
                }
            </ul>

        </>

    )
}

export default Menu