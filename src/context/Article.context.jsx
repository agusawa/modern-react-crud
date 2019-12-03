import React, { useState } from 'react'
import uuidv4 from 'uuid/v4'

const ArticleContext = React.createContext()
const { Provider, Consumer: ArticleConsumer } = ArticleContext


const ArticleProvider = ({ children }) => {
    const initialState = [
        { id: '1', title: 'Fire in California', body: 'On Monday, a fire starts in California. The fire spreads very quickly because of high winds.\n It burns more than 3,300 acres of land. It does not burn any buildings. However, the danger gets bigger. Firefighters try to control the fire. It is very difficult. They are not successful.\n\n Officials closely watch the situation. They want to declare a state of emergency. The situation gets very bad. Officials plan to take local people to a safer place.\n\n Difficult words: spread (to move over a large area), declare (to say something officially), local (something or someone that belongs to a specific area).\n\n You can watch the original video in the Level 3 section.' },
        { id: '2', title: 'Spongebob on Netflix', body: 'There is a very successful TV show for children. It is called Spongebob Squarepants. It is on TV for more than 20 years. People still like it today.\n Netflix is an American media company. It wants to do big business with another TV company. Netflix wants to make new parts of Spongebob Squarepants. It wants to be better than Disney Plus. Disney Plus is a new company with programs for children.\n\n Bill Fagerbakke is an actor. He gives his voice to one of the characters in the show. He remembers the start of the show. He does not like the show very much. He changes his opinion quickly. Now he is happy that children can watch it again.' }
    ]

    const [articles, setArticles] = useState(initialState)

    const addArticle = data => {
        data.id = uuidv4()
        setArticles([data, ...articles])
    }

    const editArticle = (id, { title, body }) => {
        const index = articles.map(article => article.id).indexOf(id)

        if (index > -1) {
            const _articles = [...articles]
            _articles[index] = { id, title, body }
            setArticles(_articles)
        }
    }

    const deleteArticle = id => {
        const _articles = articles.filter(article => article.id !== id)
        setArticles(_articles)
    }

    const providerValue = {
        articles,
        addArticle,
        editArticle,
        deleteArticle
    }

    return (
        <Provider value={providerValue}>
            {children}
        </Provider>
    )
}

export {
    ArticleProvider,
    ArticleConsumer
}

export default ArticleContext
