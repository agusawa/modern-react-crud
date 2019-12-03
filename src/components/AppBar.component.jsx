import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import {
    AppBar,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Container,
    Toolbar,
    Typography,
    IconButton,
    colors
} from '@material-ui/core'
import {
    Menu as MenuIcon,
    List as ListIcon,
    Info as InfoIcon
} from '@material-ui/icons'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const styles = {
    background: css`
        background-color: ${colors.blue['A700']} !important;`,

    title: css`
        flex-grow: 1;`,

    list: css`
        width: 250px;`
}

const AppBarComponent = () => {
    const history = useHistory()
    const [open, setOpen] = useState(false)

    return (
        <React.Fragment>
            <AppBar position="static" css={styles.background}>
                <Container>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={() => setOpen(true)}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" css={styles.title}>
                            React Modern
                    </Typography>
                    </Toolbar>
                </Container>
            </AppBar>

            <Drawer open={open} onClose={() => setOpen(false)}>
                <div role="presentation" css={styles.list}>
                    <List>
                        <ListItem button onClick={() => { history.push('/'); setOpen(false) }}>
                            <ListItemIcon>
                                <ListIcon />
                            </ListItemIcon>
                            <ListItemText>
                                Articles
                            </ListItemText>
                        </ListItem>
                        <ListItem button onClick={() => { history.push('/about'); setOpen(false) }}>
                            <ListItemIcon>
                                <InfoIcon />
                            </ListItemIcon>
                            <ListItemText>
                                About
                            </ListItemText>
                        </ListItem>
                    </List>
                </div>
            </Drawer>
        </React.Fragment>
    )
}

export default AppBarComponent
