import React from "react";
import Settings from "../../components/Sidebar/Settings/Settings";
import iconMain from '../img/icon_menu_main.svg'
import iconSearch from '../img/icon_menu_search.svg'
import iconTable from '../img/icon_menu_table.svg'
import iconCalendar from '../img/icon_menu_calendar.svg'
import iconMaps from '../img/icon_menu_maps.svg'
import iconVidgets from '../img/icon_menu_vidgets.svg'
import iconSettings from '../img/icon_menu_settings.svg'
import iconOut from '../img/icon_menu_out.svg'


const titleSettings = 'Настройки'

export const mainMenu = [
    {
        title: 'Главная',
        url: '/',
        path: '/',
        icon: iconMain,
        component: <></>
    },
    {
        title: 'Поиск адресов',
        url: '/address',
        path: '/address',
        icon: iconSearch,
        component: <></>
    },
    {
        title: 'Таблицы',
        url: '',
        path: '',
        icon: iconTable,
        component: <></>
    },

    {
        title: 'Календарь',
        url: '',
        path: '',
        icon: iconCalendar,
        component: <></>
    },
    {
        title: 'Карты',
        url: '',
        path: '',
        icon: iconMaps,
        component: <></>
    },
    {
        title: 'Виджеты',
        url: '',
        path: '',
        icon: iconVidgets,
        component: <></>
    },
    {
        title: titleSettings,
        url: '',
        path: '',
        icon: iconSettings,
        component: <Settings icon={iconMain} title={titleSettings} />
    },
    {
        title: 'Выход',
        url: '',
        path: '',
        icon: iconOut,
        component: <></>
    }
];
