import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'


const PageOne = () => {
  return(
    <div>
      <h1>Page One</h1>
      {/* See explanation below: NOT a good way to navigate */}
      <a href="/pagetwo">Navigate to Page Two</a>
    </div>
  )
}

const PageTwo = () => {
  return(
    <div>Page Two</div>
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



// anchor tags not a good way to navigate between pages
// because it makes a request which then responds with the index.html file
// browser then dumps the current html file (including all React/Redux state!)