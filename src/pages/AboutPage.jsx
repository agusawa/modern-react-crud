import { Grid, Paper, Typography } from '@material-ui/core'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const styles = {
    paper: css`
        padding: 2rem;`,

    textGrey: css`
        color: #95a5a6;`
}

const IndexPage = () => {
    return (
        <Grid container spacing={3} >
            <Grid item md={6} sm={12} xs={12}>
                <Paper css={styles.paper}>
                    <Typography variant="h5">
                        About Us
                    </Typography>

                    <br />

                    <Typography>
                        This is a simple management blog article created using <code>react-hooks</code> and <code>react-context</code> for state management. Without <code>React.Component</code>, <code>redux</code>, or <code>mobx</code>
                    </Typography>

                    <br />
                    <br />

                    <Typography>
                        Download this repository project here :
                    </Typography>
                    <a href="https://github.com/Aguezz/modern-react-crud/" target="_blank" rel="noopener noreferrer">
                        https://github.com/Aguezz/modern-react-crud/
                    </a>

                    <br />
                    <br />

                    <Typography>
                        See my portfolio here :
                    </Typography>
                    <a href="https://aguezz.github.io/" target="_blank" rel="noopener noreferrer">
                        https://aguezz.github.io/
                    </a>

                    <br />
                    <br />

                    <Typography>
                        Linkedin :
                    </Typography>
                    <a href="https://www.linkedin.com/in/agus-stiawan-793b4b169/" target="_blank" rel="noopener noreferrer">
                        https://www.linkedin.com/in/agus-stiawan-793b4b169/
                    </a>

                    <br />
                    <br />


                    <Typography css={styles.textGrey}>
                        Thank you ;D
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default IndexPage
