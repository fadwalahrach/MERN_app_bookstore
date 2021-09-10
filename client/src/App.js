
import React from 'react'
import NavBar from './Shared/NavBar'
import {Switch,Route} from 'react-router-dom'
import Login from './Shared/Login'
import Cart from './Shared/Cart'
import Home from './Components/Home'
const App = () => {
  return (
    <div>
          <NavBar/>

          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/login' component={Login}/>
            <Route path='/cart' component={Cart}/>

          </Switch>
    </div>
  )
}

export default App
