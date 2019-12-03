import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import ArticleContext from '../context/Article.context'
import {
    Button,
    Card,
    CardHeader,
    CardContent,
    IconButton,
    List,
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Menu,
    MenuItem,
    Tooltip
} from '@material-ui/core'
import {
    Add as AddIcon,
    MoreVert as MoreVertIcon
} from '@material-ui/icons'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const styles = {
    card: css`
        display: block;
        width: 100%;`
}

const DeleteDialog = ({ open, handleClose, handleDeleteArticle }) => (
    <Dialog
        open={open}
        onClose={handleClose}>
        <DialogTitle>
            Delete Alert
        </DialogTitle>
        <DialogContent>
            <DialogContentText>
                Are you sure want to delete this article?
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose} color="primary" autoFocus>
                Disagree
            </Button>
            <Button color="secondary" onClick={handleDeleteArticle}>
                Agree
            </Button>
        </DialogActions>
    </Dialog>
)

const ArticleList = ({ activeId }) => {
    const { articles, deleteArticle } = useContext(ArticleContext)

    const [anchorEl, setAnchorEl] = React.useState({}) // For show menu in right side of article list
    const [open, setOpen] = useState(false)
    const [activeArticle, setActiveArticle] = useState('')

    const history = useHistory()

    const handleDeleteArticle = id => {
        if (id) {
            setOpen(true)
            setActiveArticle(id)
        } else {
            deleteArticle(activeArticle)
            setActiveArticle('')
            setOpen(false)
            history.push('/')
        }
    }

    const handleAnchorEl = (key, e) => setAnchorEl({ ...anchorEl, [key]: e.currentTarget })

    const handleActionClose = (key) => setAnchorEl({ ...anchorEl, [key]: null })

    return (
        <React.Fragment>
            <DeleteDialog
                open={open}
                handleClose={() => setOpen(false)}
                handleDeleteArticle={() => handleDeleteArticle(null)} />

            <Card css={styles.card}>
                <CardHeader
                    title="Articles"
                    action={
                        <Tooltip title="Add new article">
                            <IconButton onClick={() => history.push('/add')}>
                                <AddIcon />
                            </IconButton>
                        </Tooltip>
                    }
                />
                <CardContent>
                    <List dense>
                        {articles.length ?
                            articles.map((article, key) => (
                                <ListItem
                                    key={key}
                                    button
                                    selected={activeId === article.id}
                                    onClick={() => history.push(`/${article.id}`)}>
                                    <ListItemText
                                        primary={article.title}
                                        secondary={article.body}
                                        secondaryTypographyProps={{ noWrap: true }} />
                                    <ListItemSecondaryAction>
                                        <Tooltip title="Show options">
                                            <IconButton
                                                edge="end"
                                                onClick={e => handleAnchorEl(key, e)}
                                                aria-controls={`menu-${key}`}
                                                aria-haspopup="true">
                                                <MoreVertIcon />
                                            </IconButton>
                                        </Tooltip>

                                        <Menu
                                            id={`menu-${key}`}
                                            anchorEl={anchorEl[key]}
                                            open={!!anchorEl[key]}
                                            onClose={() => handleActionClose(key)}>
                                            <MenuItem onClick={() => { handleActionClose(key); history.push(`/${article.id}/edit`) }}>
                                                Edit
                                            </MenuItem>
                                            <MenuItem onClick={() => { handleDeleteArticle(article.id); handleActionClose(key) }}>
                                                Delete
                                            </MenuItem>
                                        </Menu>
                                    </ListItemSecondaryAction>
                                </ListItem>
                            )) :
                            (<p>No data found</p>)
                        }
                    </List>
                </CardContent>
            </Card>
        </React.Fragment>
    )
}

export default ArticleList
