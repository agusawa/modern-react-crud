import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import {
    Grid,
    Paper,
    Typography,
    Button
} from '@material-ui/core'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import ArticleContext from '../context/Article.context'
import ArticleList from '../components/ArticleList.component.jsx'
import nl2br from '../libs/nl2br.jsx'

const styles = {
    paper: css`
        padding: 2rem;`,

    body: css`
        color: #7f8c8d;`
}

const DetailPage = (props) => {
    const activeId = props.match.params.id
    const history = useHistory()

    const { articles } = useContext(ArticleContext)

    const article = articles.filter(article => article.id === activeId)[0]

    return (
        <Grid container spacing={3}>
            <Grid item md={6} sm={12} xs={12}>
                <ArticleList activeId={activeId} />
            </Grid>
            <Grid item md={6} sm={12} xs={12}>
                <Paper css={styles.paper}>
                    {article ?
                        <React.Fragment>
                            <Typography variant="h5" component="h3">
                                {article.title}
                            </Typography>
                            <br />
                            <Typography component="p" css={styles.body}>
                                {nl2br(article.body)}
                            </Typography>
                        </React.Fragment> :
                        <p>Article not found</p>
                    }

                    <br />

                    <Button color="secondary" onClick={() => history.push('/')}>Close</Button>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default DetailPage
