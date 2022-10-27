import React, { useEffect, useState } from 'react'
import style from './FindedAdresess.scss'

type Props = {
    value: string
}

type tAdres = {
    value: string
}

function FindedAdresess({ value }: Props) {

    const [findedAdresess, setFindedAdresess] = useState([])

    async function request(value: string) {
        const url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
        const token = "b67d076a20cff7910942a7ef1a2088740f79ff1e";

        const json = await fetch(url, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Token " + token
            },
            body: JSON.stringify({ query: value })
        })
        const data = await json.json()
        setFindedAdresess(data.suggestions)
    }

    useEffect(() => {
        if (value.trim().length >= 3) {
            request(value)
        }
    }, [value])


    return (
        <>
            {findedAdresess.length > 0 &&
                <div className={style.wrap}>
                    <h3 className={style.title}>Адреса</h3>
                    <ul>
                        {findedAdresess.map((adres: tAdres, index) => {
                            return (
                                <li className={style.item} key={index}>{adres.value}</li>
                            )
                        })}
                    </ul>
                </div>
            }
        </>
    )
}

export default FindedAdresess