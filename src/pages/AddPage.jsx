import { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import ArticleContext from '../context/Article.context.jsx'
import ArticleList from '../components/ArticleList.component.jsx'

import {
    Grid,
    Card,
    CardHeader,
    CardContent,
    IconButton,
    TextField,
    Button,
    Tooltip,
    colors
} from '@material-ui/core'
import { Close as CloseIcon } from '@material-ui/icons'

const styles = {
    textField: css`
        margin-bottom: 12px !important;`,

    button: css`
        background-color: ${colors.blue['A700']} !important;
        color: #eee !important;`,
}

const AddPage = () => {
    const history = useHistory()
    const { addArticle } = useContext(ArticleContext)

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [errors, setErrors] = useState({})

    const handleSubmit = e => {
        e.preventDefault()
        setErrors({})

        const _errors = {}
        if (!title) _errors.title = "Can't be blank"
        if (!body) _errors.body = "Can't be blank"

        if (Object.keys(_errors).length) return setErrors(_errors)

        addArticle({ title, body })

        setTitle('')
        setBody('')
    }

    return (
        <Grid container spacing={3} >
            <Grid item md={6} sm={12} xs={12}>
                <ArticleList />
            </Grid>
            <Grid item md={6} sm={12} xs={12}>
                <Card>
                    <CardHeader
                        title="Add Article"
                        action={
                            <Tooltip title="Close">
                                <IconButton onClick={() => history.push('/')}>
                                    <CloseIcon />
                                </IconButton>
                            </Tooltip>
                        } />

                    <CardContent>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                name="title"
                                label="Title *"
                                variant="outlined"
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                                css={styles.textField}
                                margin="dense"
                                fullWidth
                                error={!!errors.title}
                                helperText={errors.title}
                                autoComplete="off" />

                            <TextField
                                name="body"
                                label="Body *"
                                variant="outlined"
                                value={body}
                                onChange={e => setBody(e.target.value)}
                                css={styles.textField}
                                margin="dense"
                                fullWidth
                                error={!!errors.body}
                                helperText={errors.body}
                                multiline
                                rows={10} />

                            <Button
                                type="submit"
                                color="primary"
                                variant="contained"
                                css={styles.button}>
                                SAVE
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}

export default AddPage
