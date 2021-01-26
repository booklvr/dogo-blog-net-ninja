import Navbar from './Navbar'
import Home from './Home'
import Create from './Create'
import BlogDetails from './BlogDetails'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='content'>
          <Switch>
            <Route path='/' component={Home} exact></Route>
            <Route path='/create' component={Create}></Route>
            <Route path='/blogs/:id' component={BlogDetails}></Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
