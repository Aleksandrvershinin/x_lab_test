import React, { useEffect, useState } from 'react'
import Button from '../ui/Button/Button'
import style from './News.scss'

type Props = {}

type tArticle = {
    title: string,
    description: string
}

function News({ }: Props) {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(false)
    const [messageError, setMessageError] = useState('')

    async function loadNews() {
        setLoading(true)
        setMessageError('')
        try {
            const json = await fetch('https://newsapi.org/v2/everything?q=tesla&from=2022-09-27&sortBy=publishedAt&apiKey=8b859ec053704bf8a413d059ad6fe7ce')
            const data = await json.json()
            if (data.articles) {
                setArticles(data.articles)
            }
        } catch (error) {
            setMessageError('Произошла ошибка')
            throw error
        } finally {
            setLoading(false)
        }

    }

    useEffect(() => {
        loadNews()
    }, [])


    return (
        <>
            <h2 className='title'>Новости</h2>
            {loading &&
                <p>...Загрузка</p>
            }
            {messageError &&
                <>
                    <p className={style.messageError}>{messageError}</p>
                    <Button className={style.btnReload} onClick={loadNews}>Обновить</Button>
                </>
            }
            {articles &&
                <ul className={style.articles__list}>
                    {articles.map((article: tArticle, index) => {
                        return (
                            <li key={index} className={style.article__item}>
                                <h3 className={style.article__title}> {article.title}</h3>
                                <p
                                    dangerouslySetInnerHTML={{ __html: article.description }}
                                    className={style.article__description}></p>
                            </li>
                        )
                    })}

                </ul>
            }
        </>
    )
}

export default News