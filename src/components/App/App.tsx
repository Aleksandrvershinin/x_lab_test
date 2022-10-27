import React from 'react'
import { Routes, Route, } from "react-router-dom";
import "../../assets/style/normalize.global.css";
import "../../assets/style/style.global.scss";
import Header from '../Header/Header';
import News from '../News/News';
import SearchAdress from '../SearchAdress/SearchAdress';
import Sidebar from '../Sidebar/Sidebar';
import style from './App.scss'

type Props = {}

function App({ }: Props) {
    return (
        <div className={style.content}>
            <Header></Header>
            <div className={style.wrap}>
                <Sidebar></Sidebar>
                <div className={style.wrap__main}>
                    <Routes>
                        <Route path='/' element={<News />} />
                        <Route path='/address' element={<SearchAdress />} />
                    </Routes>
                </div>

            </div>

        </div>
    )
}

export default App