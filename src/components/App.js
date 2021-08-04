import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'


const PageOne = () => {
  return(
    <div>
      <h1>Page One</h1>
      <Link to="/pagetwo">Navigate to Page Two</Link>
    </div>
  )
}

const PageTwo = () => {
  return(
    <div>
      <h1>Page Two</h1>
      <Link to="/">Navigate to Page One</Link>
    </div>
  )
  }

const App = () => {
  return(
    <div>
      <BrowserRouter>
        <Route path="/" exact component={PageOne}/>
        <Route path="/pagetwo" component={PageTwo}/>
      </BrowserRouter>
    </div>
  )
}

export default App


// <a href="/pagetwo">Navigate to Page Two</a>
// anchor tags not a good way to navigate between pages
// because it makes a request which then responds with the index.html file
// browser then dumps the current html file (including all React/Redux state!)