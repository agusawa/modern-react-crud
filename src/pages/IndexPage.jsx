import React from 'react'
import { Grid } from '@material-ui/core'
import ArticleList from '../components/ArticleList.component.jsx'

const IndexPage = () => {
    return (
        <Grid container spacing={3} >
            <Grid item md={6} sm={12} xs={12}>
                <ArticleList />
            </Grid>
        </Grid>
    )
}

export default IndexPage
