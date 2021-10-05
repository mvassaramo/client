import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import Header from './Header'
import StreamCreate from './streams/StreamCreate'
import StreamDelete from './streams/StreamDelete'
import StreamEdit from './streams/StreamEdit'
import StreamShow from './streams/StreamShow'
import StreamList from './streams/StreamList'
import history from '../history'


const App = () => {
  return(
    <div className="ui container">
      <Router history={history}>
        <Header />
        <Switch>
          <Route path="/" exact component={StreamList}/>
          <Route path="/streams/new" exact component={StreamCreate}/>
          <Route path="/streams/edit/:id" exact component={StreamEdit}/>
          <Route path="/streams/delete/:id" exact component={StreamDelete}/>
          <Route path="/streams/:id" exact component={StreamShow}/>
        </Switch>
      </Router>
    </div>
  )
}

export default App


// <a href="/pagetwo">Navigate to Page Two</a>
// anchor tags not a good way to navigate between pages
// because it makes a request which then responds with the index.html file
// browser then dumps the current html file (including all React/Redux state!)