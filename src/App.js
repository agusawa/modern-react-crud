import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Container } from '@material-ui/core'

import IndexPage from './pages/IndexPage.jsx'
import DetailPage from './pages/DetailPage.jsx'
import AddPage from './pages/AddPage.jsx'
import EditPage from './pages/EditPage.jsx'
import AboutPage from './pages/AboutPage.jsx'

import AppBar from './components/AppBar.component.jsx'
import { ArticleProvider } from './context/Article.context.jsx'

const App = () => (
  <ArticleProvider>
    <AppBar />
    <Container style={{ marginTop: '1.5rem' }}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/add" exact component={AddPage} />
        <Route path="/about" exact component={AboutPage} />
        <Route path="/:id" exact component={DetailPage} />
        <Route path="/:id/edit" exact component={EditPage} />
      </Switch>
    </Container>
  </ArticleProvider>
)

export default App
