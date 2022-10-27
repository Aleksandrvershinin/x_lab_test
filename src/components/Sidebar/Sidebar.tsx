import React from 'react'
import useWindowSize from '../../assets/hooks/useWindowSize'
import Menu from './Menu/Menu'
import style from './Sidebar.scss'

type Props = {}

function Sidebar({ }: Props) {
    const { width } = useWindowSize()
    if (width === undefined || width <= 768) {
        return null
    }

    return (
        <div className={style.sidebar}>
            <Menu></Menu>
        </div>
    )
}

export default Sidebar