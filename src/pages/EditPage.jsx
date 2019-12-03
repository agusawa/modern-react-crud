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
    Snackbar,
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

const EditPage = (props) => {
    const history = useHistory()
    const { articles, editArticle } = useContext(ArticleContext)

    const activeId = props.match.params.id
    const article = articles.filter(article => article.id === activeId)[0]

    const [id, setId] = useState('') // handling component don't want to refetch
    const [title, setTitle] = useState(article ? article.title : '')
    const [body, setBody] = useState(article ? article.body : '')
    const [errors, setErrors] = useState({})
    const [successMessage, setSuccessMessage] = useState(false)

    if (id !== activeId) {
        setId(activeId)
        setTitle(article ? article.title : '')
        setBody(article ? article.body : '')
    }

    const handleSubmit = e => {
        e.preventDefault()
        setErrors({})

        const _errors = {}
        if (!title) _errors.title = "Can't be blank"
        if (!body) _errors.body = "Can't be blank"

        if (Object.keys(_errors).length) return setErrors(_errors)

        editArticle(activeId, { title, body })
        setSuccessMessage(true)
    }

    const closeSuccessMessage = (event, reason) => {
        if (reason === 'clickaway') return

        setSuccessMessage(false);
    }

    return (
        <Grid container spacing={3} >
            <Grid item md={6} sm={12} xs={12}>
                <ArticleList activeId={activeId} />
            </Grid>
            <Grid item md={6} sm={12} xs={12}>
                <Card>
                    <CardHeader
                        title="Edit Article"
                        action={
                            <Tooltip title="Close">
                                <IconButton onClick={() => history.push('/')}>
                                    <CloseIcon />
                                </IconButton>
                            </Tooltip>
                        } />

                    <CardContent>
                        {article ?
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
                            </form> :
                            <p>Article not found</p>
                        }
                    </CardContent>
                </Card>
            </Grid>

            <Snackbar
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={successMessage}
                autoHideDuration={5000}
                onClose={closeSuccessMessage}
                message={<span>Data successfully updated</span>}
                action={
                    <IconButton
                        key="close"
                        aria-label="close"
                        color="inherit"
                        onClick={closeSuccessMessage}>
                        <CloseIcon />
                    </IconButton>
                }
            />
        </Grid>
    )
}

export default EditPage
