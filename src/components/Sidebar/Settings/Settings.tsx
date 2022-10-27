import React, { useState } from 'react'
import style from './Settings.scss'
import iconSubSettingsUser from '../../../assets/img/icon_sub_settings_user.svg'
import iconSubSettingsMoney from '../../../assets/img/icon_sub_settings_money.svg'
import iconOpenSettings from '../../../assets/img/icon_open_settings.svg'

type Props = {
    title: string,
    icon: string
}

function Settings({ title, icon }: Props) {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <li onClick={() => setIsOpen(!isOpen)}>
            <div className='menu__item_wrap'>
                <img src={icon} />
                <div className={style.settings__title}>
                    <p>{title}</p>
                    <img src={iconOpenSettings} className={style.settings__title_icon} />
                </div>
            </div>
            {isOpen &&
                <ul className={style.sub__settings} >
                    <li className={style.sub__settings_item}>
                        <img src={iconSubSettingsUser} />
                        <p>
                            Настройки профиля
                        </p>
                    </li>
                    <li className={style.sub__settings_item}>
                        <img src={iconSubSettingsMoney} />
                        <p>
                            Управление финансами
                        </p>
                    </li>
                </ul>
            }
        </li >
    )
}

export default Settings