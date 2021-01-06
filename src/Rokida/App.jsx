import React ,{ Suspense , lazy} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
  import Loading from './Other/Loading'

const Home = lazy (() => import('./Pages/Home'))
const Items = lazy (() => import('./Pages/Items'))
const Support = lazy (() => import('./Pages/Support'))
const User = lazy (() => import('./Pages/User'))
const Login = lazy (() => import('./Pages/Login'))
const Registration = lazy (() => import('./Pages/Registration'))
const App = () => {
    return(
        <Router>
            <Suspense fallback={<Loading/>} >
                <Switch>
                    <Route exact path="/"><Home/></Route>
                    <Route path="/Items"><Items/></Route>
                    <Route path="/Support"><Support/></Route>
                    <Route path="/User"><User/></Route>
                    <Route path="/Login"><Login/></Route>
                    <Route path="/Registration"><Registration/></Route>
                </Switch>
            </Suspense>
        </Router>
    )
}
export default React.memo(App)