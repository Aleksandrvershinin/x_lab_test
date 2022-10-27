import React, { useState } from 'react'
import Button from '../ui/Button/Button'
import Input from '../ui/Input/Input'
import style from './SearchAdress.scss'
import iconSearch from '../../../src/assets/img/icon_search.svg'
import FindedAdresess from '../FindedAdresess/FindedAdresess'

type Props = {}

function SearchAdress({ }: Props) {
    const [inputValue, setInputValue] = useState('')
    const [searchValue, setSearchValue] = useState('')

    function changeInputValue(e: React.ChangeEvent<HTMLInputElement>) {
        setInputValue(e.target.value)
    }

    function submitHandle(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setSearchValue(inputValue)
    }

    return (
        <>
            <h2 className='title'>Поиск адресов</h2>
            <p className={style.description}>Введите интересующий вас адрес</p>
            <form className={style.form} onSubmit={submitHandle}>
                <Input
                    value={inputValue}
                    onChange={changeInputValue}
                    className={style.input}
                    placeholder='Введите интересующий вас адрес'
                />
                <Button className={style.btn}>
                    <img src={iconSearch} />
                    <p>Поиск</p>
                </Button>
            </form>
            <FindedAdresess value={searchValue}></FindedAdresess>
        </>
    )
}

export default SearchAdress